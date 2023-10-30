import {expect, test} from 'bun:test';

test('21. Merge Two Sorted Lists', () => {
	expect(mergeTwoLists(
		new ListNode(1, new ListNode(2, new ListNode(4))),
		new ListNode(1, new ListNode(3, new ListNode(4))),
	)).toEqual(
		new ListNode(1,
			new ListNode(1,
				new ListNode(2,
					new ListNode(3,
						new ListNode(4,
							new ListNode(4),
						),
					),
				),
			),
		),
	);
	expect(mergeTwoLists(undefined, undefined)).toBeUndefined();
	expect(mergeTwoLists(undefined, new ListNode(0))).toEqual(new ListNode(0));
});

/**
 * Definition for singly-linked list.
 */
class ListNode {
	val: number;
	next: ListNode | undefined;

	constructor(val?: number, next?: ListNode | undefined) {
		this.val = val ?? 0;
		this.next = next;
	}
}

function mergeTwoLists(l1: ListNode | undefined, l2: ListNode | undefined): ListNode | undefined {
	if (!l1) {
		return l2;
	}

	if (!l2) {
		return l1;
	}

	if (l1.val < l2.val) {
		return new ListNode(l1.val, mergeTwoLists(l1.next, l2));
	}

	return new ListNode(l2.val, mergeTwoLists(l1, l2.next));
}
