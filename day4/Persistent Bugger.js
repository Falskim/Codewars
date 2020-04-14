// Persistent Bugger.
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
function persistence(num) {
  return divide(toArray(num));
}

function divide(num, loop = 0) {
  return toArray(num).length == 1 ? loop : divide(toArray(num.reduce((x,y)=>x*y)), ++loop);
}

function toArray(x) {
  return x.toString().split('');
}