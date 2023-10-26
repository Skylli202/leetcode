import {expect, test} from 'bun:test';

test('779. K-th Symbol in Grammar', () => {
	expect(kthGrammar(1, 1)).toBe(0);
	expect(kthGrammar(2, 1)).toBe(0);
	expect(kthGrammar(2, 2)).toBe(1);
	expect(kthGrammar(30, 434991989)).toBe(0);
});

function kthGrammar(n: number, k: number): number {
	if (n === 1) {
		return 0;
	}

	const halfLen = (2 ** (n - 1)) / 2;

	if (k <= halfLen) {
		return kthGrammar(n - 1, k);
	}

	return 1 - kthGrammar(n - 1, k - halfLen);
}

