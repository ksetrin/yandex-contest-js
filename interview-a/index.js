var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.prompt(); // todo comment

let lines = [];
rl.on('line', function(line) {
  lines.push(line);
}).on('close',function(){
  const [jewels, stones] = lines
  let result = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones.charAt(i))) {
      ++result;
    }
  }
  process.stdout.write(result.toString());
});
