import {expect, test} from 'bun:test';

test('28. Find the Index of the First Occurence in a String', () => {
	expect(strStr('sadbutsad', 'sad')).toEqual(0);
	expect(strStr('leetcode', 'leeto')).toEqual(-1);
});

function strStr(haystack: string, needle: string): number {
	return haystack.indexOf(needle);
}
