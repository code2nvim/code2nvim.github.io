// @ts-check

import { component, html } from "@arrow-js/core";

export const Main = component(() => {
  return html`
    <main
      class="flex flex-1 flex-col items-center justify-center gap-8 text-4xl"
    >
      <h1>Projects:</h1>
      <div>
        MuxedDrop:
        <a
          href="https://github.com/code2nvim/muxedrop"
          target="_blank"
          rel="noopener noreferrer"
          class="underline hover:opacity-80"
        >
          github.com/code2nvim/muxedrop
        </a>
      </div>
      <div>
        InputTile:
        <a
          href="https://github.com/code2nvim/inputile"
          target="_blank"
          rel="noopener noreferrer"
          class="underline hover:opacity-80"
        >
          github.com/code2nvim/inputile
        </a>
      </div>
    </main>
  `;
});
