import {expect, test} from 'bun:test';

test.each([
	[
		[1, 3, 5, 6], 5, 2,
	],
])('35. Search Insert Position', (nums: number[], target: number, expectedResult: number) => {
	expect(searchInsert(nums, target)).toEqual(expectedResult);
});

function searchInsert(nums: number[], target: number): number {
	let insertionIndex: number = nums.length;
	for (let i = 0; i < nums.length; ++i) {
		const num = nums[i];
		if (num === target) {
			return i;
		}

		if (num >= target && i < insertionIndex) {
			insertionIndex = i;
		}
	}

	return insertionIndex;
}
