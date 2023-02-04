const fn = require("./non-primitive.js")
const fn2 = require("./basicarrayfunctions.js")

//Non-Primitive testing
// describe('selectiveZero function', () => {
//     it('Should return an empty array', () => {
//         const arr = []
//         const result = fn.selectiveZero(arr, 3)
//         expect(result).toEqual(arr)
//     })
//     it('Should return an unchanged array', () => {
//         const arr = [8, 9, 1, "I'm a string"]
//         const original = [...arr]
//         fn.selectiveZero(arr, 6)
//         expect(arr).toEqual(original)
//     })
//     it('Should return an array with zeros replacing input number', () => {
//         const arr = [5, 2, 2, 9]
//         fn.selectiveZero(arr, 2)
//         expect(arr).toEqual([5, 0, 0, 9])
//     })
// })

// describe('largest function', () => {
//     it('should return the largest number in an array', () => {
//         const arr = [1,2,3,10]
//         const result = fn.largest(arr)
//         expect(result).toEqual(10)
//     })
//     it('should return undefined', () => {
//         const arr = []
//         const result = fn.largest(arr)
//         expect(result).toEqual(undefined)
//     })
//     it('should return the only item in the array', () => {
//         const arr = [999]
//         const result = fn.largest(arr)
//         expect(result).toEqual(999)
//     })
//     it('should find the largest of 4 negative numbers', () => {
//         const result = fn.largest([-20, -2, -5, -10])
//         expect(result).toEqual(-2)
//       })
// })

// describe('firstXToZero function', () => {
//     it('should change 3 numbers to 0', () => {
//       const result = fn.firstXToZero([0, 5, 9, 6], 3)
//       expect(result).toEqual([0, 0, 0, 6])
//     })
//     it('should not modify the array when changing 0 elements', () => {
//       const result = fn.firstXToZero(["Don't", 'change', 'me'], 0)
//       expect(result).toEqual(["Don't", 'change', 'me'])
//     })
//     it('should change all to zero when X beyond array length', () => {
//       const result = fn.firstXToZero([1, 2, 3], 4)
//       expect(result).toEqual([0, 0, 0])
//     })
//   })

// describe('allPrime function', () => {
//     it('should return true for an array of all primes', () => {
//         const result = fn.allPrime([19,13,17,11])
//         expect(result).toEqual(true)
//     })
//     it('should return true for an empty array', () => {
//         const result = fn.allPrime([])
//         expect(result).toEqual(true)
//     })
//     it('should return false for an array with some primes', () => {
//         const result = fn.allPrime([0,7,11,12])
//         expect(result).toEqual(false)
//     })
// })

// describe('increaing funciton', () => {
//     it('should return true if an array in ascending order', () => {
//         const result = fn.increasing([2,7,9,10])
//         expect(result).toEqual(true)
//     })
//     it('shoudl return true if an empty array', () => {
//         const result = fn.increasing([])
//         expect(result).toEqual(true)
//     })
//     it('should return false if not ascending', () =>{
//         const result = fn.increasing([19, 13, 17, 11])
//         expect(result).toEqual(false)
//     })
// })

//Basic Array Function Testing
describe('copyArray function', () => {
    it('should copy an array of 3 elements', () => {
      const result = fn2.copyArray([-5, -23, 'study'])
      expect(result).toEqual([-5, -23, 'study'])
    })
    it('should not modify original array', () => {
      const original = [
        'hi',
        1,
        () => {
          return 5
        },
        'apple',
        45
      ]
      const result = fn2.copyArray(original)
      original[0] = 'Drax'
      expect(result[0]).toEqual('hi')
    })
    it('should copy an empty array', () => {
      const result = fn2.copyArray([])
      expect(result).toEqual([])
    })
  })

describe('remove function', () => {
    it('should not remove anything', () => {
      const data = ['Rocket', 'Groot', 'Star-Lord']
      const result = fn2.removeElement(data, 'Random')
      expect(result).toEqual(['Rocket', 'Groot', 'Star-Lord'])
    })
    it('should remove 1 element', () => {
      const data = ['Rocket', 'Groot', 'Star-Lord']
      const result = fn2.removeElement(data, 'Star-Lord')
      expect(result).toEqual(['Rocket', 'Groot'])
    })
    it('should remove all elements', () => {
      const data = ['Rocket', 'Rocket', 'Rocket']
      const result = fn2.removeElement(data, 'Rocket')
      expect(result).toEqual([])
    })
  })

