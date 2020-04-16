// Count the smiley faces!
// https://www.codewars.com/kata/583203e6eb35d7980400002a
function countSmileys(arr) {
    return arr.filter(x=>x.match(/[:|;]{1}[-|~]?[\)|D]/)).length;
}