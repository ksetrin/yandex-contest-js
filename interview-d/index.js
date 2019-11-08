const fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.prompt(); // todo: comment

let num = null;
rl.on('line', function(line) {
  num = line;
}).on('close',function(){
  function recursion(n, cntOpen, cntClose, res) {
    if (cntOpen + cntClose === 2 * n) {
      fs.appendFileSync('output.txt', res+'\n');
      return;
    }
    if (cntOpen < n) {
      recursion(n, cntOpen + 1, cntClose, res + '(')
    }
    if (cntOpen > cntClose) {
      recursion(n, cntOpen, cntClose + 1, res + ')')
    }
  }
  recursion(num, 0, 0, '');
});