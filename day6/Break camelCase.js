// Break camelCase
// https://www.codewars.com/kata/5208f99aee097e6552000148
function solution(string) {
    return string.split('').map(x=>x.charCodeAt(0) > 96 ? x : ' '+x).join('');
}