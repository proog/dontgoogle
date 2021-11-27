export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = randomNonNegativeInt(i + 1);
    swap(array, i, j);
  }
}

function randomNonNegativeInt(exclusiveMax) {
  return Math.floor(Math.random() * Math.floor(exclusiveMax));
}

function swap(array, indexA, indexB) {
  const a = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = a;
}
