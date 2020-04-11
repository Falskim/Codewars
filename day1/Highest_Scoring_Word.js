// Highest Scoring Word
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
// R.I.P Code
function high(x){
  var max = {string : "", value : 0}
  for(var word of x.split(' ')){
    let i = 0;
    for(var letter of word.split('')){
      i += letter.charCodeAt(0) - 96;
    }
    if (i > max.value) {
      max.string = word;
      max.value = i;
    }
  }
  return max.string;
}