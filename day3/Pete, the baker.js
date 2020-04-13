// Pete, the baker
// https://www.codewars.com/kata/525c65e51bf619685c000059
function cakes(recipe, available) {
  let cakes = Number.MAX_SAFE_INTEGER;
  for (x in recipe){
    let possible_cakes = Math.floor(available[x] / recipe[x]);
    if (possible_cakes > 0) {
      if (possible_cakes < cakes){
        cakes = possible_cakes;
      }
    } else {
      return 0;
    }
  }
  return cakes;
}