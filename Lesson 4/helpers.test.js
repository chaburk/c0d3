const helpers = require('./helpers')

describe('sumAll function', ()=> {
    it('should add numbers', () => {
        const result = helpers.sumAll([9,8,7])
        expect(result).toEqual(24)
    })
    it('should sum to the number in an array of one', () =>{
        const result = helpers.sumAll([10])
        expect(result).toEqual(10)
    })
    it('should add strings', ()=> {
        const result = helpers.sumAll(['hello', 'happy', 'world'])
        expect(result).toEqual('hellohappyworld')
    })
    it('should return 0 if empty array', () => {
        const result = helpers.sumAll([])
        expect(result).toEqual(0) // This is arbitrary.
        // You could have picked anything to address the empty array case.
      })
})

describe('findLargest number', () => {
    it('should find the largest number from array with all negatives', () => {
        const result = helpers.findLargest([-10,-1,-19])
        expect(result).toEqual(-1)
    })
    it('should find return an arry form an empty array', () => {
        const result = helpers.findLargest([])
        expect(result).toEqual(undefined)
    })
    it('should return the only number in an array', () => {
        const result = helpers.findLargest([2])
        expect(result).toEqual(2)
    })
})