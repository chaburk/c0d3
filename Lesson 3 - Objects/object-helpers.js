//OBJECT HELPER FUNCTIONS
//EXERCISE 1

allFuns = {}

const longestString = (ob) => {
    const arr = Object.values(ob)
    console.log(arr)
    return arr.reduce((str, e) => {
        if(e.length > str.length){
            return e
        }
        return str
    }, "")
}

// const info = {
//     ironman: 'arrogant',
//     spiderman: 'naive',
//     hulk: 'strong'
//   }
// const result = longestString(info)
// console.log(result)

allFuns.longestString = longestString

//EXERCISE 2

const keyOfLongestString = (ob) => {
    const keys = Object.keys(ob)
    if(keys.length === 0 ) return undefined
    return keys.reduce((str, e) => {
        if(ob[e].length > ob[str].length){
            return e
        }
        return str
    }, keys[0])
}

// const info = {
//     ironman: 'arrogant',
//     spiderman: 'naive',
//     hulk: 'strong'
//   }
// const result = keyOfLongestString(info)
// console.log(result)

// const info2 = {
//     a: 'xxxxxx',
//     bc: 'xx',
//     abc: 'xxx'
//   }
// const result2 = keyOfLongestString(info2)
// console.log(result2)

allFuns.keyOfLongestString = keyOfLongestString

//EXERCISE 3
const removeLongestString = (ob) => {
    let longKey = `${keyOfLongestString(ob)}`
    delete ob[longKey]
}

// const info = {
//     ironman: 'arrogant',
//     spiderman: 'naive',
//     hulk: 'strong'
//   }

allFuns.removeLongestString = removeLongestString

//EXERCISE 4
const commas = (ob) => {
    const vals = Object.values(ob)
    return vals.reduce((str, e, i) => {
        console.log(i)
        if(i === vals.length - 1){
            return str + e
        }
        return str + `${e}, `
    }, "")
}

allFuns.commas = commas

//EXERCISE 5
const headers = (ob) => {
    return Object.keys(ob).reduce((str, e) => {
        return str + `<h1>${e}</h1>`
    }, "")
}

const headers2 = (ob) => {
    return Object.entries(ob).reduce((str, e) => {
        return str + `<h1>${e[0]}: ${e[1]}</h1>`
    }, "")
}

const headers3 = (ob) => {
    return Object.entries(ob).reduce((str, e) => {
        return str + `<div><h1>${e[0]}</h1><h2>${e[1]}</h2></div>`
    }, "")
}
const info = {
    ironman: 'arrogant',
    spiderman: 'naive',
    hulk: 'strong'
  }
const result = headers3(info)
console.log(result)

allFuns.headers = headers

allFuns.headers2 = headers2

allFuns.headers3 = headers3

module.exports = allFuns