import { useState } from "react";
import axiosInstance from "./api/axiosInstance";

// Types
interface ContactInfo {
  email: string | null;
  phone: string | null;
}

interface Customer {
  customerId: number;
  fullName: string;
  username?: string | null;
  contact: ContactInfo;
}

const App = () => {
  const [data, setData] = useState<Customer[] | null>(null);
  const [source, setSource] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function fetchData(version: "v1" | "v2") {
    try {
      setLoading(true);
      setError("");
      setData(null);

      const endpoint = version === "v1" ? "/v1/customers" : "/v2/customers";

      const res = await axiosInstance.get(endpoint);
      setData(res.data.data as Customer[]);
      setSource(res.data.source as string);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        LegacyBridge Test UI
      </h1>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => fetchData("v1")}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Fetch V1 (Legacy Raw)
        </button>

        <button
          onClick={() => fetchData("v2")}
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Fetch V2 (Transformed)
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center text-gray-600 text-lg">Loading...</p>
      )}

      {/* Error */}
      {error && (
        <p className="text-center text-red-500 text-lg">{error}</p>
      )}

      {/* Output */}
      {data && (
        <div className="max-w-3xl mx-auto mt-8">
          <p className="text-center text-gray-700 mb-4">
            <span className="font-semibold">Source:</span> {source}
          </p>

          <div className="bg-white p-4 rounded-md shadow">
            <pre className="whitespace-pre-wrap text-sm">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
