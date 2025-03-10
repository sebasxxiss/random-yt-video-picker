import express from "express";
import { getAllVideos, getUserId } from "./getVideo.js";

const router = express.Router();

router.get("/videos", async (req, res) => {
  res.header("Acces-Control-Allow-Origin", [
    "https://random-yt-video-picker-production.up.railway.app",
    "https://ytrandomvideo.netlify.app",
  ]);
  if (req.header("Origin") == undefined) {
    res.send("Origen no admitido");
    return;
  }
  const userName = req.query.userName;
  try {
    if (userName.length <= 50) {
      console.log(userName);
      console.log(req.header("Origin"));
      const userId = await getUserId(userName);
      const allUserVideos = await getAllVideos(null, userId);
      res.json({ videos: allUserVideos });
    }
    if (userName == undefined || userName == null) {
      throw new Error("the channel name is undefined");
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
