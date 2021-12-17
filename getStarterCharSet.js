getStarterCharSet = (word) => {
  /*TODO: 
        - refactor: create getSpecialCharSets(){returns specialCharSets[]}
        - check if for/in more efficient
  */
  const firstLetter = word.substring(0,1);
  const vowels = 'aeiou';
  const firstLetterIsVowell = vowels.includes(firstLetter.toLowerCase()) ? true : false;
  if(firstLetterIsVowell) return '';
  
  const specialCharSets = ['qu', 'ch', 'thr', 'th', 'sch', 'psy']; 
  const lowerCaseWord = word.toLowerCase();
  const lowerCaseWordStartsWithCharset = function(charSet){
    const startsWithCharset = lowerCaseWord.startsWith(charSet);
    return startsWithCharset;
  }
  
  for(let i = 0; i <= specialCharSets.length; i++){
    let charSet = specialCharSets[i];
    if(lowerCaseWordStartsWithCharset(charSet)){
      return charSet.endsWith('y') ? charSet.substring(0, charSet.length-1) : charSet;
    }
  }
  return lowerCaseWord.substring(0,1);
}

module.exports = getStarterCharSet;