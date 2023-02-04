allFuns = {}

//PROBLEM 1
const mergeArrays = (a1, a2) => {
    return [...a1,...a2]
}

allFuns.mergeArrays = mergeArrays

//PROBLEM 2
const firstLongerThan = (arr, num) => {
    return arr.find(e => {
        return e.length > num
    })
}

allFuns.firstLongerThan = firstLongerThan

//PROBLEM 3
const getReturnValues = (arr) => {
    return arr.map(f => {
        return f()
    })
    // const newA = []
    // arr.forEach(f => {
    //     newA.push(f())
    // })
    // return newA
}

allFuns.getReturnValues = getReturnValues

//PROBLEM 4
const zeroSquare = (num, finResult = [], n = 0) => {
    const innerA = (result = [], i = 0) => {
        if(result.length === num){
            return result
        }
        result.push(0)
        return innerA(result, i + 1)
    }
    if(finResult.length === num){
        return finResult
    }
    finResult.push(innerA())
    return zeroSquare(num, finResult, n + 1)

}

allFuns.zeroSquare = zeroSquare
 
module.exports = allFuns