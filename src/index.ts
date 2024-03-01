const names: Array<string> = ["Rahim", "Karim"];
console.log(names);

const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(sum(4, 8));

const obj = {
  one: {
    two: {
      three: "hello",
    },
  },
};

function speak(noise: any): void {
  console.log(noise?.one?.two?.three);
  console.log(noise && noise.one && noise.one.two && noise.one.two.three);
}

speak(obj);
