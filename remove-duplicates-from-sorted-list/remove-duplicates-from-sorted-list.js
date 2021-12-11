/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) {return null}

   let carryList = head;

   while(carryList !== null && carryList.next !== null ) {
     if (carryList.val === carryList.next.val) {
       carryList.next = carryList.next.next;
     } else {
       carryList = carryList.next
     }

   }


   return head; 
};
    
