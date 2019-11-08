const fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.prompt(); // todo: comment

let str = '';
let prev = null;
rl.once('line', () => {
  rl.on('line', line => {
    if (line != prev) str += `${prev = line}\n`;
    if (str.length > 100) {
      fs.appendFileSync('output.txt', str);
      str = '';
    }
  }).on('close', () => fs.appendFileSync('output.txt', str));
});
