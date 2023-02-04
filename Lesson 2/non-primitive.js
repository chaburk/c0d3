const allFuns = {}

//Exercise 1 Non-primative data types
const selectiveZero = (arr, num, n=0) => {
    if (n === arr.length){
        return arr
    }
    if (arr[n] === num){
        arr[n] = 0
    }
    return selectiveZero(arr, num, n + 1)
}

allFuns.selectiveZero = selectiveZero

//Exercise 2 Non-primateive data types
//Largest - returns the largest number in an array
const largest = (arr, n = 0, dm = arr[0]) => {
    if (n === arr.length){
        return dm
    }
    if (arr[n] > dm){
        dm = arr[n]
    }
    return largest(arr, n + 1, dm)
}

allFuns.largest = largest

//Exercise 3 Non-primateive data types
//firstXToZero sets the value of the first X elements in an array to 0, where X is the input number.
const firstXToZero = (arr, num, n = 0) => {
    if(n === arr.length){
        return arr
    }
    if (n < num){
        arr[n] = 0
    }
    return firstXToZero(arr, num, n + 1)
}

allFuns.firstXToZero = firstXToZero

const allPrime = (arr, n = 0) => {
    const isPrime = (num, i = 2) => {
        if(num < i){
            return false
        }
        if (num === i){
            return true
        }
        if(num % i === 0){
            return false
        }
        return isPrime(num, i + 1)
    }
    if (n === arr.length){
        return true
    }
    if (isPrime(arr[n])){
        return allPrime(arr, n + 1)
    } else {
        return false
    }
}


allFuns.allPrime = allPrime


const increasing = (arr, n = 0, l = arr[0]) => {
    if (n === arr.length){
        return true
    }
    if (arr[n] < l){
        return false
    }
    if (arr[n] === l && n !== 0){
        return false
    }
    return increasing(arr, n + 1, arr[n])
}

allFuns.increasing = increasing

module.exports = allFuns