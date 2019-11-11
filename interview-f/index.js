const fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

let count = Array(101).fill(0);
rl.on('line', function (line) {
  if (line.length === 1) return;
  const localLine = line.split(' ').map(Number);
  for (let i = 1; i <= localLine[0]; i++) {
    count[localLine[i]] += 1;
  }
}).on('close', function () {
  let srt = '';
  for (let i = 0; i <= 100; i++) {
    while (count[i] > 0) {
      srt += i+' ';
      if (srt.length > 100) {
        fs.appendFileSync('output.txt', srt);
        srt = '';
      }
      count[i]--;
    }
  }
  fs.appendFileSync('output.txt', srt)
});