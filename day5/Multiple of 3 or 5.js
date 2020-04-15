// Multiples of 3 or 5
// https://www.codewars.com/kata/514b92a657cdc65150000006
function solution(number) {
	let result = 0;
	for (let i = 3; i < number; i++) {
		result += i % 3 == 0 || i % 5 == 0 ? i : 0;
	}
	return result;
}
