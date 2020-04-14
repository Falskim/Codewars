// RGB To Hex Conversion
// https://www.codewars.com/kata/513e08acc600c94f01000001
function rgb(r, g, b) {
	return toHex(validate(r)) + toHex(validate(g)) + toHex(validate(b));
}

function validate(value) {
	return value < 0 ? 0 : value > 255 ? 255 : value;
}

function toHex(value) {
	return (value < 16 ? "0" : "") + value.toString(16).toUpperCase();
}
