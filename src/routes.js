import express from "express";
import { getAllVideos } from "./getVideo.js";

const router = express.Router();

router.get("/videos", async (req, res) => {
  const userName = req.query.userName;
  try {
    if (userName.length <= 50) {
      console.log(req.query.userName);
      const allUserVideos = await getAllVideos(null, userName);
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
