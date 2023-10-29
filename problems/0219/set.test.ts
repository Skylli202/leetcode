import {expect, test} from 'bun:test';

test('219. contains duplicate (solution with Set)', () => {
	expect(containsDuplicate([1, 2, 3, 1])).toBeTrue();
	expect(containsDuplicate([1, 2, 3, 4])).toBeFalse();
	expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTrue();
});

function containsDuplicate(nums: number[]): boolean {
	const s = new Set();

	for (const num of nums) {
		const preAddSize = s.size;
		s.add(num);
		if (preAddSize === s.size) {
			return true;
		}
	}

	return false;
}
