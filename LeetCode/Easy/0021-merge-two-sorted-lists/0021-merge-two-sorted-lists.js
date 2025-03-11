/**
 * 연결 리스트의 노드를 정의합니다.
 * @param {number} val - 노드의 값
 * @param {ListNode} next - 다음 노드를 가리키는 포인터
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * 두 개의 정렬된 연결 리스트를 하나의 정렬된 리스트로 병합합니다.
 * @param {ListNode} list1 - 첫 번째 정렬된 연결 리스트의 헤드
 * @param {ListNode} list2 - 두 번째 정렬된 연결 리스트의 헤드
 * @return {ListNode} - 병합된 정렬 리스트의 헤드
 */
var mergeTwoLists = function(list1, list2) {
    // 더미 헤드 노드를 생성합니다 (결과 리스트를 쉽게 구축하기 위함)
    const dummyHead = new ListNode(-1);
    let current = dummyHead;
    
    // 두 리스트를 동시에 순회하며 작은 값을 가진 노드를 결과 리스트에 추가합니다
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    // 남은 노드들을 결과 리스트에 추가합니다
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }
    
    // 더미 헤드의 다음 노드부터 반환합니다
    return dummyHead.next;
};

// 테스트를 위한 헬퍼 함수: 배열에서 연결 리스트 생성
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    
    const head = new ListNode(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    
    return head;
}

// 테스트를 위한 헬퍼 함수: 연결 리스트를 배열로 변환
function linkedListToArray(head) {
    const result = [];
    let current = head;
    
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    
    return result;
}