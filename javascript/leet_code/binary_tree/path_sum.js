/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * we have 2 end conditions: leaf node and sum of path equals to given sum
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 * 
 * 114 / 114 test cases passed.
 * Runtime: 64 ms
 * beat 100%
 */
var hasPathSum = function(root, sum) {
  if (!root) {
      return false;
  }
  if (isLeaf(root) && sum === root.val) {
      return true;
  }
  
  var sumLeft = hasPathSum(root.left, sum - root.val);
  var sumRight = hasPathSum(root.right, sum - root.val);
  
  return sumLeft || sumRight;
};

var isLeaf = function(node) {
  if (!node) return false;
  if (node.left || node.right) return false;
  return true;
}