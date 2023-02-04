const fn = require("./builtinfunctions.js")

describe('oddToZero function', () => {
    it('should zero when some elements are odd', () => {
      const result = fn.oddToZero([1, 2, 3, 4, 5])
      expect(result).toEqual([0, 2, 0, 4, 0])
    })
    it('should zero when all elements are odd', () => {
      const result = fn.oddToZero([1, 3])
      expect(result).toEqual([0, 0])
    })
    it('should return same array when no elements are odd', () => {
      const result = fn.oddToZero([8, 10, 12])
      expect(result).toEqual([8, 10, 12])
    })
  })

describe('firstLetters function', () => {
    it('should grab the first letters from 5 strings', () => {
      const result = fn.firstLetters(['hello', 'my', 'name', 'is', 'pikachu'])
      expect(result).toEqual(['h', 'm', 'n', 'i', 'p'])
    })
    it('should grab the first letters from 3 strings', () => {
      const result = fn.firstLetters(['JavaScript', 'is', 'awesome'])
      expect(result).toEqual(['J', 'i', 'a'])
    })
    it('should return an empty array when given an empty array', () => {
      const result = fn.firstLetters([])
      expect(result).toEqual([])
    })
  })

describe('firstXToZero function', () => {
    it('should change 3 numbers to 0', () => {
      const result = fn.firstXToZero([0, 5, 9, 6], 3)
      expect(result).toEqual([0, 0, 0, 6])
    })
    it('should not modify the array when asked to change 0 elements', () => {
      const result = fn.firstXToZero(["Don't", 'change', 'me'], 0)
      expect(result).toEqual(["Don't", 'change', 'me'])
    })
    it('should change all to zero when X beyond array length', () => {
      const result = fn.firstXToZero([1, 2, 3], 4)
      expect(result).toEqual([0, 0, 0])
    })
  })

describe('nonPrimeToZero function', () => {
    it('should zero all numbers when non-prime', () => {
      const result = fn.nonPrimeToZero([-13, 0, 1, 4, 6])
      expect(result).toEqual([0, 0, 0, 0, 0])
    })
    it('should return an identical array if all are prime', () => {
      const result = fn.nonPrimeToZero([2, 17, 1601, 7919])
      expect(result).toEqual([2, 17, 1601, 7919])
    })
    it('should change only prime numbers to 0', () => {
      const result = fn.nonPrimeToZero([1, 2, 3, 4, 5])
      expect(result).toEqual([0, 2, 3, 0, 5])
    })
  })
  
describe('append', () => {
    it('should append a string to 5 strings', () => {
      const result = fn.append(
        ['hello', 'my', 'name', 'is', 'pikachu'],
        ' -log'
      )
      expect(result).toEqual([
        'hello -log',
        'my -log',
        'name -log',
        'is -log',
        'pikachu -log'
      ])
    })
    it('should append a string to 2 strings', () => {
      const result = fn.append(['<img/>', '<p></p>'], '<hr/>')
      expect(result).toEqual(['<img/><hr/>', '<p></p><hr/>'])
    })
    it('should not modify the original array', () => {
      const arr = ['Spiderman', 'Peter Parker']
      fn.append(arr, 'Mary Jane')
      expect(arr).toEqual(['Spiderman', 'Peter Parker'])
    })
  })

describe('clone function', () => {
    const farm1 = ['sheep', 'cow', 'pig']
    const farm2 = fn.clone(farm1)
    it('should clone an array of several elements', () => {
      expect(farm1).toEqual(farm2) // deep equality
    })
    it('should not return the same array', () => {
      expect(farm1 === farm2).toBeFalsy()
    })
    it('should clone an empty array', () => {
      expect(fn.clone([])).toEqual([])
    })
  })

describe('noMoreEvens function', () => {
    it('should remove evens from an array with a mix of numbers', () => {
      const result = fn.noMoreEvens([1, 2, 6, 4, 5])
      expect(result).toEqual([1, 5])
    })
    it('should remove all numbers when even', () => {
      const result = fn.noMoreEvens([2, 16, 40, 52])
      expect(result).toEqual([])
    })
    it('should not touch an array of all odd numbers', () => {
      const result = fn.noMoreEvens([1, 571, 3, 9])
      expect(result).toEqual([1, 571, 3, 9])
    })
    it('should remove negative even numbers as well', () => {
      const result = fn.noMoreEvens([-2, -571, -4])
      expect(result).toEqual([-571])
    })
  })

describe('remove empty function', () => {
    it('should return [] when array is empty', () => {
      const result = fn.removeEmpty([])
      expect(result).toEqual([])
    })
    it('should return [] when array only has empty strings', () => {
      const result = fn.removeEmpty(['', '', ''])
      expect(result).toEqual([])
    })
    it('should return same array when array has no empty strings', () => {
      const result = fn.removeEmpty(['hello', 'world'])
      expect(result).toEqual(['hello', 'world'])
    })
    it('should return array without empty strings', () => {
      const result = fn.removeEmpty(['hello', 'world', '', 'name', '', 'is'])
      expect(result).toEqual(['hello', 'world', 'name', 'is'])
    })
  })

