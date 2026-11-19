// https://developers.google.com/youtube/iframe_api_reference

const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";

const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// deno-lint-ignore no-unused-vars
function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  event.target.setVolume(50);
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  switch (event.data) {
    case YT.PlayerState.UNSTARTED:
      postPlayerState("UNSTARTED");
      break;
    case YT.PlayerState.PLAYING:
      postPlayerState("PLAYING");
      break;
    case YT.PlayerState.PAUSED:
      postPlayerState("PAUSED");
      break;
    case YT.PlayerState.BUFFERING:
      postPlayerState("BUFFERING");
      break;
    case YT.PlayerState.CUED:
      postPlayerState("CUED");
      break;
    case YT.PlayerState.ENDED:
      postPlayerState("ENDED");
      break;
    default:
      postPlayerState("UNKNOWN");
      break;
  }
}

function postPlayerState(state) {
  const type = "YT_PLAYER_STATE";
  postMessage({ type, state }, "*");
}
