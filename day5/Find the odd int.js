// Find the odd int
// https://www.codewars.com/kata/54da5a58ea159efa38000836
function findOdd(A) {
	for (x of new Set(A)) {
		if (A.filter(y => y == x).length % 2 != 0) {
			return x;
		}
	}
}
