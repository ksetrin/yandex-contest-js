const fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

//rl.prompt(); // todo: comment

let lines = [];
rl.on('line', function(line) {
  lines.push(line.split(' ').map(Number));
}).on('close',function(){
  let merged = [];
  for (let i = 1; i < lines.length; i++) {
    merged = merged.concat(lines[i].slice(1));
  }
  let sorted = merged.sort((a, b) => a - b);
  fs.appendFileSync('output.txt', sorted.join(' '));
});