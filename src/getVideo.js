import "dotenv/config.js";

let numberOfVideos = 0;
let AllVideos = [];

export async function getUserId(user) {
  const userNameFetch = await fetch(
    `https://www.youtube.com/results?search_query=${user}&sp=EgIQAg%253D%253D`
  );
  const userSearch = await userNameFetch.text();
  const userChannelFirstIndex = userSearch.search(/browseId\":"U/);
  const userId = userSearch.slice(
    userChannelFirstIndex + 11,
    userChannelFirstIndex + 35
  );
  return userId;
}

export async function getAllVideos(nextPage, userId) {
  const newUserId = userId;
  if (nextPage == null || nextPage == undefined) {
    nextPage = "";
  }
  const userPlaylistId = newUserId.split("");
  userPlaylistId[1] = "U";
  const newUserPlayListId = userPlaylistId.join("");
  const ytUserVideosFetch = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.API_KEY}&part=snippet&maxResults=50&playlistId=${newUserPlayListId}&pageToken=${nextPage}`
  );
  const userVideos = await ytUserVideosFetch.json();
  if (userVideos.pageInfo.totalResults > 125000) {
    return { MaxVideosError: "The channel exceeded the number of videos" };
  }
  AllVideos.push(userVideos.items);
  numberOfVideos += userVideos.pageInfo.resultsPerPage;
  if (numberOfVideos >= userVideos.pageInfo.totalResults) {
    const newAllVideos = [...AllVideos];
    numberOfVideos = 0;
    AllVideos = [];
    return newAllVideos.flat(1);
  }
  console.log(numberOfVideos);
  return getAllVideos(userVideos.nextPageToken, newUserId);
}
