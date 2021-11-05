/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // create our new linked list 
      const outputList = {val: 0, next: null};
      let current = outputList;
      
      // l1 and l2 should exist 
      while(l1 && l2) {
        if (l1.val < l2.val) {
          current.next = l1;
          l1 = l1.next;
        } else {
          current.next = l2;
          l2 = l2.next;
        }
        //And current node switch to next after conditions
        current = current.next
      }

      // chose longest one and add to the end
      current.next = l1 || l2;

      return outputList.next;
};