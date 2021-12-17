const englishToPiglatin = require('./piglatin');

describe('piglatin.js', () => {
  describe('INVALID test cases', () => {
    describe('DONE-given: word is null', () =>{
      describe('when: englishToPiglatin is invoked', () => {
        it('then: it returns an empty string', () => {
          const word = null;
          const result = englishToPiglatin(word);
          const expected = '';
          expect(result).toEqual(expected);
        })
      })
    })
  })

  describe('VALID test cases', () => {
    describe('DONE-given: word begins with a lowercase consonant', () => {
      describe('when: I envoke englishToPiglatin', () => {
        it(`then: it moves first letter to back and appends 'ay'`, () => {
          const word = 'something';
          const result = englishToPiglatin(word);
          const expected = 'omethingsay';
          expect(result).toBe(expected);
        })
      })
    })

    describe('DONE-given: word begins with a lowercase vowel', () => {
      describe('when: I envoke englishToPiglatin', () => {
        it(`then: it appends 'ay'`, () => {
          const word = 'orange';
          const result = englishToPiglatin(word);
          const expected = 'orangeay';
          expect(result).toBe(expected);
        })
      })
    })

    describe('DONE-given: word begins with an uppercase consonant', () => {
      describe('when: I envoke englishToPiglatin', () => {
        it(`then: it moves first letter to back, capitalizes word, and appends 'ay'`, () => {
          const word = 'Something';
          const result = englishToPiglatin(word);
          const expected = 'Omethingsay';
          expect(result).toBe(expected);
        })
      })
    })

    describe('given: word begins with lowercase ch', () => {
      describe('when: I envoke englishToPiglatin', () => {
        it(`then: it moves first two letters to back and appends 'ay'`, () => {
          const word = 'cheddar';
          const result = englishToPiglatin(word);
          const expected = 'eddarchay';
          expect(result).toBe(expected);
        })
      })
    })

    describe('given: word begins with uppercase vowell', () => {
      describe('when: I envoke englishToPiglatin', () => {
        it(`then: it appends 'ay'`, () => {
          const word = 'Owl';
          const result = englishToPiglatin(word);
          const expected = 'Owlay';
          expect(result).toBe(expected);
        })
      })
    })

  }) //end valid test cases

})