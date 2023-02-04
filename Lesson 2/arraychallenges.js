//Array Generator - PROBLEM 1
// const solution = (num, result = []) => {
//     if (result.length === num){
//         return result
//     }
//     result.push(result.length)
//     return solution(num, result)
// }

// console.log(solution(5))
// console.log(solution(3))

//Array Callback Generator - PROBLEM 2
// const solution = (f, result = [], n = 0) => {
//     if(!f(n)){
//         result.push(n)
//     } else {
//         return result
//     }
//     return solution(f, result, n + 1)
// }

// console.log(solution((e) => {
//     return e > 10
//   }))

// console.log(solution((e) => {
//     return true
//   }))

// console.log(solution((e) => {
//     return e % 7 === 0 && e !== 0
//   }))

//2D Array Generator - PROBLEM 3
// const solution = (n1, n2, result = []) => {
//     const fillFirst = (arr = []) => {
//         if(arr.length === n2 || n2 < 0){
//             return arr
//         }
//         arr.push(0)
//         return fillFirst(arr)
//     }
//     if(result.length === n1 || n1 < 0){
//         return result
//     }
//     result.push(fillFirst())
//     return solution(n1, n2, result)
// }

// console.log(solution(5,2))
// console.log(solution(3,3))

//Closure Iterator - PROBLEM 4
// const solution = (arr, f) =>{
//     let count = -1
//     return () => {
//         count += 1
//         return f(arr[count % arr.length])
//     }
// }

// resf = solution([5,2,1,3], (e) => {
//     return e+1
//   })

// console.log(resf())
// console.log(resf())
// console.log(resf())
// console.log(resf())
// console.log(resf())
// console.log(resf())

// resf = solution(["hello", "what", "a", "day"], (e) => {
//     if (e.length < 2) return ""
//     return e
//   })

// console.log(resf())
// console.log(resf())
// console.log(resf())
// console.log(resf())
// console.log(resf())
// console.log(resf())

//Delayed Function Calls - PROBLEM 5
//Not completely done
// const solution = (arr, num, n = 0) => {
//     if (n < arr.length){
//         setTimeout(()=> {
//             arr[n]()
//         }, num)
//         solution(arr, num, n + 1)
//     }
// }

// const func = () => {
//     console.log('hello')
//   }
// solution([func,func,func], 1000)

//Sequential delayed function calls
// const solution = (arr, num, n = 0) => {
//     if(arr.length === n){
//         return null
//     }
//     setTimeout(()=> {
//         arr[n]()
//         return solution(arr, num, n + 1)
//     }, num)
// }

// const func = () => {
//     console.log('hello')
//   }
// solution([func,func,func], 3000)

//cForEach - PROBLEM 7

// const solution = () => {
//     Array.prototype.cForEach = function (f, n = 0) {
//         if(n === this.length){
//             return
//         }
//         f(arr[n], n, this)
//         return this.cForEach(f, n + 1)
//     }

//     const arr = [5,7,8,9]
//     arr.cForEach((e, i, arr) => {
//         console.log(e, i, arr)
//     })
// }

// solution()

//cMap - PROBLEM 8
// const solution = () => {
//     Array.prototype.cMap = function (f, n = 0) {
//         if(n === 0){
//             orginal = [...this]
//         }
//         if(n === this.length){
//             return this
//         }
//         this[n] = f(orginal[n], n, orginal)
//         return this.cMap(f, n + 1)
//     }
//     return result = [5,8,7, 10].cMap( (e, i, arr) => {
//         console.log(e, i, arr)
//         return e + i
//       })
// }
// console.log(solution())

//cReduce - PROBLEM 9
// const solution = () => {
//     Array.prototype.cReduce = function (f, init, n = 0) {
//         if(n === this.length){
//             return init
//         }
//         init = f(init, this[n], n, this)
//         return this.cReduce(f, init, n + 1)
//     }
//     return result = [5,8,7].cReduce( (acc, e, i, arr) => {
//         console.log(acc, e, i, arr)
//         return acc + e + i
//       }, 'hi')
// }
// console.log(solution())

//cFilter - PROBLEM 10
// const solution = () => {
//     Array.prototype.cFilter = function (f, result = [],n = 0) {
//         if(n === this.length){
//             return result
//         }
//         if(f(this[n], n, this)){
//             result.push(this[n])
//         }
//         return this.cFilter(f, result, n + 1 )
//     }
//     return result = [5,8,7,6,9].cFilter( (e, i, arr) => {
//         console.log(e, i, arr)
//         return e % 2 === 0
//       })
// }

// console.log(solution())

//cFind - PROBLEM 11
// const solution = () => {
//     Array.prototype.cFind = function (f, n = 0) {
//         if(n === this.length){
//             return this[n]
//         }
//         if(f(this[n], n, this)){
//             return this[n]
//         } else {
//             return this.cFind(f, n + 1)
//         }
//     }
//     return result = [5,8,7].cFind( (e, i, arr) => {
//         console.log(e, i, arr)
//         return e % 2 === 0
//       })
// }
// console.log(solution())