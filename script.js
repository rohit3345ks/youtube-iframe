/**
 * This method extracts video id from a youtube video URL
 * @param {string} url: youtube video URL
 */
function getVideoIdFromURL(url) {
    if (!url) return "";
    if (!url.startsWith("http")) return "";
    console.log(url, "url rohit");
    const urlObj = new URL(url);
    console.log(urlObj, "urlObj rohit");
    const urlSearchParams = new URLSearchParams(urlObj.searchParams);
    console.log(urlSearchParams, "url search params rohit");
    return urlSearchParams.get("v");
}

function showYouTubeVideo() {
    const inputValue = document.querySelector("#youtube-video-id").value;
    const videoId = getVideoIdFromURL(inputValue);
    console.log(videoId, "videoId rohit");
    const iframeContainer = document.querySelector("#youtube-iframe");
    iframeContainer.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
}

function handleKeyUp(event) {
    if (event.key === "Enter") {
        showYouTubeVideo();
    }
}