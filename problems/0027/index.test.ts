import {expect, test} from 'bun:test';

test('27. Remove Element', () => {
	expect(removeElement([3, 2, 2, 3], 3)).toEqual(2);
	expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual(5);
});

function removeElement(nums: number[], val: number): number {
	const m = new Map<number, number>();

	for (const num of nums) {
		m.set(num, (m.get(num) ?? 0) + 1);
	}

	m.delete(val);

	nums.length = 0;

	m.forEach((v, k) => {
		const tmpArr = new Array(v).fill(k) as number[];
		nums.push(...tmpArr);
	});

	return nums.length;
}
