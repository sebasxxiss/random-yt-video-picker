import express from "express";
import router from "./routes.js";
import cors from "cors";

const port = process.env.PORT ?? 5000;
const app = express();
app.use(
  cors({
    origin: [
      `http://localhost:${port}`,
      "https://random-yt-video-picker.onrender.com",
    ],
  })
);
app.use(express.json());
app.use("/", express.static("public"));
app.use("/api", router);

app.listen(port);
