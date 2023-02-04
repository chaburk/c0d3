// const fs = require('fs')
// fs.readdir('./', (err, files) => {
//     files.forEach(e => {
//         if(e.length < 10) console.log(e)
//     })
// })

// fs.readdir('./', (err, files) => {
//     console.log('a')
// })
// console.log('b')

//PRACTICAL APPLICATIONS
// const makeFiles = (x, i = 0) => {
//     if(i > x) return
//     fs.writeFile(`./trainer${i}.txt`, 'Gotta catch \'em all', () =>{})
//     makeFiles(x, i + 1)
// }

// makeFiles(2)

// const listFiles = () => {
//     fs.readdir('./', (err, files) => {
//         const h1s = files.reduce((acc, e) => {
//             return `${acc}<h1>${e}</h1>`
//         }, "")
//         fs.writeFile("./files.html", h1s, () => {})
//     })
// }

// listFiles()

//APIS
//Request
// const request = require('request')

// request('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20', (err, res, data) => {
//     console.log(data)
//     const pokeInfo = JSON.parse(data)

//     console.log(pokeInfo.results)
// })

// const request = require('request')
// request('https://news.ycombinator.com', (err, res, data) => {
//   console.log(data) // data is a string of HTML tags
// })

//Exercise 1
// const request = require('request')
// request('https://www.c0d3.com/api/lessons', (err, res, data) => {
//     const titles = JSON.parse(data)
//     titles.forEach(e => {
//         console.log(e.title)
//     })
// })

//Exercise 2
// const request = require('request')
// request('https://www.c0d3.com/api/lessons', (err, res, data) => {
//     const titles = JSON.parse(data)
//     h1s = titles.reduce((acc, e) => {
//         return `${acc}<h1>${e.title}</h1>`
//     },"")
//     fs.writeFile('./lessons.html', h1s, () =>{})
// })

//Exercise 3
// const request = require('request')
// request('https://pokeapi.co/api/v2/pokemon/', (err, res, data) => {
//     const pokemon = JSON.parse(data)
//     const names = []
//     pokemon.results.forEach(name => {
//         names.push(name.name)
//     })
//     const webNames = names.reduce((acc, e) => {
//         return `${acc}<h1>${e}</h1>`
//     }, "")
//     fs.writeFile('./Lesson 3 - Objects/names.html', webNames, () => {

//     })
// })

//Exercise 4
// const request = require('request')
// request('https://api.openaq.org/v1/countries', (err, res, data) => {
//     const parsedCountries = JSON.parse(data)
//     const countries = parsedCountries.results
//     const mostCities = countries.reduce((acc, e) => {
//         if(e.cities > acc.cities){
//             return e
//         }
//         return acc
//     }, countries[0])
//     console.log(mostCities.name)
// })

//Exercise 5
//I had all the same ideas and even the same code but something does not work in mine
// const request = require('request')

// request('https://pokeapi.co/api/v2/pokemon/', (err, res, body) => {
//   const parsedJson = JSON.parse(body)
//   const pokemonList = []
//   parsedJson.results.forEach(thisPokemon => {
//     const name = thisPokemon.name
//     request(thisPokemon.url, (err, pokeRes, pokeBody) => {
//       const data = JSON.parse(pokeBody)
//       const weight = data.weight
//       pokemonList.push({
//         name: name,
//         weight: weight
//       }) // Shorter syntax: {name, weight}
//       if (parsedJson.results.length === pokemonList.length) {
//         const heaviest = pokemonList.reduce((acc, poke) => {
//           if (poke.weight >= acc.weight) {
//             return poke
//           }
//           return acc
//         }, pokemonList[0])
//         console.log(
//           `Heaviest Pokemon is ${heaviest.name} at ${heaviest.weight} pounds`
//         )
//       }
//     })
//   })
// })


