// Tongues
// https://www.codewars.com/kata/52763db7cffbc6fe8c0007f8
function tongues(code) {
    let vowel = ['a', 'i', 'y', 'e', 'o', 'u']
    let consonant = [
    'b', 'k', 'x', 'z', 'n', 'h', 'd', 
    'c', 'w', 'g', 'p', 'v', 'j', 'q', 
    't', 's', 'r', 'l', 'm', 'f']
    return code.split('').map(x=>{
        return vowel.indexOf(x.toLowerCase()) !== -1 ? unscramble(x, vowel, 3) :
        consonant.indexOf(x.toLowerCase()) !== -1 ? unscramble(x, consonant, 10) : x;
    }).join('');
}

function unscramble(char, arr, advance) {
    let pos = arr.indexOf(char.toLowerCase());
    let fixed = pos+advance < arr.length ? arr[pos+advance] : arr[pos + advance - arr.length]
    return char.charCodeAt(0) <= 91 ? fixed.toUpperCase() : fixed;
}