import { html } from "@arrow-js/core";
import { App } from "./src/App.js";

const root = document.getElementById("app");

if (!root) {
  throw new Error("Missing #app root");
}

html`${App()}`(root);
