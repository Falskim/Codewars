// Moving Zeros To The End
// https://www.codewars.com/kata/52597aa56021e91c93000cb0
// R.I.P Code lol
var moveZeros = function (arr) {
  for (let x=0 ; x<arr.length; x++){
    for(let y=0; y<arr.length-1; y++){
      if(arr[y] === 0){
        arr[y] = arr[y+1];
        arr[y+1] = 0;
      }
    }
  }
  return arr;
}