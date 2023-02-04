//JSON.stringify
const arr = [-18, 'Charizard', true]
const strArr = JSON.stringify(arr) //Turns array into string
console.log(arr)
console.log(typeof(arr))
console.log(strArr)
console.log(typeof(strArr))


//JSON.parse
//Turns a string back into an array
const newArr = JSON.parse(strArr)
console.log(newArr)
console.log(typeof(newArr))

//Local Storage
//Look into more
//localStorage.setItem
//localStorage.getItem