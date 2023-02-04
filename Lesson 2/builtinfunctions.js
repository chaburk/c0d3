const { run } = require("jest")

const allFuns = {}
//MAP FUNCTION EXERCISES
//PROBLEM 1
const oddToZero = (arr) => {
    const makeOdd = x => {
        if(x % 2 === 1){
            return 0
        }
        return x
    }
    return arr.map(makeOdd)
}

allFuns.oddToZero = oddToZero

//PROBLEM 2
const firstLetters = (arr) => {
    return arr.map(x => {
        return x[0]
    })
}

allFuns.firstLetters = firstLetters

//PROBLEM 3
const firstXToZero = (arr, num) => {
    return arr.map((x, i) => {
        if(i < num){
            return 0
        }
        return x
    })
}

allFuns.firstXToZero = firstXToZero

//PROBLEM 4
const nonPrimeToZero = (arr) => {
    const isPrime = (num, n = 2) => {
        if(num < 2){
            return false
        }
        if(num === n){
            return true
        }
        if(num % n === 0){
            return false
        }
        return isPrime(num, n + 1)
    }
    return arr.map(x => {
        if(isPrime(x)){
            return x
        }
        return 0
    })
}

allFuns.nonPrimeToZero = nonPrimeToZero

//PROBLEM 5
const append = (arr, s) => {
    return arr.map(x => {
        return x + s
    })
}

allFuns.append = append

//PROBLEM 6
const runOnEach = (arr, f) => {
    return arr.map(f)
}

allFuns.runOnEach = runOnEach

//PROBLEM 7
const clone = (arr) => {
    return arr.map(x => {
        return x
    })
}

allFuns.clone = clone

//forEach -Filter - Find Function Exercises
//PROBLEM 1
const noMoreEvens = arr => {
    return arr.filter(x => {
        return x % 2
    })
}

allFuns.noMoreEvens = noMoreEvens

//PROBLEM 2
const removeEmpty = arr => {
    return arr.filter(x => {
        return x !== ""
        //return str.length
    })
}

allFuns.removeEmpty = removeEmpty

//PROBLEM 3
const primesOnly = arr => {
    const isPrime = (num, n = 2) => {
        if(num < 2){
            return false
        }
        if(num === n){
            return true
        }
        if(num % n === 0){
            return false
        }
        return isPrime(num, n + 1)
    }
    return arr.filter(x => {
        return isPrime(x)
    })
}

allFuns.primesOnly = primesOnly

//PROBLEM 4
const firstPrime = arr => {
    const isPrime = (num, n = 2) => {
        if(num < 2){
            return false
        }
        if(num === n){
            return true
        }
        if(num % n === 0){
            return false
        }
        return isPrime(num, n + 1)
    }
    return arr.find(x => {
        return isPrime(x)
    })
}

allFuns.firstPrime = firstPrime

//REDUCE FUNCTION EXERCISE
//PROBLEM 1
const sum = arr => {
    return arr.reduce((acc, x) => {
        return acc + x
    }, 0)
}

allFuns.sum = sum

//PROBLEM 2
const largest = arr => {
    return arr.reduce((acc, x) => {
        if(x > acc){
            acc = x
        }
        return acc
    }, arr[0])
}

allFuns.largest = largest

//PROBLEM 3
const longest = arr => {
    return arr.reduce((acc, x) => {
        if(x.length > acc.length){
            acc = x
            //return x
        }
        return acc
    }, arr[0])
}

allFuns.longest = longest

//PROBLEM 4
const matches = (arr, s) => {
    return arr.reduce((acc, x) => {
        if(x === s){
            return acc += 1
        }
        return acc
    }, 0)
}

allFuns.matches = matches

//PROBLEM 5
const combineLess5 = arr => {
    return arr.reduce((acc, x) => {
        if (x.length < 5){
            return acc += x
        }
        return acc
    }, "")
}

allFuns.combineLess5 = combineLess5

//PROBLEM 6
const largerThan5 = arr => {
    return arr.reduce((acc, x)=> {
        if(x > 5){
            acc.push(x)
        }
        return acc
    }, [])
}

allFuns.largerThan5 = largerThan5

//ARRAY PROTOTYPE EXERCISES
//PROBLEM 1
Array.prototype.getEvens = function () {
    return this.filter(x => {
        return x % 2 === 0
    })
}

//PROBLEM 2
Array.prototype.sum = function () {
    return this.reduce((acc, x) => {
        return acc + x
    }, 0)
}

// const arr = [9, 80, 12, 2]
// console.log(arr.sum())

//PROBLEM 3
Array.prototype.pad = function (i, s, n = 0) {
    if(i <= n){
        return this
    }
    this.push(s)
    return this.pad(i, s, n + 1)
}

// Array.prototype.pad = function (num, str) {
//     if (num <= 0) {
//       return this
//     }
//     this.push(str)
//     return this.pad(num - 1, str)
//   }

// const arr = ["<button name='submit'></button>", '<div></div>']
// console.log(arr.pad(-2, '<br/>'))

//PROBLEM 4
Array.prototype.fizzbuzz = function () {
    this.forEach((x, i) => {
        if(x % 3 === 0 && x % 5 === 0){
            this[i] = "fizzbuzz"
        } else if(x % 3 === 0){
            this[i] =  "fizz"
        } else if(x % 5 === 0){
            this[i] =  "buzz"
        } else {
            this[i] = x
        }
    })
    return this
}

// const arr = [9, 80, 12, 2, 30]
// console.log(arr.fizzbuzz())

//PROBLEM 5
Array.prototype.removeEvens = function () {
    return this.filter(x => {
        return x % 2
    })
}

// const arr = [2,4,6,7,8]
// console.log(arr.removeEvens())

//PROBLEM 6
Array.prototype.getIterator = function () {
    let count = 0
    return () => {
        const current = this[count]
        count += 1
        if(count === this.length){
            count = 0
        }
        return current
    }
}

//Mine works but i do like this solution using the mod
// Array.prototype.getIterator = function () {
//     let i = -1
//     return () => {
//       i = i + 1
//       return this[i % this.length]
//     }
//   }

// const arr = [2,4,6,7,8]
// let chase = arr.getIterator()
// console.log(chase())
// console.log(chase())
// console.log(chase())
// console.log(chase())
// console.log(chase())
// console.log(chase())


module.exports = allFuns