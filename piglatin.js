const getStarterCharSet = require('./getStarterCharSet');

const englishToPiglatin = (word) => {

  if(word === null) return '';

  const getRemainingWord = function(word, starterCharSet){
    const firstLetter = word.substring(0,1);
    const wordIsCapitalized = (firstLetter == firstLetter.toUpperCase()) ? true : false;
    const wordOffset = starterCharSet.length;
    let remainingWord = word.substring(wordOffset);
    if(wordIsCapitalized){
      const allButFirstLetter = remainingWord.substring(1);
      const upperCaseFirstLetter = remainingWord.substring(0,1).toUpperCase();
      return upperCaseFirstLetter.concat(allButFirstLetter);
    }
    return remainingWord;
  }

  const starterCharSet = getStarterCharSet(word);
  const remainingWord = getRemainingWord(word, starterCharSet);
  const ending = 'ay';
  return remainingWord.concat(starterCharSet).concat(ending);

}

module.exports = englishToPiglatin;