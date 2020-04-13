// Which are in?
// https://www.codewars.com/kata/550554fd08b86f84fe000a58
function inArray(array1,array2){
  return array1.filter(function(x){
    for (y of array2) {
      if (y.match(x) != null)
        return x;
    };
  }).sort();
}