// // const request = require('request')
// // request('https://pokeapi.co/api/v2/pokemon/', (err, res, data) => {
// //     const pokemon = JSON.parse(data)
// //     const pokeWeights = []
// //     pokemon.results.forEach(e => {
// //         const name = e.name
// //         request(e.url, (err, res2, data2) => {
// //             const moreInfo = JSON.parse(data2)
// //             const weight = moreInfo.weight
// //             pokeWeights.push({name: name, weight: weight})
// //         })
// //             if (pokemon.results.length === pokeWeights.length){
// //                 const heaviest = pokeWeights.reduce((acc, poke) => {
// //                     if(poke.weight >= acc.weight){
// //                         return poke
// //                     }
// //                     return acc
// //                 }, pokeWeights[0])
// //                 console.log(
// //                     `Heaviest Pokemon is ${heaviest.name} at ${heaviest.weight} pounds`
// //                 )
// //             }
// //     })
// // })

//Exercise 6
// const request = require('request')
// request('https://pokeapi.co/api/v2/pokemon/?limit=100', (err, res, data) => {
//     const parsedPokemon = JSON.parse(data)
//     const imgName = []
//     parsedPokemon.results.forEach(pokemon => {
//         const pName = pokemon.name
//         request(pokemon.url, (pErr, pRes, pData) => {
//             const pokeData = JSON.parse(pData)
//             const pImage = pokeData.sprites.front_default
//             imgName.push({name: pName, image: pImage})
//             if(parsedPokemon.results.length === imgName.length){
//                 const pokemonContent = imgName.reduce((acc, e) => {
//                     return `${acc}<div><p>${e.name}</p><img src="${e.image}"/></div>`
//                 }, "")
//                 fs.writeFile('./Lesson 3 - Objects/pokemon.html', pokemonContent, () => {})
//             }
//         })
//     })
// })

//FETCH

// const fetch = require('node-fetch')

// const allData = []
// const resultOfDataPromise = fetch('https://a.com').then( (r) => {
//     // json is a function that turns the response string into a JavaScript data type
//   return r.json()
// }).then( (aData) => {
//   allData.push(aData)
//   return fetch('https://b.com')
// })
// .then(bData => {
//     return bData.json()
//   })
// .then( (bData)=> {
//     allData.push(bData)
//     return fetch('https://c.com')
// })
// .then(cData => {
//     return cData.json()
//   })
// .then( (cData)=> {
//     allData.push(cData)
//     return fetch('https://d.com')
// })
// .then(dData => {
//     return dData.json()
//   })
// .then( (dData)=> {
//     allData.push(dData)
//     return fetch('https://e.com')
// })
// .then(eData => {
//     return eData.json()
//   })
// .then( (eData)=> {
//     allData.push(eData)
//     return calculateREsult(allData)
// })

//PROMISES.ALL
//keep thinking about fetch and promises will make more sense
//Exercise 1
// import fetch from "node-fetch"
// import * as fs from 'fs'
// const d = fetch('https://www.c0d3.com/api/lessons').then(res => {
//     return res.json()
// }).then(data => {
//     const titles = data.reduce((acc, e) => {
//         return `${acc}<h1>${e.title}</h1>`
//     }, "")
//     fs.writeFile('./Lesson 3 - Objects/lessons.html', titles, () => {})
// })

//Exercise 2
// import fetch from 'node-fetch'
// import * as fs from 'fs'
// fetch('https://pokeapi.co/api/v2/pokemon/').then(res => {
//     return res.json()
// }).then(d => {
//     const names = d.results.reduce((acc, pokemon) => {
//         return `${acc}<h1>${pokemon.name}</h1>`
//     }, '')
//     fs.writeFile('./Lesson 3 - Objects/names2.html', names, () => {})
// })

//Exercise 3
// import fetch from 'node-fetch'
// fetch('https://api.openaq.org/v1/countries').then(res =>{
//     return res.json()
// }).then(data => {
//     const mostCities = data.results.reduce((acc, e) => {
//         if(e.cities > acc.cities) return e
//         return acc 
//     }, data.results[0])
//     console.log(mostCities.name)
// })

//Exercise 4
import fetch from 'node-fetch'
fetch('https://pokeapi.co/api/v2/pokemon/').then(res => {
    return res.json()
}).then(pokeData => {
    const arrayPromise = pokeData.results.map(pokemon => {
        return fetch(pokemon.url).then(newR => {
            return newR.json()
        })
    })
    return Promise.all(arrayPromise)
}).then(dataList => {
    dataList.forEach(e => {
        console.log(e.weight)
    })
})

// Promise.all(arrayPromise).then(results => {
//     results.forEach(e => {
//         console.log(e)
//     })
// })