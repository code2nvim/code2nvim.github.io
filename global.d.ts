/// <reference lib="dom" />

type State =
  | "UNSTARTED"
  | "PLAYING"
  | "PAUSED"
  | "BUFFERING"
  | "CUED"
  | "ENDED"
  | "UNKNOWN";
