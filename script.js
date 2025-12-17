/**
 * This method extracts video id from a youtube video URL
 * @param {string} url: youtube video URL
 */

function getVideoIdFromURL(url) {
    try {
        if (!url) return "";
        if (!url.startsWith("http")) return "";
        let videoId = "";
        const urlObj = new URL(url);
        const urlSearchParams = new URLSearchParams(urlObj.searchParams);
        if (urlObj.host === "youtu.be") {
            videoId = urlObj.pathname;
        } else {
            videoId = urlSearchParams.get("v");
        }
        return [videoId, urlSearchParams.get("t")?.replace("s", "") ?? "0"];
    }
    catch (error) {
        console.log(error);
        return ["", "0"];
    }
}

function showYouTubeVideo(event) {
    event.preventDefault();
    const inputValue = document.querySelector("#youtube-video-id").value;
    const [videoId, start] = getVideoIdFromURL(inputValue);
    const iframeContainer = document.querySelector("#youtube-iframe");
    iframeContainer.setAttribute("src", `https://www.youtube.com/embed/${videoId}?si=zMRERwwT9CMmSE7s&amp;start=${start}`);
}
