import {expect, test} from 'bun:test';

test('20. Valid Parentheses', () => {
	expect(isValid('([{}])')).toEqual(true);
	expect(isValid('()')).toEqual(true);
	expect(isValid('()[]{}')).toEqual(true);
	expect(isValid('(]')).toEqual(false);
	expect(isValid('(')).toEqual(false);
	expect(isValid('(){}}{')).toEqual(false);
});

function isValid(s: string): boolean {
	const queue = [];

	const openBracket = ['(', '[', '{'];
	const closeBracket = [')', ']', '}'];

	for (const c of s) {
		if (openBracket.includes(c)) {
			queue.push(c);
			continue;
		}

		const lastOpenedBracket = queue.pop();
		if (!lastOpenedBracket) {
			return false;
		}

		const matchingBracket = closeBracket[openBracket.indexOf(lastOpenedBracket)];
		if (c !== matchingBracket) {
			return false;
		}
	}

	return queue.length === 0;
}
