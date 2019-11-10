const fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

let lines = [];
rl.on('line', function (line) {
    lines.push(line.split(' ').map(Number));
}).on('close', function () {
    console.time('kse');

    let merged = [];
    for (let i = 1; i < lines.length; i++) {
        merged = merged.concat(lines[i].slice(1));
    }
    let length = merged.length;
    while (length > 0) {
        let min = Math.min(...merged);
        const index = merged.findIndex((el) => el === min);
        fs.appendFileSync('output.txt', min+' ');
        merged.splice(index, 1);
        length--
    }

    console.timeLog('kse')
    console.timeEnd('kse')
});