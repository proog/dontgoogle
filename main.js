import Typed from "typed.js";
import { shuffle } from "./shuffle";

const queries = JSON.parse(
  atob(
    "W3sicSI6ImJsdWUgd2FmZmxlIiwidCI6ImltZyJ9LHsicSI6Im1lYXRzcGluIiwidCI6InR4dCJ9LHsicSI6ImdvYXRzZSIsInQiOiJpbWcifSx7InEiOiJzdHJpbmcgZW1pbCIsInQiOiJpbWcifSx7InEiOiJsZW1vbiBwYXJ0eSIsInQiOiJ0eHQifSx7InEiOiJteSBsYXp5IHN1bmRheXMiLCJ0IjoidHh0In0seyJxIjoiMSBtYW4gMSBqYXIiLCJ0IjoidHh0In0seyJxIjoiMiBnaXJscyAxIGN1cCIsInQiOiJ0eHQifSx7InEiOiJzd2FwLmF2aSIsInQiOiJ0eHQifSx7InEiOiJjYWxjdWx1cyBicmlkZ2UiLCJ0IjoiaW1nIn0seyJxIjoiZGVnbG92aW5nIiwidCI6ImltZyJ9LHsicSI6Imtyb2tvZGlsIHNpZGUgZWZmZWN0cyIsInQiOiJpbWcifSx7InEiOiJicm93biByZWNsdXNlIGJpdGUiLCJ0IjoiaW1nIn1d"
  )
);
shuffle(queries);

let current;
let currentIndex = 0;

function reset() {
  current = queries[currentIndex++ % queries.length];

  if (window.typed) window.typed.destroy();

  window.typed = new Typed("#typing", {
    strings: [current.q],
    typeSpeed: 60,
    startDelay: 800,
  });
}

function go() {
  let url = `https://www.google.com/search?q=${encodeURIComponent(current.q)}`;

  if (current.t === "img") url += "&tbm=isch";

  window.location = url;
}

window.addEventListener("load", () => {
  document.getElementById("google-search").addEventListener("click", go);
  document.getElementById("try-another").addEventListener("click", reset);
  reset();
});
