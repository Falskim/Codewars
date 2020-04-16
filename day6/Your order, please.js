// Your order, please
// https://www.codewars.com/kata/55c45be3b2079eccff00010f
function order(words){
    let arr = words.split(' ');
    return arr.map((x, i) => arr.filter(a => a.includes(i+1))).join(' ');
}