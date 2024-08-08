import express from "express";
import http from "http";
import dotenv from "dotenv";
import cors from "cors";
import "colors";

dotenv.config();

const app = express();
const PORT = 4000;

const MyServer = async () => {
  try {
    const server = http.createServer(app);
    app.use(cors());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use((req, res, next) => {
      res.setHeader("Cache-Control", "no-store");
      next();
    });
    app.get("/", (req, res, next) => {
      res.status(200).json({ message: "Oke" });
    });
    server.listen(PORT, () =>
      console.log(`Server started on ${PORT}`.cyan.bold)
    );
  } catch (error) {}
};

MyServer();
