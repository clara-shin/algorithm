/**
 * @param {ListNode} list1 - 첫 번째 정렬된 연결 리스트의 헤드
 * @param {ListNode} list2 - 두 번째 정렬된 연결 리스트의 헤드
 * @return {ListNode} - 병합된 정렬 리스트의 헤드
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(-1); // 더미 헤드 노드 생성 (결과 리스트의 시작점)

  let current = dummy; // 현재 결과 리스트의 위치를 추적하는 포인터

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    // 결과 리스트의 포인터 이동
    current = current.next;
  }

  // 남아있는 노드들을 결과 리스트에 연결 (list1이나 list2 중 하나는 이미 null일 테니까)
  current.next = list1 !== null ? list1 : list2;

  // 더미 헤드 다음 노드가 실제 결과의 시작 노드가 됨
  return dummy.next;
};
