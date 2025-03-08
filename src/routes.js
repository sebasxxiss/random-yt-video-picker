import express from "express";
import { getAllVideos, getUserId } from "./getVideo.js";

const router = express.Router();

router.get("/videos", async (req, res) => {
  const userName = req.query.userName;
  try {
    if (userName.length <= 50) {
      console.log(userName);
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
