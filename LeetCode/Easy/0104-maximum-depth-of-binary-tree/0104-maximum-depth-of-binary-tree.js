/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // 기저 조건: 노드가 없으면(empty tree) 깊이는 0
    if (root === null) {
        return 0;
    }

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // 현재 노드의 최대 깊이: 왼쪽과 오른쪽 서브트리의 최대 깊이 중 큰 값에 1을 더한 값
    return Math.max(leftDepth, rightDepth) + 1;
};