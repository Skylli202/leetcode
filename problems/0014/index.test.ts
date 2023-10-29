import {expect, test} from 'bun:test';

test('14. Longest Common Prefix', () => {
	expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl');
	expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('');
});

function longestCommonPrefix(strs: string[]): string {
	const minLength: number = strs.reduce((minLength, str) => str.length < minLength ? str.length : minLength, strs[0].length);

	let commonPrefix = '';
	for (let i = 0; i < minLength; ++i) {
		const set = new Set();

		for (const str of strs) {
			set.add(str.charAt(i));
		}

		if (set.size !== 1) {
			return commonPrefix;
		}

		commonPrefix += strs[0].charAt(i);
	}

	return commonPrefix;
}
