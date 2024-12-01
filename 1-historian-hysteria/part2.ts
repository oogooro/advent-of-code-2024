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

const appearancesRight = new Map<number, number>();

for (const number of numbersRight) {
    const appearedTimes = appearancesRight.get(number) ?? 0;
    appearancesRight.set(number, appearedTimes + 1);
}

let score = 0;

for (const number of numbersLeft) {
    score += number * (appearancesRight.get(number) ?? 0);
}

console.log(score);