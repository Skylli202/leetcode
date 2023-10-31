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
	dividend = Number(dividend.toFixed(0));
	divisor = Number(divisor.toFixed(0));

	const absDividend = Math.abs(dividend);
	const absDivisor = Math.abs(divisor);

	let resultIsNegative = false;
	if (dividend < 0) {
		resultIsNegative = !resultIsNegative;
	}

	if (divisor < 0) {
		resultIsNegative = !resultIsNegative;
	}

	if (absDividend === absDivisor) {
		return resultIsNegative ? -1 : 1;
	}

	let quotient = 0;
	let absDividendCopy = absDividend;

	if (absDivisor === 1) {
		quotient = absDividend;
		absDividendCopy -= absDividend;
	}

	while (absDividendCopy >= absDivisor) {
		quotient += 1;
		absDividendCopy -= absDivisor;
	}

	quotient = resultIsNegative ? -quotient : quotient;

	console.log(quotient);
	if (quotient > ((2 ** 31) - 1)) {
		return (2 ** 31) - 1;
	}

	if (quotient < (-(2 ** 31))) {
		return -(2 ** 31);
	}

	return quotient;
}
