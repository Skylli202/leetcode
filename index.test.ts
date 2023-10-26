import { expect, test } from "bun:test";

console.log("Hello via Bun!");

test('9. Plindrome Number', () => {
  expect(isPalindrome(121)).toBeTrue()
  expect(isPalindrome(-121)).toBeFalse()
  expect(isPalindrome(10)).toBeFalse()
})

function isPalindrome(x: number): boolean {
  const s = x.toString();

  for (let i = 0; i < s.length; ++i) {
    if (s.charAt(i) !== s.charAt(s.length - 1 - i)) return false
  }

  return true
};
