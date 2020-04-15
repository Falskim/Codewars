// Create Phone Number
// https://www.codewars.com/kata/525f50e3b73515a6db000b83
function createPhoneNumber(numbers) {
	let regex = numbers.join("").match(/(\w{3})(\w{3})(\w{4})/);
	return "(" + regex[1] + ") " + regex[2] + "-" + regex[3];
}
