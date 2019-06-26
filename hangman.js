const readlineSync = require('readline-sync');

const wordBank = [
  'javascript',
  'code',
  'talentpath',
  'puppy',
  'react',
  'computer',
];

// Input the starting lines for the game
function startingLines(guessedWord, wordLength) {
  for (let i = 0; i < wordLength; i++) {
    guessedWord.push('_');
  }
}

function winOrLost(
  failures,
  letterCount,
  wordLength,
  revealedWord,
  guessedWord
) {
  while (guessedWord.join() !== revealedWord.join() && failures < 5) {
    const userLetter = readlineSync.question('Guess a letter: ');

    for (let i = 0; i < wordLength; i++) {
      if (userLetter === revealedWord[i]) {
        guessedWord[i] = userLetter;
        ++letterCount;
      }
    }

    if (letterCount === 0) {
      ++failures;
      console.log(`You have ${failures} strike(s)`);
    }

    letterCount = 0;
    console.log(guessedWord.join(' '));
  }

  if (guessedWord.join() === revealedWord.join()) {
    console.log('You Won!!! :)');
  } else {
    console.log('You Lost :(');
  }
}

function game(wordLength, revealedWord) {
  const guessedWord = [];
  const failures = 0;
  const letterCount = 0;

  startingLines(guessedWord, wordLength);

  console.log(guessedWord.join(' '));

  winOrLost(
    failures,
    letterCount,
    wordLength,
    revealedWord,
    guessedWord,
    letterCount
  );
}

function hangman() {
  // selects random index for word bank
  const randomChoice = Math.floor(Math.random() * wordBank.length);
  // contains length of the word
  const wordLength = wordBank[randomChoice].length;
  const revealedWord = wordBank[randomChoice].split('');
  game(wordLength, revealedWord);
}

hangman();
