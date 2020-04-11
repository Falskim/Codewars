// Does my number look big in this?
// https://www.codewars.com/kata/5287e858c6b5a9678200083c
function narcissistic(value) {
  let pow = value.toString().split('').map(function(x){return Math.pow(parseInt(x), value.toString().length)});    
  let result = 0;
  for (x of pow) {
    result += parseInt(x);
  }
  return result == value;
}