const rollDice = (diceType) =>
  Math.floor(Math.random() * Number(diceType.slice(1))) + 1;

dice = 20; // set number of dice edges there
const edges = [];

while (edges.length < dice) {
  const attempt = rollDice(`d${dice}`);
  if (!edges.includes(attempt)) {
    edges.push(attempt);
  }
}

console.log(
  edges.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  })
);