describe('primesOnly function', () => {
    it('should return empty array if no primes', () => {
      const result = fn.primesOnly([-13, 0, 1, 4, 6])
      expect(result).toEqual([])
    })
    it('should return an identical array if all are prime', () => {
      const result = fn.primesOnly([2, 17, 1601, 7919])
      expect(result).toEqual([2, 17, 1601, 7919])
    })
  })

describe('firstPrime function', () => {
    it('should find a prime at the beginning of the array', () => {
      const result = fn.firstPrime([2, 17, 1601, 7919])
      expect(result).toEqual(2)
    })
    it('should find a prime at the end of the array', () => {
      const result = fn.firstPrime([1, 4, 16, 7919])
      expect(result).toEqual(7919)
    })
    it('should find no primes in an empty array', () => {
      expect(fn.firstPrime([])).toEqual(undefined)
    })
  })

describe('sum function', () => {
    it('should return 0 for an empty array', () => {
      const result = fn.sum([])
      expect(result).toEqual(0)
    })
    it('should return negative for array of negative numbers', () => {
      const result = fn.sum([-2, -3])
      expect(result).toEqual(-5)
    })
    it('should add up array with negative and postive numbers', () => {
      const result = fn.sum([-20, -3, 20])
      expect(result).toEqual(-3)
    })
  })

describe('largest function', () => {
    it('should find the largest number in the array', () => {
      const result = fn.largest([9, 8, 16, 2, 3])
      expect(result).toEqual(16)
    })
    it('should return 0 since given array is empty', () => {
      const result = fn.largest([])
      expect(result).toEqual(undefined)
    })
    it('should return first index of array if all numbers are same', () => {
      const result = fn.largest([10, 10, 10, 10])
      expect(result).toEqual(10)
    })
  })

describe('longest function', () => {
    it('should find the longest string at the end of the array', () => {
      const result = fn.longest(['Thor', 'Loki', 'Rocket', 'Ant-Man'])
      expect(result).toEqual('Ant-Man')
    })
    it('should find the longest string in the middle of the array', () => {
      const result = fn.longest(['Thor', 'Spiderman', 'Ant-Man'])
      expect(result).toEqual('Spiderman')
    })
    it('should return string from array of length 1', () => {
      const result = fn.longest(['Wasp'])
      expect(result).toEqual('Wasp')
    })
  })

describe('matches function', () => {
    it('should match elements in various positions', () => {
      const result = fn.matches(['Thor', 'Loki', 'Ant-Man', 'Loki'], 'Loki')
      expect(result).toEqual(2)
    })
    it('should match concurrent elements', () => {
      const result = fn.matches(
        ['Spiderman', 'Spiderman', 'Mary Jane'],
        'Spiderman'
      )
      expect(result).toEqual(2)
    })
    it('should return 0 if no matches', () => {
      const result = fn.matches(['Thor', 'Loki', 'Ant-Man'], 'Wonder Woman')
      expect(result).toEqual(0)
    })
    it('should return 0 if for an empty array', () => {
      const result = fn.matches([], 'Thor')
      expect(result).toEqual(0)
    })
  })

describe('combineLess5 function', () => {
    it('should combine strings in various positions', () => {
      const arr = ['Thor', 'Loki', 'Ant-Man', 'Rocket', 'Wasp']
      const result = fn.combineLess5(arr)
      expect(result).toEqual('ThorLokiWasp')
    })
    it('should return one element with length < 5', () => {
      const arr = ['Spiderman', 'Loki', 'Ant-Man', 'Rocket']
      const result = fn.combineLess5(arr)
      expect(result).toEqual('Loki')
    })
    it('should return empty string if no matching elements', () => {
      const arr = ['Black Panther', 'Doctor Strange', 'Captain Marvel']
      const result = fn.combineLess5(arr)
      expect(result).toEqual('')
    })
  })

describe('largerThan5 function', () => {
    it('should find numbers larger than 5 from various positions', () => {
      const result = fn.largerThan5([5, 9, 2, 6, 5])
      expect(result).toEqual([9, 6])
    })
    it('should find concurrent numbers larger than 5', () => {
      const result = fn.largerThan5([8, 8, 2, 3, 10])
      expect(result).toEqual([8, 8, 10])
    })
    it('should return empty array if no numbers larger than 5', () => {
      const result = fn.largerThan5([1, 2, 3, 4, 5])
      expect(result).toEqual([])
    })
  })

