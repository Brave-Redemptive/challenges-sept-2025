import express from "express";
import v1Customers from "./routes/v1/customers";
import v2Customers from "./routes/v2/customers";
import errorHandler from "./middlewares/errorHandler.js";
import cors from "cors";


const app = express();
app.use(express.json());

app.use(
  cors({
    origin: ["https://legacybridge-frontend.vercel.app", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get('/health', (req, res) => res.send('ok'));
app.use('/v1', v1Customers);
app.use('/v2', v2Customers)
app.use(errorHandler);

export default app;