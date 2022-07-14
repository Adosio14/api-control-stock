import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import { createConnection } from "typeorm";
import router from "./src/routes";
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

const conn = createConnection()

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
