// @ts-check

import { component, html, reactive } from "@arrow-js/core";

const counter = reactive({
  count: 0,
});

export const Counter = component(() => {
  return html`
    <div class="flex flex-row items-center justify-center gap-4 text-xl">
      <button
        class="size-10 rounded-full bg-slate-800 text-white transition-transform duration-500 hover:rotate-360"
        @click="${() => counter.count--}"
      >
        −
      </button>
      <span>Count: ${() => counter.count}</span>
      <button
        class="size-10 rounded-full bg-slate-800 text-white transition-transform duration-500 hover:rotate-360"
        @click="${() => counter.count++}"
      >
        +
      </button>
    </div>
  `;
});
