import {expect, test} from 'bun:test';

test('219. contains duplicate', () => {
	expect(containsDuplicate([1, 2, 3, 1])).toBeTrue();
	expect(containsDuplicate([1, 2, 3, 4])).toBeFalse();
	expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTrue();
});

function containsDuplicate(nums: number[]): boolean {
	for (let i = 0; i < nums.length; ++i) {
		for (let j = i + 1; j < nums.length; ++j) {
			if (nums[i] === nums[j]) {
				return true;
			}
		}
	}

	return false;
}
