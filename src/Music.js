// @ts-check

import { component, html, reactive } from "@arrow-js/core";
import { Counter } from "./Counter.js";

const player = reactive({
  show: false,
  src: "https://www.youtube.com/embed/cpSvvfHxILI",
  state: /** @satisfies {State} */ ("UNKNOWN"),
});

addEventListener("message", function (event) {
  if (event.data && event.data.type === "YT_PLAYER_STATE") {
    player.state = event.data.state;
  }
});

export const Music = component(() => {
  const data = {
    src: () => `${player.src}?enablejsapi=1`,
    class: () =>
      player.show ? "flex w-full flex-col items-center gap-4 p-8" : "hidden",
  };

  return html`
    <div class="flex w-full flex-col items-center gap-4 p-4">
      <button
        class="rounded-full border-none bg-slate-300 p-4 text-black"
        @click="${() => (player.show = !player.show)}"
      >
        ${() => (player.show ? "Music 🎶 and ... A counter 😅" : "Music?")}
      </button>
      <div class="${data.class}">
        ${Counter()}
        <iframe
          id="player"
          src="${data.src}"
          class="aspect-video w-1/2"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  `;
});
