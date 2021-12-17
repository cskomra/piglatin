const englishToPiglatin = (word) => {

  if(word === null) return '';
  
  const firstLetter = word.substring(0,1);
  const secondLetter = word.substring(1,2);
  
  const letterIsVowel = function(letter){
    const vowels = 'aeiou';
    if(vowels.includes(letter.toLowerCase())){
      return true;
    } 
    return false;
  }

  const letterIsUpperCase = function(letter){
    if(letter == letter.toUpperCase()){
      return true;
    }
    return false;
  }

  const toProperCase = function(word){
    return word.toLowerCase().replace(/^(.)|\s(.)/g, 
      function($1) { return $1.toUpperCase(); });
  }

  const firstLetterIsUppercase = letterIsUpperCase(firstLetter);
  const firstLetterIsVowell = letterIsVowel(firstLetter);
  
  if(firstLetterIsVowell){
    if(firstLetterIsUppercase){
      return `${toProperCase(word)}ay`;
    }
    return `${word}ay`;
  } 
  
  //firstLetterIsConsonant...

  if(firstLetterIsUppercase){
    const remainingWord = word.substring(1);  
    const firstLtrOfRemainingWord = remainingWord.substring(0,1);
    const upperCaseFirstLetterOfRemainingWord = firstLtrOfRemainingWord.toUpperCase();
    const remainingWordNoFirstLetter = remainingWord.substring(1); 
    const lowerCaseFirstLetter = firstLetter.toLowerCase();
    return `${upperCaseFirstLetterOfRemainingWord}${remainingWordNoFirstLetter}${lowerCaseFirstLetter}ay`;
  }

  const firstTwoLettersAreConsonants = !(letterIsVowel(firstLetter)) && !(letterIsVowel(secondLetter));
  if(firstTwoLettersAreConsonants){
    const remainingWord = word.substring(2);
    return `${remainingWord}${firstLetter}${secondLetter}ay`;
  }

  const remainingWord = word.substring(1);  
  return `${remainingWord}${firstLetter}ay`;
}

module.exports = englishToPiglatin;
//console.log(englishToPiglatin('Owl'));