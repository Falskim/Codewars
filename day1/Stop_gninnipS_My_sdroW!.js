// Stop gninnipS My sdroW
// https://www.codewars.com/kata/5264d2b162488dc400000001
function spinWords(str){
  let words = [];
  for (let x of str.split(' ')){
    words.push(x.length >= 5 ? x.split('').reverse().join('') : x);
  }
  return words.join(' ');
}