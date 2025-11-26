import app from "./app"
import dotenv from "dotenv";
import connectDB from "./config/db";

const PORT = process.env.PORT || 5000;
dotenv.config();

const startServer = async () => {
  try {
    await connectDB();
    console.log("Database connected successfully");

    const server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    const shutdown = (signal: any) => {
      console.log(`${signal} received, shutting down gracefully`);
      server.close(() => {
        console.log("Process terminated");
        process.exit(0);
      });
    };

    process.on("SIGTERM", () => shutdown("SIGTERM"));
    process.on("SIGINT", () => shutdown("SIGINT"));

    server.on("error", (err) => {
      console.error("Server error:", err);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
