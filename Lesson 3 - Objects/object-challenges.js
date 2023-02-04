//CHALLENGE 1
// const solution = (arr, ob) => {
//     const result = []
//     arr.forEach(e => {
//         if(ob[e]){
//             result.push(ob[e])
//         }
//     })
//     return result
// }

// console.log(solution(['123', 'abc'], {123: 'hi', 345: 'world', abc: 'world'}));
//I want to know if i have the correct solution

//CHALLENGE 2
// const solution = (numOfArr, numInArr, finalResult = [], i = 0) => {
//     const buildObjects = (x1, y1, result= []) => {
//         if(result.length === numInArr) return result
//         result.push({x: x1, y: y1})
//         return buildObjects(x1 + 1, y1, result)
//     }
//     if(finalResult.length === numOfArr) return finalResult
//     finalResult.push(buildObjects(0,i))
//     return solution(numOfArr, numInArr, finalResult, i + 1)
// }

// console.log(solution(3,2))
// console.log(solution(99,2))

//CHALLENGE 3
// const solution = (arrKeys) => {
//     return (ob, result = {}) => {
//         arrKeys.forEach(e => {
//             if(ob[e]){
//                 result[e] = ob[e]
//                 return result
//             }
//         })
//         return result
//     }
// }

// const resp = solution(['apollo', 'bella', 'cinderella'])
// console.log(resp({'apple': 25, 'apollo': 45, 'cindy': 84}))
// console.log(resp({orange: 80, 'apollo': 95}))
// console.log(resp({iron: 'man', billy: 'joel'}))

//CHALLENGE 4
// const solution = (arr, target, map = {}, i = 0) => {
//     if(i === arr.length) return false
//     map[arr[i]] = true
//     if(map[target - arr[i]] && (target - arr[i]) !== arr[i]){
//         return true
//     } else {
//         return solution(arr, target, map, i + 1)
//     }
// }

// console.log(solution([1,2,22,333,23], 25))   // returns true
// console.log(solution([1,2,22,333,23], 24))

//CHALLENGE 5
// const solution = (ob1, ob2) => {
//     const retOb = {}
//     keys = Object.keys(ob1)
//     keys.forEach(e => {
//         if(ob2[e]){
//             f = ob2[e]
//             retOb[e] = f(ob1[e])
//         } else {
//             retOb[e] = ob1[e]
//         }
//     })
//     return retOb
// }

// console.log(solution ({
//     "name": "drake",
//     "age": "33",
//     "power": 'finessing',
//     "color": "platinum"
//  }, {
//     "name": (e) => { return e + "kendrick" },
//     "power": (e) => { return "motivating" + e }
//  }));

//CHALLENGE 6
// const solution = (arr) => {
//     const newA = []
//     const map = arr.reduce((acc, e) => {
//         acc[e] = (acc[e] || 0) + 1
//         return acc
//     }, {})
//     const keys = Object.keys(map)
//     const remove = (i = 0) => {
//         if(i === keys.length) return
//         if(map[keys[i]] > 1 ){
//             newA.push(parseInt(keys[i]))
//         }
//         remove(i+1)
//     }
//     remove()
//     return newA
// }

// console.log(solution([1, 2, 2, 3, 1]))
// console.log(solution([1, 1, 1, 1, 2, 3, 3]) )

//CHALLENGE 7 
// Object.prototype.map = function(f, result = [], entries = Object.entries(this), i = 0){
//     if(i === entries.length) return result
//     result.push(f(entries[i][0], entries[i][1], i))
//     return this.map(f, result, entries, i + 1)
// }
// const info = {
//     ironman: 'arrogant',
//     spiderman: 'naive',
//     hulk: 'strong',
//  }
//  const result = info.map( (key, value, i) => {
//     return key + i + value
//  })
//  console.log(result)

//CHALLENGE 8 
// const solution = (ob, ms, i = 0) => {
//     keys = Object.keys(ob)
//     if (i === keys.length) return
//     f = ob[keys[i]]
//     f(keys[i])
//     setTimeout(()=> {
//         solution(ob, ms, i + 1)
//     }, ms)
// }

// const a = {
//     "jayZ": (key) => console.log(key),
//     "tupac": (key) => console.log(key + 2),
//     "name3": (key) => console.log(key === "name3"),
//     "level": (key) => console.log(key + key + key)
//  }
//  solution(a, 3000)

//CHALLENGE 9
import fetch from 'node-fetch'
import * as fs from 'fs'

fetch('https://pokeapi.co/api/v2/pokemon/').then(res =>{
    return res.json()
}).then(data => {
    const arrayPromise = data.results.map(pokemon => {
        return fetch(pokemon.url).then(pokeRes => {
            return pokeRes.json()
        })
    })
    return Promise.all(arrayPromise)
}).then(allProm => {
    console.log(allProm)
    const images = allProm.reduce((acc,e)=> {
        return `${acc}<div><p>${e.name}</p><img src="${e.sprites.front_default}" /></div>`
    }, "")
    console.log(images)
    fs.writeFile('./Lesson 3 - Objects/pokeChallenge.html',images, () => {})
})

//CHALLENGE 10
//own html file