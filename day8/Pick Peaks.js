// Pick Peaks
// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7
function pickPeaks(arr) {
	let obj = {
		pos: [],
		peaks: []
	};
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > arr[i - 1]) {
			for (let j = i + 1; j < arr.length; j++) {
				if (arr[i] > arr[j]) {
					obj.pos.push(i), obj.peaks.push(arr[i]);
					break;
				} else if (arr[i] < arr[j]) {
					break;
				}
			}
		}
	}
	console.log(obj);
	return obj;
}
