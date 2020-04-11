// Reversed String
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018
function solution(str){
  let a = '';
  for(x of str.split('').reverse().toString()){
     a += (x != ',' ? x : '');
  }
  return a;
}