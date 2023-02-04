//Notes
// const a = [9,8,7,5]
// a.name = 'Tony Stark'
// console.log(a)

//Exercises
//Exercise 1
Array.prototype.getNext = function() {
    this.currentIndex = (this.currentIndex || 0) + 1
    return this[(this.currentIndex - 1)% this.length] 
}

// const a = ["Edna", "Optimus", "Minion"]
// console.log(a.getNext())
// console.log(a.getNext())
// console.log(a.getNext())
// console.log(a.getNext())
// console.log(a.getNext())
// console.log(a.getNext())
// console.log(a.getNext())
// console.log(a.getNext())

//Exercise 2
Array.prototype.setMaxSize = function(max) {
    this.oldPush = this.push
    this.push = newEle => {
        if(this.length < max){
            return this.oldPush(newEle)
        }else {
            return this.length
        }
    }
}
// b = [1,2,3]
// console.log(b[3])
// const a = ['Edna', 'Optimus', 'Minion']
// a.setMaxSize(4)
// a.push('groot')
// console.log(a)
// console.log(a.push('hello'))
// console.log(a)
// console.log(a[4])

//EXERCISE 3
//Had to look but i had all the components just could not make it work.
//Still a lot of fun!
Array.prototype.tiredForEach = function(f, time) {
    if(this.isTired){
        return console.log(`Too Tired. Please wait ${time}ms`)
    }
    this.isTired = true
    setTimeout(()=> {
            this.isTired = false
        }, time)
    return this.forEach(f)
}

const a = ['chinese', 'african', 'korean']
const callback = (e, i) => {
  console.log(e + i)
}
a.tiredForEach(callback, 180)
a.tiredForEach(callback, 180)
