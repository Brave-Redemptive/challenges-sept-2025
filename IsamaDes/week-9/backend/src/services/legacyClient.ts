import axios from "axios";
import { config } from "../config";

export type LegacyCustomer = {
    id: string,
    name: string,
    username?: string,
    email?: string,
    phone?: string,
}

export async function fetchLegacyCustomers(): Promise<LegacyCustomer[]>{
    const url = `${config.legacyBaseUrl}/users`;
    const response = await axios.get(url, {timeout: 5000})
    return response.data as LegacyCustomer[];

}

