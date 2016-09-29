// find the longest words in a string
// hint: split & reduce

var str = "The quick brown fox jumped over the lazy dog";
var split= str.split(" ");
console.log(split);

for (var i = 0; i < split.length; i++) {
var sentence = split[i].length;
};
console.log(sentence);
var arrayOfLengths= new Array(sentence);
/*Math.max.apply(Math,arrayOfLengths)
console.log(arrayOfLengths);
*/






// find the largest number in array of array
// hint: map and reduce

var arrOfArr =
    [
      [4, 5, 1, 3],
      [13, 27, 18, 26],
      [32, 35, 37, 39],
      [1000, 1001, 857, 1]
    ];

// output ==> [ 5, 27, 39, 1001 ]
var oneArray= arrOfArr.map(function(index) {
  return Math.max.apply(Math,[]);
})
