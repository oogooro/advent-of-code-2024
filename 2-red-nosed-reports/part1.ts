import { readFileSync } from 'node:fs';
const input = readFileSync('input.txt').toString();

const reports = input.split('\n').map((v)=>v.split(' ').map(Number));

let safeRoutes = 0;

for (const report of reports) {
    const direction = report[1] - report[0];
    if (direction === 0) continue;

    let notSafe = false
    // i hate this
    report.forEach((level, index) => {
        if (index == report.length) return notSafe = true; // last level

        if (level == report[index + 1]) return notSafe = true; // unsafe
        else if (Math.abs(level - report[index + 1]) > 3) return notSafe = true; // too much
        if (direction > 0 && level > report[index + 1]) return notSafe = true; // increasing
        else if (direction < 0 && level < report[index + 1]) return notSafe = true; // decreasing
    });

    if (notSafe) continue;

    safeRoutes ++;
}

console.log(safeRoutes)