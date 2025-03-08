import express from "express";
import router from "./routes.js";
import cors from "cors";
import jwt from "jsonwebtoken";

const port = process.env.PORT ?? 8000;
const app = express();
let devOrigin;
if (process.env.NODE_ENV == "development") {
  devOrigin = "http://localhost:8000";
}
app.use(
  cors({
    origin: [
      devOrigin,
      "https://random-yt-video-picker.onrender.com",
      "https://random-yt-video-picker-production.up.railway.app/",
      "https://ytrandomvideo.netlify.app",
    ],
  })
);

app.use(express.json());
app.use("/", express.static("public"));
app.use("/api", router);

app.listen(port);
