const fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

let lines = [];
rl.on('line', function (line) {
    lines = [...lines, ...line.split(' ').map(Number).slice(1)]
}).on('close', function () {
    console.time('kse');

    let length = lines.length;
    while (length > 0) {
        let min = Math.min(...lines);
        const index = lines.indexOf(min);
        fs.appendFileSync('output.txt', min+' ');
        lines.splice(index, 1);
        length--
    }

    console.timeLog('kse')
    console.timeEnd('kse')
});