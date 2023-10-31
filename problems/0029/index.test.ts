import {expect, test} from 'bun:test';

test('29. Divide Two Integers', () => {
	expect(divide(10, 3)).toEqual(3);
	expect(divide(10, 1)).toEqual(10);
	expect(divide(10, -1)).toEqual(-10);
	expect(divide(7, -3)).toEqual(-2);
	expect(divide(-2147483648, -1)).toEqual(2147483647);
	expect(divide(-2147483648, 1)).toEqual(-2147483648);
});

function divide(dividend: number, divisor: number): number {
	// Result of 2 ** 31
	const max32bSignedInteger = 2_147_483_648;

	dividend = Number(dividend.toFixed(0));
	divisor = Number(divisor.toFixed(0));

	const absDividend = Math.abs(dividend);
	const absDivisor = Math.abs(divisor);

	// Usage of a XOR
	const resultIsNegative = (dividend < 0) !== (divisor < 0);

	if (absDividend === absDivisor) {
		return resultIsNegative ? -1 : 1;
	}

	let quotient = 0;

	if (absDivisor === 1) {
		quotient = absDividend;
	} else {
		let absDividendCopy = absDividend;
		while (absDividendCopy >= absDivisor) {
			quotient += 1;
			absDividendCopy -= absDivisor;
		}
	}

	quotient = resultIsNegative ? -quotient : quotient;

	if (quotient > (max32bSignedInteger - 1)) {
		return max32bSignedInteger - 1;
	}

	if (quotient < (-max32bSignedInteger)) {
		return -max32bSignedInteger;
	}

	return quotient;
}
