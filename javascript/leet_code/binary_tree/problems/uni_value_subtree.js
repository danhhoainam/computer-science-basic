/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countUnivalSubtrees = function(root) {
  if (!node) {
      return 0;
  }
  var count = 0;
  if (isUniNode(node, node.val)) {
      count++;
  }
  var countLeft = countUnivalSubtrees(node.left);
  var countRight = countUnivalSubtrees(node.right);
  return count + countLeft + countRight;
};

var isUniNode = function(node, val) {
  if (!node) return true;
  return node.val === val && isUniNode(node.left, val) && isUniNode(node.right, val);
}