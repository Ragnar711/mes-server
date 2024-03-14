import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { config } from "dotenv";

config();

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
