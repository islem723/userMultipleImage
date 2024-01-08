import express, { json, urlencoded } from "express";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import dbConnection from "./config/db.js";

const app = express();
const port = 3001;

app.use(cors());
app.use(morgan("dev"));
app.use(json());

app.use(urlencoded({ extended: true }));

// Use the userRoutes for handling user-related routes
app.use("/user", userRoutes);

dbConnection(() =>
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  })
);
