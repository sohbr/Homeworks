

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits() {
  let first, second;

  reader.question('Would you like some tea?', function (res) {
    console.log(`You answered ${res}`);
    reader.question('Would you like some biscuits?', function (res2) {
      console.log(`You answered ${res2}`);
      let firstAns = (res === 'yes') ? 'do' : 'don\'t';
      let secondAns = (res2 === 'yes') ? 'do' : 'don\'t';

      console.log(`So you ${firstAns} want tea and you ${secondAns} want coffee.`);
      reader.close();
    });
  });
}
