import express from "express";
import router from "./routes.js";
import cors from "cors";

let origin = "";
const port = process.env.PORT ?? 10000;
if (process.env.NODE_ENV === "developmnet") {
  origin = `http://localhost:${port}`;
} else {
  origin = "https://random-yt-video-picker.onrender.com";
}

const app = express();
app.use(cors({ origin: origin }));
app.use(express.json());
app.use("/", express.static("public"));
app.use("/api", router);

app.listen(port);
