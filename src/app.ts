import "./custom-elements";
import { Elm } from "./elm/src/Main.elm";

function initElm() {
  const root = document.createElement("div");
  document.body.appendChild(root);

  Elm.Main.init({
    node: root,
  });
}

(function main() {
  initElm();
})();
