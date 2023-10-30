import {expect, test} from 'bun:test';

test('26. Remove Duplicates from Sorted Array', () => {
	expect(removeDuplicates([1, 1, 2])).toEqual(2);
	expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);

	expect(removeDuplicates([1, 1, 2])).toEqual(2);
	expect(removeDuplicatesOptimized([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);
});

function removeDuplicates(nums: number[]): number {
	const set = new Set();

	for (const num of nums) {
		set.add(num);
	}

	const noDuplicateArray = Array.from(set.values()) as unknown as number[];

	for (let i = 0; i < noDuplicateArray.length; ++i) {
		nums[i] = noDuplicateArray[i];
	}

	return set.size;
}

function removeDuplicatesOptimized(nums: number[]): number {
	const temp = [...new Set(nums)];
	nums.length = 0;
	nums.push(...temp);
	return nums.length;
}
