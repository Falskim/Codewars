// Largest product in a series
// https://www.codewars.com/kata/529872bdd0f550a06b00026e
function greatestProduct(input) {
	let max = 0;
	let largest = 0;
	for (let i = 0; i < input.length - 4; i++) {
		let sorted = input
			.substr(i, 5)
			.split("")
			.sort()
			.join("");
		if (Number(sorted) > max) {
			let product = sorted.split("").reduce((x, y) => x * y);
			if (product > largest) {
				max = Number(sorted);
				largest = product;
			}
		}
	}
	return largest;
}
