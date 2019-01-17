import Typed from 'typed.js';

const queries = JSON.parse(atob(
  'W3sicSI6ImJsdWUgd2FmZmxlIiwidCI6ImltZyJ9LHsicSI6Im1lYXRzcGluIiwidCI6InR4dCJ9LHsicSI6ImdvYXRzZSIsInQiOiJpbWcifSx7InEiOiJzdHJpbmcgZW1pbCIsInQiOiJpbWcifSx7InEiOiJsZW1vbiBwYXJ0eSIsInQiOiJ0eHQifSx7InEiOiJteSBsYXp5IHN1bmRheXMiLCJ0IjoidHh0In0seyJxIjoiMSBtYW4gMSBqYXIiLCJ0IjoidHh0In0seyJxIjoiMiBnaXJscyAxIGN1cCIsInQiOiJ0eHQifSx7InEiOiJzd2FwLmF2aSIsInQiOiJ0eHQifV0='
));

let current;

function reset() {
  let next;
  do {
    next = queries[Math.floor(Math.random() * Math.floor(queries.length))];
  } while (next === current);
  current = next;

  if (window.typed)
    window.typed.destroy();

  window.typed = new Typed('#typing', {
    strings: [current.q],
    typeSpeed: 60,
    startDelay: 800
  });
}

function go() {
  let url = `https://www.google.com/search?q=${encodeURIComponent(current.q)}`;

  if (current.t === 'img')
    url += '&tbm=isch';

  window.location = url;
}

window.addEventListener('load', () => {
  document.getElementById('google-search').addEventListener('click', go);
  document.getElementById('try-another').addEventListener('click', reset);
  reset();
})
