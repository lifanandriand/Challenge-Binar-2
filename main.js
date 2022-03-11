const prompt = require('prompt-sync')();
const Students = require("./function");

const scores = [];
let isRunning = true;
while (isRunning) {
    let score = prompt(`Masukkan nilai ujian matematika : `)
    if (parseInt(score)) {
        scores.push(parseInt(score))
    } else if (score.toLowerCase() === 'q') {
        isRunning = false;
    } else {
       console.log('Invalid Value');
    }
}

let student = new Students(scores);
console.log(student)
console.log(`Nilai terendah : ${student.minScore()}`);
console.log(`Nilai terbersar : ${student.maxScore()}`);
console.log(`Nilai rata - rata : ${student.avgScore()}`);
console.log(`Urutan nilai dari terendah ke tertinggi : ${student.scores}`)
console.log(student.scoreChecker());