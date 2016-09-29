/*var maxOfTwoNumbers = function(num1,num2) {
  if (num1 > num2) {
    return num1
  } else {
    return num2;
  }
};

var maxOfThreeNumbers = function(num1,num2,num3) {
  if (num1 > num2 && num3) {
  return num1;
} else if (num2 > num1 && num3){
  return num2;
} else if(num3 > num2 && num1) {
  return num3;
}
}

var string=('');
var isACharacterAVowel = function(string) {
for (var i = 0; i < string.length; i++) {
if (isACharacterAVowel[i] === 'a' || 'e' || 'i' || 'o' || 'u' ) {
return true  ;
} else {
  return false;
};
}
*/

//Q4
var numbers=[1,2,3,4]
var sumArray=numbers.reduce(function(a,b){
return a+b;
})
console.log(sumArray);

var numbers=[1,2,3,4]
var multiplyArray=numbers.reduce(function(a,b){
return a*b;
},1)
console.log(multiplyArray);

/*
var numArgs = function(){
  return arguments.length;
}

var revStrings =function(string) {
  return string.split('').reverse().join('');
}
*/

// Q7
var arr = ['first item', 'second item is longer than the third one',
           'third longish item'];
var lengths = arr.map(function(x) {
return x.length;
})
