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

function addTwoNumbers(l1: ListNode | undefined, l2: ListNode | undefined): ListNode | undefined {
	const resultHead = new ListNode();
	let tmp = resultHead;
	let i = 0;
	let carryOver = 0;
	while (l1?.val !== undefined || l2?.val !== undefined) {
		if (i !== 0) {
			tmp.next = new ListNode();
			tmp = tmp.next;
		}

		const l1Val = l1?.val ? l1.val : 0;
		const l2Val = l2?.val ? l2.val : 0;
		tmp.val = l1Val + l2Val + carryOver;
		carryOver = 0;

		while (tmp.val >= 10) {
			tmp.val -= 10;
			carryOver += 1;
		}

		console.log(i, l1Val, l2Val, carryOver, tmp.val);
		l1 = l1?.next;
		l2 = l2?.next;
		i++;
	}

	if (carryOver) {
		tmp.next = new ListNode(carryOver);
	}

	return resultHead;
}
