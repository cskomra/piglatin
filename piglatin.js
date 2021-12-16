const englishToPiglatin = (word) => {

  if(word === null){
    return '';
  }
  const vowellsArray = ['a', 'e', 'i', 'o', 'u'];
  const firstLetter = word.substring(0,1);
  const firstLetterIsVowell = vowellsArray.includes(firstLetter);
  const isVowell = (letter) => {
    vowellsArray.includes(letter);
  }
  const numConsonantsBeginsWith = (word) => {
    var numConsonants = 0;
    for(let i = 0; i <= word.length; i++){
      var nextConsonant = word.charAt(i)
      if(!isVowell(nextConsonant)){
        return numConsonants;
      }
      numConsonants++;
    }
  }
  
  const secondLetter = word.substring(1,2);
 

  if(firstLetterIsVowell){
    return `${word}ay`;
  }

  const firstTwoLettersAreConsonants = firstLetterIsVowell && !vowellsArray.includes(secondLetter);
  if(firstTwoLettersAreConsonants){
    const remainingWord = word.substring(2);
    return `${remainingWord}${firstLetter}${secondLetter}ay}`;
  }

  const firstLetterIsUppercase = firstLetter === firstLetter.toUpperCase();
  if(firstLetterIsUppercase){
    const remainingWord = word.substring(1);  
    const firstLtrOfRemainingWord = remainingWord.substring(0,1);
    const upperCaseFirstLetterOfRemainingWord = firstLtrOfRemainingWord.toUpperCase();
    const remainingWordNoFirstLetter = remainingWord.substring(1); 
    const lowerCaseFirstLetter = firstLetter.toLowerCase();
    return `${upperCaseFirstLetterOfRemainingWord}${remainingWordNoFirstLetter}${lowerCaseFirstLetter}ay`;
  }
  
  const remainingWord = word.substring(1);  
  return `${remainingWord}${firstLetter}ay`;
}

module.exports = englishToPiglatin;