//Object Exercises
allFuns = {}
//EXERCISE 1
const addKV = (Ob, k, v) => {
    Ob[k] = v
}
const newOb = {

}

allFuns.addKV = addKV
// addKV(newOb, "Age", "24")
// addKV(newOb, "Courtney", "old")

// console.log(newOb.Courtney)

//Exercise 2
const filterNonKeys = (arr, ob) => {
    return arr.filter(x => {
        return ob[x]
    })
}

// const info = {
//     ironman: 'arrogant',
//     spiderman: 'naive',
//     hulk: 'strong'
//   }
// const avengers = ['ironman', 'strange', 'thor', 'spiderman', 'hulk']
// const result = filterNonKeys(avengers, info)
// console.log(result)

allFuns.filterNonKeys = filterNonKeys

//EXERCISE 3
const addDescriptions = (arr, ob) => {
    return arr.forEach(x => {
        return x["description"] = ob[x.name]
    })
}

// const characters = [
//     { name: 'ironman' },
//     { name: 'spiderman' },
//     { name: 'hulk' }
//   ]
//   const info = {
//     ironman: 'arrogant',
//     spiderman: 'naive',
//     hulk: 'strong'
//   }

// console.log(addDescriptions(characters, info))
// console.log(characters)

allFuns.addDescriptions = addDescriptions

//EXERCISE 4
const countOccurrences = (arr) => {
    ob = {}
    arr.forEach(e => {
        if(ob[e]){
            ob[e] = ob[e] + 1
        } else {
            ob[`${e}`] = 1
        }
    })
    // return arr.reduce((acc, e) => {
    //     acc[e] = (acc[e] || 0) + 1
    //     return acc
    //   }, {})
    return ob
}

// const abc = ['abc', 'a', 'abc', 'b', 'abc', 'a', 'b', 'c', 'abc']
// const result = countOccurrences(abc)
// console.log(result)

allFuns.countOccurrences = countOccurrences

module.exports = allFuns






//EXERCISE 1
// const newOb = {
//     job: "unemployed",
//     language: "english",
//     voice: "pleasant"
// }

//EXERCISE 2 - do later



//prepareStage object before next exercises
//PROBLEM 2
// const prepareStage = {
//     then: () => {
//         return prepareStage
//     }
// }
//PROBLEM 3
// const prepareStage = {
//     then: (x) => {
//         console.log(x)
//         return prepareStage
//     }
// }

// prepareStage.then('Squirtle').then('Wartortle').then('Blastoise')

//PROBLEM 4
// const prepareStage = {
//     then: (x) => {
//         x()
//         return prepareStage
//     }
// }

// const performMagic = () => {
//     console.log('Abracadabra!')
//   }

// prepareStage.then(performMagic).then(performMagic).then(performMagic)
