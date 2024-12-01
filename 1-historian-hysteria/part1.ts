import { readFileSync } from 'node:fs';
const input = readFileSync('input.txt').toString();
const inputLines = input.split('\n');

const numbersLeft: number[] = [];
const numbersRight: number[] = [];

for (const line of inputLines) {
    const [left, right] = line.split('   ');

    numbersLeft.push(+left);
    numbersRight.push(+right);
}

const numbersLeftSorted = numbersLeft.sort();
const numbersRightSorted = numbersRight.sort();

const distances: number[] = [];

numbersLeftSorted.forEach((num, index) => {
    distances.push(Math.abs(num - numbersRightSorted[index]));
});

console.log(distances.reduce(
    (acc, curr) => acc + curr, 0
));