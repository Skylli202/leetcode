import {expect, test} from 'bun:test';

console.log('Hello via Bun!');

test('168. Excel Sheet Column Title', () => {
	expect(convertToTitle(1)).toEqual('A');
	expect(convertToTitle(9)).toEqual('I');
	expect(convertToTitle(26)).toEqual('Z');
	expect(convertToTitle(27)).toEqual('AA');
	expect(convertToTitle(28)).toEqual('AB');
	expect(convertToTitle(52)).toEqual('AZ');
	expect(convertToTitle(701)).toEqual('ZY');
	expect(convertToTitle(2147483647)).toEqual('FXSHRXW');
});

function convertToTitle(columnNumber: number): string {
	if ((columnNumber - 1) < 26) {
		return String.fromCharCode(65 + columnNumber - 1);
	}

	const quotient = Math.floor((columnNumber - 1) / 26);
	return convertToTitle(quotient) + convertToTitle((columnNumber - (26 * quotient)));
}
