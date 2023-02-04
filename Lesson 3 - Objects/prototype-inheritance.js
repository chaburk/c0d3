allFuns = {}


//EXERCISE 1
Object.prototype.forEach = function (f, i = 0, entries = Object.entries(this)) {
    if (i === entries.length) return
    f(entries[i][0],entries[i][1], i)
    return this.forEach(f, i + 1)
}
//How they solved it
//Don't know why they used this on the cb function
// Object.prototype.forEach = function (cb, i = 0, keys = Object.keys(this)) {
//     if (i === keys.length) return
//     cb(keys[i], this[keys[i]], i, this)
//     return this.forEach(cb, i + 1, keys)
//   }

// const info = {
//     ironman: 'arrogant',
//     spiderman: 'naive',
//     hulk: 'strong'
//   }
//   const result = info.forEach((key, value, i) => {
//     console.log(key, value, i)
//   })

//EXERCISE 2
//Solving a little different than them but correct nonetheless
Object.prototype.filter = function (f, i = 0, result = {}, entries = Object.entries(this)){
    if (i === entries.length) return result
    if (f(entries[i][0], entries[i][1])){
        result[entries[i][0]] = entries[i][1]
    }
    return this.filter(f, i+1, result, entries)
}

// Object.prototype.filter = function (
//     cb,
//     result = {},
//     i = 0,
//     keys = Object.keys(this)
//   ) {
//     if (i === keys.length) return result
//     const currentKey = keys[i]
//     const element = cb(currentKey, this[currentKey])
//     if (element == true) result[currentKey] = this[currentKey]
//     return this.filter(cb, result, i + 1, keys)
//   }



// const info = {
//     ironman: 'arrogant',
//     spiderman: 'naive',
//     hulk: 'strong'
//   }
//   const result = info.filter((key, value) => {
//     return key[0] === 'i' || value[0] === 'n'
//   })
// console.log(result)

//EXERCISE 3
Object.prototype.reduce = function (f, result = "", i = 0, keys = Object.keys(this)){
    if(i === keys.length) return result
    console.log(this[keys[i]])
    let next  = f(result, keys[i], this[keys[i]], i)
    return this.reduce(f, next, i + 1, keys)
}

// const info = {
//     ironman: 'arrogant',
//     spiderman: 'naive',
//     hulk: 'strong'
//   }
//   const result = info.reduce((acc, key, value, i) => {
//     return acc + `${key}-${i}-${value},`
//   }, '')
//   console.log(result) 

//EXERCISE 4
Array.prototype.getCharCount = function(result = {}, i = 0) {
    const itChar = (s, newOb = {}, i = 0) => {
        if(i === s.length) return
        if(result[s[i]]){
            result[s[i]] = result[s[i]] + 1
        } else{
            result[s[i]] = 1
        }
        itChar(s, newOb, i + 1)
    }
    if(i === this.length) return result
    itChar(this[i])
    return this.getCharCount(result, i + 1)
}

// const arr = ['Charmander', 'Charmeleon', 'Charizard'].getCharCount()

// console.log(arr)

//EXERCISE 5
//They have interesting solutions for this one but i think mine is more simple in terms of understand
Array.prototype.getMostCommon = function() {
    if(this.length === 0) return null
    const countThings = (result = {}, i = 0) => {
        if(i === this.length) return result
        result[this[i]] = result[this[i]] || 0
        result[this[i]] = result[this[i]] + 1
        return countThings(result, i + 1)
    }
    const most = countThings()
    return this.reduce((acc, e) => {
        if(most[e] > most[acc]){
            return e
        }
        return acc
    }, this[0])
}

// const arr = [9, 8, 7, 8, 7, 7, 7].getMostCommon()
// const another = ['Batman', 8, 7, 'Batman', 'Robin'].getMostCommon()
// console.log(arr)
// console.log(another)

//EXERCISE 6
//Was my idea last time but i took a break so was doing it differently
Array.prototype.removeDupes = function(){
    const map = this.reduce((acc, e) => {
        console.log(acc)
        acc[e] = (acc[e] || 0) + 1
        return acc
    }, {})

    const remove = (i = 0) => {
        if (i === this.length) {
            return
        }
        if (map[this[i]] === 1){
            return remove(i+1)
        }
        this.splice(i,1)
        return remove(i)
    }
    remove()
}

const a = [9, 8, 7, 8, 7, 7, 7]
a.removeDupes()
console.log(a)


//PROTOTYPE LEARNING
// Object.prototype.forEach = function (fun, i = 0, entries = Object.entries(this)) {
//     if (i === entries.length) return
//     fun(entries[i][1], entries[i][0])
//     return this.forEach(fun, i + 1)
// }

// Object.prototype.eat = function(value){ 
//     const num = this.data || 0
//     if (value < num) {
//         return
//     }
//     this.data = value
// }
// const a = {name: 'iron'}
// a.eat(5)
// console.log(a)
// a.eat(3)
// console.log(a)
// a.eat(30)
// console.log(a)