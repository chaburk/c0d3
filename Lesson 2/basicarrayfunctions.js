//BASIC ARRAY FUNCTIONS EXERCISES
//Think about the tests but it's too much to keep writing them

const allFuncs = {}

//PROBLEM 1
const copyArray = (arr, result = [], n = 0) => {
    if(n === arr.length) {
        return result
    }
    result.push(arr[n])
    return copyArray(arr, result, n + 1)
}

allFuncs.copyArray = copyArray

//PROBLEM 2
const removeElement = (a, s, n = 0) => {
    if (n === a.length){
        return a
    }
    if(a[n] === s){
        a.splice(n, 1)
        return removeElement(a, s, n)
    }
    return removeElement(a, s, n + 1)
}

allFuncs.removeElement = removeElement

//PROBLEM 3
const copyWithout = (arr, num, result = [], n = 0) => {
    if(n === arr.length){
        return result
    }
    if(arr[n] !== num){
        result.push(arr[n])
    }
    return copyWithout(arr, num, result, n + 1)
}

allFuncs.copyWithout = copyWithout

//PROBLEM 4
//They did something interesting in the lecture to solve it
const copyReverse = (arr, result = [], n = 0) => {
    if(n === arr.length){
        return result
    }
    result.unshift(arr[n])
    return copyReverse(arr, result, n + 1)
}

allFuncs.copyReverse = copyReverse

//PROBLEM 5
const copyLast = (arr, num, result = [], n = 0) => {
    if(n === arr.length){
        return result
    }
    if(n < num){
        return copyLast(arr, num, result, n + 1)
    } else {
        result.push(arr[n])
        return copyLast(arr, num, result, n+1)
    }

}

allFuncs.copyLast = copyLast


//PROBLEM 6
const copyFirst = (arr, num, result = [], n = 0) => {
    if(arr.length - num <= n){
        return result
    }
    result.push(arr[n])
    return copyFirst(arr, num, result, n + 1)
} 

allFuncs.copyFirst = copyFirst

//PROBLEM 7
const runOnEach = (arr, f, result = [], n = 0) => {
    if(n === arr.length){
        return result
    }
    result.push(f(arr[n], n))
    return runOnEach(arr, f, result, n + 1)
}

allFuncs.runOnEach = runOnEach

//PROBLEM 8
const onlyIndex = (arr, num, result = [], n = 0) => {
    if(n >= arr.length){
        return result
    }
    if (num >= arr.length){
        return result
    }
    result.push(arr[n][num])
    return onlyIndex(arr, num, result, n + 1)
}

allFuncs.onlyIndex = onlyIndex

module.exports = allFuncs