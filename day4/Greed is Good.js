// Greed is Good
// https://www.codewars.com/kata/5270d0d18625160ada0000e4
function score(dice) {
	let result = 0;
	dice.sort();
	for (let i = 1; i <= 6; i++) {
		if (dice.filter(x => x == i).length >= 3) {
			dice.splice(dice.indexOf(i), 3);
			result += (i == 1 ? 10 : i) * 100;
		}
		if (i == 1 || i == 5) {
			result += (i == 1 ? 100 : 50) * dice.filter(x => x == i).length;
		}
	}
	return result;
}
