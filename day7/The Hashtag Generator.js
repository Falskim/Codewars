// The Hashtag Generator
// https://www.codewars.com/kata/52449b062fb80683ec000024
function generateHashtag (str) {
    if (str.trim().length === 0) return false;
    let result = '#' + str.split(' ').filter(x=>x.match(/\S+/g)).map(x=>x[0].toUpperCase() + x.substr(1)).join('')
    return result.length <= 140 ? result : false;
}