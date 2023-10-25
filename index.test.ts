import {expect, test} from 'bun:test';

console.log('Hello via Bun!');
test('1. Two Sum', () => {
	expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
	expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
	expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

function twoSum(nums: number[], target: number): number[] {
	for (let i = 0; i < nums.length; ++i) {
		for (let j = i + 1; j < nums.length; ++j) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}

	return [];
}
