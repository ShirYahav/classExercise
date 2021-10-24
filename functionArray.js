//exercise 1
const squareArray = [
    {width: 10,height : 10},
    {width: 20,height : 10},
    {width: 30,height : 10}
]

function squareObjWithSize(obj) {
    return{
        width: obj.width,
        height: obj.height,
        size: + calSize(obj)
    }
}

function calSize(obj){
    return obj.width * obj.height
}

const newSquareArray = squareArray.map(squareObjWithSize)
console.log(newSquareArray)

//exercise 2
const squareArray2 = [
    {width: 10,height : 10},
    {width: 20,height : 10},
    {width: 30,height : 10}
]

const results = squareArray2.map(calSize)
console.log(results)

//exercise 3
let numbers = [1,4,56,74,58,93,24,57,20,3,102]

let num = 100

function allNumsGreaterThan(item){
   return item > num
}

const newArrOfNumbers = numbers.filter(allNumsGreaterThan)
console.log(newArrOfNumbers)

//exercise 4
function squaresGreaterthan(obj){
    return obj.size > num
}

const squaresGreaterthanArr = newSquareArray.filter(squaresGreaterthan)
console.log(squaresGreaterthanArr)

//exercise 5
let equalToSize = 200

const wantedSquare = newSquareArray.find(function(obj){
    return obj.size === equalToSize
})
console.log(wantedSquare) //why it returns width 10 instead of width 30?

//exercise 6 
let size = 200
const squareArray3 = [
    {width: 20,height : 10, size:200},
    {width: 20,height : 10, size:200},
    {width: 20,height : 10, size:200}
]

const isSame3 = squareArray3.every(function(obj){
    return obj.size === size
})
console.log(isSame3)

const squareArray4 = [
    {width: 30,height : 10, size:300},
    {width: 10,height : 10, size:100},
    {width: 20,height : 10, size:200}
]

const isSame4 = squareArray4.every(function(obj){
    return obj.size === size
})
console.log(isSame4)

//exercise 7
const sortedArr = squareArray4.sort(function(a, b){
    return a.size - b.size
})
console.log(sortedArr)

//exercise 8 
const arrayOfNumbers = [23, 45, 23, 56, 67, 89, 23, 10];
let searchV = 23
const searchVIndex = arrayOfNumbers.indexOf(searchV);
console.log(searchVIndex)


