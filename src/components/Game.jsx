import GameBoard from "./GameBoard";

const Game = () => {
  const simpleNumber = (number) => {
    let n = number;
    const array = [];

    nextPrime: for (let i = 2; i <= n; i++) {
      for (let j = 2; j < i; j++) {
        if (i % j === 0) continue nextPrime;
      }
      array.push(i);
    }
    return array.flatMap((i) => [i, i]).sort(() => Math.random() - 0.5);
  };
  const numbers = simpleNumber(58);

  const retranslateNumbers = (numbers) => {
    const array = [];
    for (let i = 0; i < numbers.length; i++) {
      const obj = {
        open: false,
        done: false,
        id: numbers[i],
        content: numbers[i],
      };
      array.push({ ...obj });
    }
    return array;
  };
  return (
    <div>
      <GameBoard content={retranslateNumbers(numbers)} />
    </div>
  );
};

export default Game;
