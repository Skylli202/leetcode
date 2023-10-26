import {expect, test} from 'bun:test';

test('13. Roman to Integer', () => {
	expect(romanToInt('III')).toEqual(3);
	expect(romanToInt('LVIII')).toEqual(58);
	expect(romanToInt('MCMXCIV')).toEqual(1994);
	expect(romanToInt('MDCCCLXXXIV')).toEqual(1884);
});

function romanToInt(s: string): number {
	const romanAlphabet = new Map<string, number>();
	romanAlphabet.set('I', 1);
	romanAlphabet.set('V', 5);
	romanAlphabet.set('X', 10);
	romanAlphabet.set('L', 50);
	romanAlphabet.set('C', 100);
	romanAlphabet.set('D', 500);
	romanAlphabet.set('M', 1000);

	let sum = 0;
	for (let i = 0; i < s.length; ++i) {
		const c = s.charAt(i);
		// Console.log(sum, i)

		const smallerLetter = romanAlphabet.get(c);
		if (
			(c === 'I' && ['V', 'X'].includes(s.charAt(i + 1)))
      || (c === 'X' && ['L', 'C'].includes(s.charAt(i + 1)))
      || (c === 'C' && ['D', 'M'].includes(s.charAt(i + 1)))
		) {
			const biggerLetter = romanAlphabet.get(s.charAt(i + 1));
			if (biggerLetter && smallerLetter) {
				sum += biggerLetter - smallerLetter;
				i += 1;
			}
		} else if (smallerLetter) {
			sum += smallerLetter;
		}
	}

	return sum;
}
