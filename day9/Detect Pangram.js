// Detect Pangram
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048
function isPangram(string){
    return new Set(string.toLowerCase().split('').filter(x=>x.match(/[a-z]/g))).size == 26;
}