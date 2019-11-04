var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.prompt(); // todo: comment

let lines = [];
rl.on('line', function(line) {
  lines.push(line);
}).on('close',function(){
  let max = 0;
  let results = [];
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] == 1) {
      max++
    } else {
      results.push(max);
      max = 0;
    }
  }
  results.push(max);
  process.stdout.write(Math.max(...results).toString());
});