describe('copyWithout function', () => {
    it('should copy without 2 middle elements', () => {
      const result = fn2.copyWithout([5, 2, 2, 9], 2)
      expect(result).toEqual([5, 9])
    })
    it('should not modify original array', () => {
      const arr = [5, 2, 2, 9]
      fn2.copyWithout(arr, 2)
      expect(arr).toEqual([5, 2, 2, 9])
    })
    it('should copy without last 2 elements', () => {
      const result = fn2.copyWithout([2, 2, 2, 3, 3], 3)
      expect(result).toEqual([2, 2, 2])
    })
    it('should return identical array if no matches', () => {
      const result = fn2.copyWithout([2, 6, 4], 3)
      expect(result).toEqual([2, 6, 4])
    })
  })

describe('copyReverse function', () => {
    it('should reverse copy an array of 4 elements', () => {
      const result = fn2.copyReverse([1, 3, 5, 7])
      expect(result).toEqual([7, 5, 3, 1])
    })
    it('should not modify original array', () => {
      const arr = [1, 3, 5, 7]
      fn2.copyReverse(arr)
      expect(arr).toEqual([1, 3, 5, 7])
    })
    it('should reverse copy an array of 1 element', () => {
      const result = fn2.copyReverse(['bears'])
      expect(result).toEqual(['bears'])
    })
  })

describe('copyLast function', () => {
    const heroes = ['Ironman', 'Thor', 'Captain', 'Black Widow', 'Hulk']
    const original = [...heroes]
    it('should skip the first 2 elements', () => {
      const result = fn2.copyLast(heroes, 2)
      expect(result).toEqual(['Captain', 'Black Widow', 'Hulk'])
    })
    it('should not modify original array', () => {
      fn2.copyLast(heroes, 2)
      expect(heroes).toEqual(original)
    })
    it('should skip the first 0 elements (copy whole array)', () => {
      const result = fn2.copyLast(heroes, 0)
      expect(result).toEqual(heroes)
    })
    it('should return empty array if skipping past array length', () => {
      const result = fn2.copyLast(heroes, 6)
      expect(result).toEqual([])
    })
  })

describe('copyFirst function', () => {
    const heroes = ['Ironman', 'Thor', 'Captain', 'Black Widow', 'Hulk']
    const original = [...heroes]
    it('should skip the last 2 elements', () => {
      const result = fn2.copyFirst(heroes, 2)
      expect(result).toEqual(['Ironman', 'Thor', 'Captain'])
    })
    it('should not modify original array', () => {
      fn2.copyFirst(heroes, 2)
      expect(heroes).toEqual(original)
    })
    it('should skip the last 0 elements (copy whole array)', () => {
      const result = fn2.copyFirst(heroes, 0)
      expect(result).toEqual(heroes)
    })
    it('should return empty array if skipping past array length', () => {
      const result = fn2.copyFirst(heroes, 6)
      expect(result).toEqual([])
    })
  })

describe('runOnEach function', () => {
    const heroes = ['Ironman', 'Thor', 'Captain']
    const thanos = () => {
      return 'Thanos'
    }
    it('should call a function with two arguments', () => {
      const result = fn2.runOnEach([1, 2, 3, 4, 5], (e, i) => {
        return e + i
      })
      expect(result).toEqual([1, 3, 5, 7, 9])
    })
    it('should not modify original array', () => {
      const original = [...heroes]
      fn2.runOnEach(heroes, thanos)
      expect(heroes).toEqual(original)
    })
    it('should call a function with no arguments', () => {
      const result = fn2.runOnEach(heroes, thanos)
      expect(result).toEqual(['Thanos', 'Thanos', 'Thanos'])
    })
  })

describe('onlyIndex function', () => {
    const someNumbers = [
      [1, 2, 3, 4, 5],
      [6, 9, 8, 7, 6],
      [4, 5, 6, 6, 7],
      [0, 1, 2, 3, 4]
    ]
    it('should not modify the original array', () => {
      const original = [...someNumbers]
      fn2.onlyIndex(someNumbers, 2)
      expect(someNumbers).toEqual(original)
    })
    it('should pull out the element at index 2', () => {
      const result = fn2.onlyIndex(someNumbers, 2)
      expect(result).toEqual([3, 8, 6, 2])
    })
    it('should pull out the element at index 0', () => {
      const result = fn2.onlyIndex(someNumbers, 0)
      expect(result).toEqual([1, 6, 4, 0])
    })
  })