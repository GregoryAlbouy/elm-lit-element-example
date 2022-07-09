import { defineCustomElements } from "./custom-elements";
import { Elm } from "./elm/src/Main.elm";

function initElm() {
  const root = document.createElement("div");
  root.id = "elm-app";
  document.body.appendChild(root);

  Elm.Main.init({
    node: root,
  });
}

(function main() {
  defineCustomElements();
  initElm();
})();
