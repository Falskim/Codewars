// Replace With Alphabet Position
// https://www.codewars.com/kata/546f922b54af40e1e90001da
function alphabetPosition(text) {
 return text.toLowerCase()
   .split('')
   .filter(x => !x.match(/[^a-z]+/g))
   .map(x => x.charCodeAt(0) - 96)
   .join(' ');
}