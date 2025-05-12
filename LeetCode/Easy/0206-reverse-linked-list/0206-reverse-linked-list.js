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
// 반복문(Iterative) 방식
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next; // 다음 노드 저장
    curr.next = prev; // 현재 노드의 next를 prev로 변경
    prev = curr; // prev를 현재 노드로 이동
    curr = next; // curr를 다음 노드로 이동
  }
  return prev;
};
// 재귀 방식
// var reverseList = function(head) {
//   if (!head || !head.next) return head; // base case

//   const reversed = reverseList(head.next); // 나머지 리스트 역순
//   head.next.next = head; // 다음 노드의 next를 현재 노드로
//   head.next = null;      // 현재 노드의 next를 null로
//   return reversed;
// };