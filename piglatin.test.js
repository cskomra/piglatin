const englishToPiglatin = require('./piglatin');

describe('piglatin.js', () => {
   describe('INVALID test cases', () => {
    describe('1 - given: word is null', () =>{
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
    describe('2 - given: word begins with a lowercase consonant', () => {
      describe('when: I envoke englishToPiglatin', () => {
        it(`then: it moves first letter to back and appends 'ay'`, () => {
          const word = 'something';
          const result = englishToPiglatin(word);
          const expected = 'omethingsay';
          expect(result).toBe(expected);
        })
      })
    })

    describe('3 - given: word begins with a lowercase vowel', () => {
      describe('when: I envoke englishToPiglatin', () => {
        it(`then: it appends 'ay'`, () => {
          const word = 'orange';
          const result = englishToPiglatin(word);
          const expected = 'orangeay';
          expect(result).toBe(expected);
        })
      })
    })

    describe('4 - given: word begins with an uppercase consonant', () => {
      describe('when: I envoke englishToPiglatin', () => {
        it(`then: it moves first letter to back, capitalizes word, and appends 'ay'`, () => {
          const word = 'Something';
          const result = englishToPiglatin(word);
          const expected = 'Omethingsay';
          expect(result).toBe(expected);
        })
      })
    })

    describe(`5 - given: word begins with uppercase 'Ch'`, () => {
      describe('when: I envoke englishToPiglatin', () => {
        it(`then: it moves first two letters to back and appends 'ay'`, () => {
          const word = 'Chair';
          const result = englishToPiglatin(word);
          const expected = 'Airchay';
          expect(result).toBe(expected);
        })
      })
    })

    describe('6 - given: word begins with uppercase vowell', () => {
      describe('when: I envoke englishToPiglatin', () => {
        it(`then: it appends 'ay'`, () => {
          const word = 'Owl';
          const result = englishToPiglatin(word);
          const expected = 'Owlay';
          expect(result).toBe(expected);
        })
      })
    })

    describe('7 - given: word begins with uppercase Qu', () => {
      describe('when: I envoke englishToPiglatin', () => {
        it(`then: it moves 'qu' to back and appends 'ay'`, () => {
          const word = 'Queen';
          const result = englishToPiglatin(word);
          const expected = 'Eenquay';
          expect(result).toBe(expected);
        })
      })
    })

    describe('8 - given: word begins with lowercase Qu', () => {
      describe('when: I envoke englishToPiglatin', () => {
        it(`then: it moves 'qu' to back and appends 'ay'`, () => {
          const word = 'queen';
          const result = englishToPiglatin(word);
          const expected = 'eenquay';
          expect(result).toBe(expected);
        })
      })
    })

    describe(`9 - given: word begins with lowercase 'ch'`, () => {
      describe('when: I envoke englishToPiglatin', () => {
        it(`then: it moves 'ch' to back and appends 'ay'`, () => {
          const word = 'chair';
          const result = englishToPiglatin(word);
          const expected = 'airchay';
          expect(result).toBe(expected);
        })
      })
    })

    describe(`10 - given: word begins with lowercase 'th'`, () => {
      describe('when: I envoke englishToPiglatin', () => {
        it(`then: it moves 'th' to back and appends 'ay'`, () => {
          const word = 'this';
          const result = englishToPiglatin(word);
          const expected = 'isthay';
          expect(result).toBe(expected);
        })
      })
    })

    describe(`11 - given: word begins with uppercase 'Th'`, () => {
      describe('when: I envoke englishToPiglatin', () => {
        it(`then: it moves 'th' to back and appends 'ay'`, () => {
          const word = 'This';
          const result = englishToPiglatin(word);
          const expected = 'Isthay';
          expect(result).toBe(expected);
        })
      })
    })

    describe(`12 - given: word begins with lowercase 'sch'`, () => {
      describe('when: I envoke englishToPiglatin', () => {
        it(`then: it moves 'sch' to back and appends 'ay'`, () => {
          const word = 'schooner';
          const result = englishToPiglatin(word);
          const expected = 'oonerschay';
          expect(result).toBe(expected);
        })
      })
    })

    describe(`13 - given: word begins with uppercase 'Sch'`, () => {
      describe('when: I envoke englishToPiglatin', () => {
        it(`then: it moves 'sch' to back and appends 'ay'`, () => {
          const word = 'Schooner';
          const result = englishToPiglatin(word);
          const expected = 'Oonerschay';
          expect(result).toBe(expected);
        })
      })
    })

    describe(`14 - given: word begins with lowercase 'thr'`, () => {
      describe('when: I envoke englishToPiglatin', () => {
        it(`then: it moves 'thr' to back and appends 'ay'`, () => {
          const word = 'three';
          const result = englishToPiglatin(word);
          const expected = 'eethray';
          expect(result).toBe(expected);
        })
      })
    })

    describe(`15 - given: word begins with uppercase 'Thr'`, () => {
      describe('when: I envoke englishToPiglatin', () => {
        it(`then: it moves 'Thr' to back and appends 'ay'`, () => {
          const word = 'Three';
          const result = englishToPiglatin(word);
          const expected = 'Eethray';
          expect(result).toBe(expected);
        })
      })
    })

    describe(`15 - given: word begins with uppercase 'Psy'`, () => {
      describe('when: I envoke englishToPiglatin', () => {
        it(`then: it moves 'psy' to back and appends 'ay'`, () => {
          const word = 'Psychology';
          const result = englishToPiglatin(word);
          const expected = 'Ychologypsay';
          expect(result).toBe(expected);
        })
      })
    })

  }) //end valid test cases

})