//Don't know how to test
describe('getEvens function', () => {
    it('should pull even numbers from various positions', () => {
      const result = [9, 80, 11, 2].getEvens()
      expect(result).toEqual([80, 2])
    })
    it('should pull even numbers from concurrent positions', () => {
      const result = [2, 4, 6, 7, 8].getEvens()
      expect(result).toEqual([2, 4, 6, 8])
    })
    it('should have no result if no evens', () => {
      const result = [1, 3, 9, 21].getEvens()
      expect(result).toEqual([])
    })
  })

describe('sum function', () => {
    it('should find sum of an array of numbers', () => {
      const result = [2, 17, 3, -3].sum()
      expect(result).toEqual(19)
    })
    it('should add strings together', () => {
      const data = ['<p>', "<img src='https://placebear.com/800/710'>", '</p>']
      const result = data.sum()
      expect(result).toEqual(
        "<p><img src='https://placebear.com/800/710'></p>"
      )
    })
    it('should return 0 for an empty array', () => {
      const result = [].sum()
      expect(result).toEqual(undefined)
    })
  })
  
describe('pad function', () => {
    it('should modify the original array', () => {
      const arr = ['Doctor']
      arr.pad(1, 'Strange')
      expect(arr).toEqual(['Doctor', 'Strange'])
    })
    it('should pad multiple times', () => {
      const arr = ["<button name='submit'></button>", '<div></div>']
      arr.pad(2, '<br/>')
      expect(arr).toEqual([
        "<button name='submit'></button>",
        '<div></div>',
        '<br/>',
        '<br/>'
      ])
    })
    it('should return same array when given negative pad number', () => {
      const result = ['Quill', 'Gamora'].pad(-2, 'Drax')
      expect(result).toEqual(['Quill', 'Gamora'])
    })
    it('should return same array when given zero pad number', () => {
      const result = ['Quill', 'Gamora'].pad(0, 'Drax')
      expect(result).toEqual(['Quill', 'Gamora'])
    })
  })

describe('fizzbuzz function', () => {
    it('should change numbers divisible by 3 to fizz', () => {
      const magicNumbers = [1, 2, 3, 6, 19, 18]
      magicNumbers.fizzbuzz()
      expect(magicNumbers).toEqual([1, 2, 'fizz', 'fizz', 19, 'fizz'])
    })
    it('should change numbers divisible by 5 to buzz', () => {
      const magicNumbers = [1, 2, 5, 10, 11]
      magicNumbers.fizzbuzz()
      expect(magicNumbers).toEqual([1, 2, 'buzz', 'buzz', 11])
    })
    it('should change numbers divisible by 15 to fizzbuzz', () => {
      const magicNumbers = [1, 2, 4, 15, 16, 30]
      magicNumbers.fizzbuzz()
      expect(magicNumbers).toEqual([1, 2, 4, 'fizzbuzz', 16, 'fizzbuzz'])
    })
    it('should correctly change 3 to fizz, 5 to buzz, and 15 to fizzbuzz', () => {
      const magicNumbers = [9, 80, 12, 2, 30]
      magicNumbers.fizzbuzz()
      expect(magicNumbers).toEqual(['fizz', 'buzz', 'fizz', 2, 'fizzbuzz'])
    })
  })

describe('removeEvens function', () => {
    it('should remove even numbers from various positions', () => {
      const arr = [9, 80, 11, 2]
      arr.removeEvens()
      expect(arr).toEqual([9, 11])
    })
    it('should remove even numbers from concurrent positions', () => {
      const arr = [2, 4, 6, 7, 8]
      arr.removeEvens()
      expect(arr).toEqual([7])
    })
    it('should leave array the same if no evens', () => {
      const arr = [1, 3, 9, 21]
      arr.removeEvens()
      expect(arr).toEqual([1, 3, 9, 21])
    })
    it('should leave empty array the same', () => {
      const arr = []
      arr.removeEvens()
      expect(arr).toEqual([])
    })
  })

  describe('getIterator function', () => {
    it('should iterate through 3 elements', () => {
      const iterate = ['PayPal', 'Google', 'Netflix'].getIterator()
      expect(iterate()).toEqual('PayPal')
      expect(iterate()).toEqual('Google')
      expect(iterate()).toEqual('Netflix')
    })
    it('should return to beginning once done', () => {
      const iterate = [9, 80, 12, 2].getIterator()
      expect(iterate()).toEqual(9)
      expect(iterate()).toEqual(80)
      expect(iterate()).toEqual(12)
      expect(iterate()).toEqual(2)
      expect(iterate()).toEqual(9)
      expect(iterate()).toEqual(80)
    })
    it('should return undefined for empty array iterator', () => {
      const iterate = [].getIterator()
      expect(iterate()).toEqual(undefined)
    })
    it('should iterate through one element', () => {
      const iterate = ['Ironman'].getIterator()
      expect(iterate()).toEqual('Ironman')
      expect(iterate()).toEqual('Ironman')
    })
  })