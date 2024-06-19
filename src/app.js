import express from "express";
import router from "./routes.js";
import cors from "cors";

const app = express();
const port = process.env.PORT ?? 10000;
app.use(cors({ origin: `http://localhost:${port}` }));
app.use(express.json());
app.use("/", express.static("public"));
app.use("/api", router);

app.listen(port);
