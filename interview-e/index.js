var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

// rl.prompt(); // todo: comment

let lines = [];
rl.on('line', function(line) {
  lines.push(line);
}).on('close',function(){
  let first = lines[0].split('').sort().join('');
  let second = lines[1].split('').sort().join('');
  process.stdout.write(first === second ? '1' : '0');
});
