// \
let array = [3, 7, 11, 2, 9];
let result = 0

for (let i = 0; i < array.length; i++) {
  result += array[i]
  }
console.log(result);

function evenOddChecker(num){
  if(num % 2 === 0){
    console.log("num is even");
  }else{
    console.log("num is odd");
  }
}

evenOddChecker(5)

const reverseWord = (n) =>{
  let splitValue = n.split('');

  let reverseArray = splitValue.reverse()

  let str = reverseArray.join('')

  console.log(str)
}

reverseWord("saqib")

function reverseCheck(val){
  let reverse = "";
  for(let i = val.length -1 ; i >= 0; i--){
   reverse += val[i]
  }
  if(val === reverse){
    console.log(val + "Is palindrome");
  }else{
    console.log((val + "is not palindrome"));
  }
console.log(reverse);
}
reverseCheck("madam")


const array2 = [1, 2, 3, 3, 4, 5, 5, 6];

  let duplicate = array2.filter((value , index , array)=>{
    return array.indexOf(value) === index
  })
console.log(duplicate);


const largeArray = [5, 10, 2, 8, 3];

let bigNum = largeArray[0] , smallNum = largeArray[0]

largeArray.forEach((val) =>{
  if (val > bigNum) {
    bigNum = val
  }else if(val < smallNum){
    smallNum = val
  }
})

console.log(bigNum + ":" + smallNum);


let fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple' , "grape"];

let fruitCount = {};
for (let fruit of fruits) {
  // console.log(fruit);
  if (fruitCount[fruit]) {
    fruitCount[fruit]++;
  } else {
    fruitCount[fruit] = 1;
  }
}

// Output the counts
console.log(fruitCount);


let fruitCounting = {}

fruits.forEach((item) => {
  if(fruitCounting[item]){

    fruitCounting[item]++
  }else{

    fruitCounting[item] = 1
  }
})

console.log("Fruit Counting :" , fruitCounting);


let sortArray = [5, 2, 9, 1, 7];

console.log(sortArray.sort());

function factorial(n){
  let result = 1;
  for (let i = 1; i <= n; i++) {
    // console.log("array i:" + i);
    result *= i
    // console.log(result);
    
  }
  return result
}

console.log(factorial(5));

const reverseSentense = (str) =>{
  let splitTense = str.split(" ");

  let reverseTense = splitTense.reverse()

  let result = reverseTense.join(" ")

  console.log(result);
}

reverseSentense("Hello world, how are you?")


const stringCheck = (str1 , str2) =>{
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()

  if(str1.length !== str2.length){
    return false;
  }

  let sortedStr1 = str1.split('').sort().join('');
  let sortedStr2 = str2.split('').sort().join('');
  console.log(sortedStr1 , sortedStr2);
  return sortedStr1 === sortedStr2
}

console.log(stringCheck("listen" , "silent"));
console.log(stringCheck("hello" , "world"));