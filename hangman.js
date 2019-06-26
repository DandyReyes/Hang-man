const wordBank = [
  'javascript',
  'code',
  'talentpath',
  'puppy',
  'react',
  'computer',
];

function hangman() {
  // selects random index for word bank
  const randomChoice = Math.floor(Math.random() * wordBank.length);
  // contains length of the word
  const wordLength = wordBank[randomChoice].length;

  const word = [];
  for (i = 0; i < wordLength; i++) {
    word.push('_');
    console.log(word);
  }
}

hangman();
