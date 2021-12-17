const getStarterCharSet = require('./getStarterCharSet');

describe('getStarterCharSet.js', () => {
  describe('VALID test cases', () => {
    describe('1 - given: word begins with a non-special charSet that is a consonant', () =>{
      describe('when: getStarterCharSet is invoked', () => {
        it('then: it returns the first letter after the non-special charSet', () => {
          const word = 'Something';
          const result = getStarterCharSet(word);
          const expected = 's';
          expect(result).toEqual(expected);
        })
      })
    })

    describe('2 - given: word begins with a non-special charSet that is a vowell', () =>{
      describe('when: getStarterCharSet is invoked', () => {
        it('then: it returns an empty string', () => {
          const word = 'Owl';
          const result = getStarterCharSet(word);
          const expected = '';
          expect(result).toEqual(expected);
        })
      })
    }) 

    describe(`3 - given: word begins with a non-special charSet that is 'thr'`, () =>{
      describe('when: getStarterCharSet is invoked', () => {
        it(`then: it returns 'thr'`, () => {
          const word = 'three';
          const result = getStarterCharSet(word);
          const expected = 'thr';
          expect(result).toEqual(expected);
        })
      })
    })

    describe(`4 - given: word begins with a non-special charSet that is 'qu'`, () =>{
      describe('when: getStarterCharSet is invoked', () => {
        it(`then: it returns 'qu'`, () => {
          const word = 'Queen';
          const result = getStarterCharSet(word);
          const expected = 'qu';
          expect(result).toEqual(expected);
        })
      })
    })

    describe(`4 - given: word begins with a special charSet that is 'psy'`, () =>{
      describe('when: getStarterCharSet is invoked', () => {
        it(`then: it returns 'ps'`, () => {
          const word = 'Psychology';
          const result = getStarterCharSet(word);
          const expected = 'ps';
          expect(result).toEqual(expected);
        })
      })
    })

  })
})
