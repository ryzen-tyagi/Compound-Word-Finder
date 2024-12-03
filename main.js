const fs = require("fs");
const readline = require("readline");

function isCompoundWord(word, wordSet) {
  const queue = [word];
  while (queue.length > 0) {
    const currentWord = queue.shift();

    for (let i = 1; i < currentWord.length; i++) {
      const prefix = currentWord.substring(0, i);
      const suffix = currentWord.substring(i);

      if (wordSet.has(prefix)) {
        if (wordSet.has(suffix)) return true;
        queue.push(suffix);
      }
    }
  }
  return false;
}

async function processInputFile() {
  const words = new Set();
  const inputFile = "Input_02.txt";

  const rl = readline.createInterface({
    input: fs.createReadStream(inputFile),
    output: process.stdout,
    terminal: false,
  });

  for await (const line of rl) {
    words.add(line.trim());
  }

  const sortedWords = [...words].sort((a, b) => b.length - a.length);

  let firstWord = "";
  let secondWord = "";

  const wordSet = new Set(sortedWords);

  for (const word of sortedWords) {
    if (isCompoundWord(word, wordSet)) {
      if (!firstWord) {
        firstWord = word;
      } else if (!secondWord) {
        secondWord = word;
        break;
      }
    }
  }

  console.log("Longest Compound Word:", firstWord);
  console.log("Second Longest Compound Word:", secondWord);
}

const start = performance.now();
processInputFile().then(() => {
  const end = performance.now();
  console.log(
    "Time taken:", 
    `\x1b[1m\x1b[34m${(end - start).toFixed(2)} milliseconds\x1b[0m`
  );
  });
