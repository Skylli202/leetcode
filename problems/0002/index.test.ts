import {expect, test} from 'bun:test';

test('2. Add Two Numbers', () => {
	let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
	let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
	expect(addTwoNumbers(l1, l2)).toEqual(new ListNode(7, new ListNode(0, new ListNode(8))));

	l1 = new ListNode();
	l2 = new ListNode();
	expect(addTwoNumbers(l1, l2)).toEqual(new ListNode());

	l1 = new ListNode(
		9,
		new ListNode(
			9,
			new ListNode(
				9,
				new ListNode(
					9,
					new ListNode(
						9,
						new ListNode(
							9,
							new ListNode(9)),
					),
				),
			),
		),
	);
	l2 = new ListNode(9,
		new ListNode(9,
			new ListNode(9,
				new ListNode(9),
			),
		),
	);
	// Expect(addTwoNumbers(l1, l2)).toEqual(
	// 	new ListNode(8,
	// 		new ListNode(9,
	// 			new ListNode(9,
	// 				new ListNode(9,
	// 					new ListNode(0,
	// 						new ListNode(0,
	// 							new ListNode(0,
	// 								new ListNode(1),
	// 							),
	// 						),
	// 					),
	// 				),
	// 			),
	// 		),
	// 	),
	// );
});

class ListNode {
	val: number;
	next: ListNode | undefined;
	constructor(val?: number, next?: ListNode | undefined) {
		this.val = val ? val : 0;
		this.next = next ? next : undefined;
	}
}

function addTwoNumbers(
	l1: ListNode | undefined,
	l2: ListNode | undefined,
): ListNode | undefined {
	const resultHead = new ListNode();
	let result = resultHead;
	let carryOver = 0;
	while (l1?.val && l2?.val) {
		result.val = l1.val + l2.val + carryOver;
		while (result.val >= 10) {
			result.val -= 10;
			carryOver += 1;
		}

		l1 = l1.next;
		l2 = l2.next;
		result.next = new ListNode();
		result = result.next;
	}

	return resultHead;
}

