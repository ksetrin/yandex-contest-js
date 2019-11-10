const fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

let lines = [];
rl.on('line', function(line) {
  lines.push(line.split(' ').map(Number));
}).on('close',function(){
  let merged = [];
  for (let i = 1; i < lines.length; i++) {
    merged = merged.concat(lines[i].slice(1));
  }
  delete(lines);
  const gnomeSort = arr => {
    const l = arr.length;
    let i = 1;
    while (i < l) {
      if (i > 0 && arr[i - 1] > arr[i]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        i--;
      } else {
        i++;
      }
    }
  };

  gnomeSort(merged);
  fs.appendFileSync('output.txt', merged.join(' '));
});