// Simple Pig Latin
// https://www.codewars.com/kata/520b9d2ad5c005041100000f
function pigIt(str){
    return str.split(' ').map(x=>x.replace(/(\w)(\w*)/g, '$2$1ay')).join(' ');
}