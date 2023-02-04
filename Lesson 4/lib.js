allFuns = {}

allFuns.tokenize = (str = '') => {
  const tokens = str.split(' ')
  return tokens.reduce((acc, e) => {
    const num = parseInt(e)
    if (e.length > 2 && !Number.isInteger(num)) {
      acc[e.toUpperCase()] = 1
    }
    return acc
  }, {})
}
// allFuns.tokenize = s => {
//     ob = {}
//     banana = s.split(" ")
//     banana.forEach(e => {
//         if(e.length < 3 || +e){
//             return
//         } else {
//             ob[e.toUpperCase()] = 1
//         }
//     })
//     return ob
// }

//Exercise 2
//They used map which is smarter because it returns an array
// allFuns.makeTrainingData = ob => {
//   const keys = Object.keys(ob)
//   const data = []
//   keys.forEach(e=> {
//     const tempOb = {}
//     tempOb["input"] = allFuns.tokenize(e)
//     tempOb["output"] = allFuns.tokenize(ob[e])
//     data.push(tempOb)
//   })
//   return data
// }
//redo with map and cleaner code
allFuns.makeTrainingData = obj => {
  return Object.keys(obj).map(e => {
    return {
      input: allFuns.tokenize(e),
      output: allFuns.tokenize(obj[e])
    }
  })
}


//Exercise 3
allFuns.pushAll = (obj, arr) => {
  return Object.keys(obj).forEach(e => {
    obj[e].push(arr)
  })
}

//Exercise 4
allFuns.getMostLikely = ob => {
  if(Object.keys(ob).length === 0) return null
  return Object.keys(ob).reduce((acc, e) => {
    if(ob[e] > ob[acc]) {
      return e
    }
    return acc
  }, Object.keys(ob)[0])
}

//Different way using an array acc
//Don't completely get it
// fn.getMostLikely = obj => {
//   return Object.entries(obj).reduce(
//     (ent, e) => {
//       if (e[1] > ent[1]) {
//         return e
//       }
//       return ent
//     },
//     [null, 0]
//   )[0]
// }

module.exports = allFuns


//Writing own library test
const app = {}
app.alert3 = () => {
  alert('hello')
  alert('hello')
  alert('hello')
}