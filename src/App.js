// @ts-check

import { component, html } from "@arrow-js/core";
import { Main } from "./Main.js";
import { Music } from "./Music.js";

export const App = component(() => {
  return html`
    <div
      class="absolute inset-0 flex flex-col items-center justify-between bg-black font-[Comic_Sans_MS] text-white"
    >
      ${Main()} ${[Music()]}
    </div>
  `;
});
