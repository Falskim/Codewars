// Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
function accum(s) {
  let result = s.toUpperCase()[0];
  for (let i=1; i<s.length ; i++){
    result += '-' + write(s[i], i);
  }
  return result;
}

function write(letter, qty) {
  let line = letter.toUpperCase();
  for(let i=0; i<qty; i++) {
    line += letter.toLowerCase();
  }
  return line;
}