// More Zeros than Ones
// https://www.codewars.com/kata/5d41e16d8bad42002208fe1a
function moreZeros(s){
    let unique = Array.from(new Set(s));
    let ascii = unique.map(x=>toBinary(x.charCodeAt(0)));
    return ascii.map((x,i)=>{
        if(x.replace(/0+/g,'').length < x.replace(/1+/g, '').length){
            return unique[i];
    }
    }).filter(x=> x != undefined);
}

function toBinary(x) {
    let str = '';
    while (x > 0) {
        str = (x % 2) + str;
        x = Math.floor(x/2);
    }
    return str;
}