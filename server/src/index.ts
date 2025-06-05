import cors, { CorsOptions } from "cors"
import dotenv from "dotenv";
import express from "express";
import { urlRouter } from "./routes/urlRoutes";
import errorMiddleware from "./midddlewares/errorMiddleware";
import dbConnect from "./utils/dbConnect";
import UrlController from "./controllers/urlController";

dotenv.config();
const PORT = process.env.PORT || 5000
const frontendUrl = process.env.FRONTEND_URL as string;
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  frontendUrl,
];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    const env = process.env.NODE_ENV;

    if (env === "development") {
      // Allow all in dev mode
      callback(null, true);
    } else {
      // Production: allow only whitelisted domains
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    }
  },
  allowedHeaders: ["Content-Type"],
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  optionsSuccessStatus: 200,
};

const app = express()

app.use(cors(corsOptions))
app.use(express.json())

dbConnect();

app.use("/api/url", urlRouter);
app.get("/:hashId", UrlController.redirectShortUrl)

app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log("Listening in port 5000")
})
