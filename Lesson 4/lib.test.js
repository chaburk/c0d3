const lib = require('./lib.js')

describe('tokenize function', () => {
    it('should return an object with the string split in two', ()=> {
        const result = lib.tokenize('hello world 2000')
        expect(result).toEqual({ HELLO: 1, WORLD: 1 })
    })
    it('should skip over any number in the string', () => {
        const result = lib.tokenize('I like (Korean)')
        expect(result).toEqual({ LIKE: 1, '(KOREAN)': 1 })
    })
    it('should return an empty object', () => {
        const result = lib.tokenize('')
        expect(result).toEqual({})
    })
})

describe('makeTrainingData fucntion' ,() => {
    it('should return an empty array if the object is empty', () => {
        const result = lib.makeTrainingData({})
        expect(result).toEqual([])
    })
    it('should return an array of seperated object into input and output', () => {
        result = lib.makeTrainingData({'beef boneless 100': 'MEAT'})
        expect(result).toEqual(  [{
            input: {
              BEEF: 1,
              BONELESS: 1
            },
            output: {
              MEAT: 1
            }
        }])
    })
    it('should not include numbers in the array object' , () => {
        const result = lib.makeTrainingData({
            'beef boneless 100': 'MEAT',
            'pink apples': 'VEGGIE'
          })
        expect(result).toEqual([{
            input: {
              BEEF: 1,
              BONELESS: 1
            },
            output: {
              MEAT: 1
            }
          }, {
            input: {
              PINK: 1,
              APPLES: 1
            },
            output: {
              VEGGIE: 1
            }
            }])
    })
})

describe('pushAll function' ,() => {
    it('should return an empty object' , () => {
        let data = {}
        lib.pushAll(data, [9,8,7])
        expect(data).toEqual({})
    })
    it('should add array to empty array', () => {
        data = { blah: [] }
        lib.pushAll(data, [9, 8, 7])
        expect(data).toEqual(   {
            blah: [ [9, 8, 7] ]
          })
    })
    it('should add array to multiple keys', () => {
        data = {
            blah: [['hello']],
            key2: []
          }
        lib.pushAll(data, [9, 8, 7])
        expect(data).toEqual(  {
            blah: [ ['hello'], [9, 8, 7] ],
            key2: [[9, 8, 7]]
          })
    })
})

describe('getMostLikely', () => {
    it('should return null if {}', () => {
      const result = lib.getMostLikely({})
      expect(result).toEqual(null)
    })
    it('should return first key', () => {
      const result = lib.getMostLikely({
        meat: 0.987,
        veggie: 0.187,
        store: 0.287
      })
      expect(result).toEqual('meat')
    })
    it('should return last key', () => {
      const result = lib.getMostLikely({
        meat: 0.287,
        veggie: 0.187,
        store: 0.987
      })
      expect(result).toEqual('store')
    })
  })
  
  