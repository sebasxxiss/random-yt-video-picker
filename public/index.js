const iframe = document.querySelector("#video");
const iframeContainer = document.querySelector(".iframeContainer");
const search = document.querySelector("#search");
const reload = document.querySelector("#reload");

function getRandomVideo() {
  const allUserVideos = JSON.parse(localStorage.getItem("fetch"));
  const randomNumber = Math.floor(
    Math.random() * allUserVideos.videos.length - 1
  );
  const randomVideo = allUserVideos.videos[randomNumber];
  const channelName = randomVideo.snippet.channelTitle;
  const videoId = randomVideo.snippet.resourceId.videoId;
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
  search.value = channelName;
  iframeContainer.style.display = "none";
}

async function randomVideoGenerator(user) {
  if (
    localStorage.getItem("fetch") == null ||
    localStorage.getItem("fetch") == undefined
  ) {
    const userFetch = await fetch(
      `http://localhost:8000/api/videos?userName=${user}`
    );
    const userData = await userFetch.json();
    localStorage.setItem("fetch", JSON.stringify(userData));
  }
  const allUserVideos = JSON.parse(localStorage.getItem("fetch"));
  const randomNumber = Math.floor(
    Math.random() * allUserVideos.videos.length - 1
  );
  const randomVideo = allUserVideos.videos[randomNumber];
  const videoId = randomVideo.snippet.resourceId.videoId;
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
  iframeContainer.style.display = "none";
}

//Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("fetch") == null) {
    return;
  } else {
    getRandomVideo();
  }
});
reload.addEventListener("click", () => {
  if (localStorage.getItem("fetch") == null) {
    return;
  } else {
    getRandomVideo();
  }
});
search.addEventListener("keydown", async (e) => {
  if (e.key == "Enter") {
    localStorage.removeItem("fetch");
    iframeContainer.style.display = "flex";
    const dots = document.querySelectorAll(".iframeContainer p");
    dots[0].innerText = ".";
    dots[1].innerText = ".";
    dots[2].innerText = ".";
    dots[0].style = "animation: wave 1s linear 0s infinite";
    dots[1].style = "animation: wave 1s linear 0.2s infinite";
    dots[2].style = "animation: wave 1s linear 0.3s infinite";
    await randomVideoGenerator(search.value);
  }
});
