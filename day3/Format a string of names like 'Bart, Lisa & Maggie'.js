// Format a string of names like 'Bart, Lisa & Maggie'.
// https://www.codewars.com/kata/53368a47e38700bd8300030d
function list(names) {
    return names.map((x, i) => { return i == names.length - 1 ? x.name : i == names.length - 2 ? x.name + ' & ' : x.name + ', '; }).join('');
}