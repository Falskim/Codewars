// Find The Parity Outlier
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc
function findOutlier(integers){
  return Number(integers.filter(x=>x%2==0).length == 1 ? integers.filter(x=>x%2==0) : integers.filter(x=>Math.abs(x%2)==1))
}