const fs = require("fs");
const readline = require("readline");

function isCompoundWord(word, wordSet) {
  for (let i = 1; i < word.length; i++) {
    const prefix = word.substr(0, i);
    const suffix = word.substr(i);

    if (
      wordSet.has(prefix) &&
      (wordSet.has(suffix) || isCompoundWord(suffix, wordSet))
    ) {
      return true;
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
      if (word.length > firstWord.length) {
        secondWord = firstWord;
        firstWord = word;
      } else if (word.length > secondWord.length) {
        secondWord = word;
      }
    }
  }

  console.log("Longest Compound Word:", firstWord);
  console.log("Second Longest Compound Word:", secondWord);
}

const start = Date.now();
processInputFile().then(() => {
  const end = Date.now();
  console.log("Time taken:", (end - start).toFixed(2), "milliseconds");
});
