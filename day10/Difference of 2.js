// Difference of 2
// https://www.codewars.com/kata/5340298112fa30e786000688
function twosDifference(input) {
	let result = [];
	input = input.sort((a, b) => a - b);
	for (let i = 0; i < input.length - 1; i++) {
		if (input[i + 1] - input[i] === 2) result.push([input[i], input[i + 1]]);
		if (input[i + 2] - input[i] === 2) result.push([input[i], input[i + 2]]);
	}
	return result;
}
