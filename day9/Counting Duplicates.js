// Counting Duplicates
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
function duplicateCount(text) {
	for (char of new Set(text)) {
		text = text.toLowerCase().replace(char, "");
	}
	return new Set(text).size;
}
