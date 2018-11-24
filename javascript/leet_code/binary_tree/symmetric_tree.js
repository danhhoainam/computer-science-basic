/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Recursive solution
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) {
      return true;
  }
  
  var left = root.left;
  var right = root.right;
  
  return findSymmetric(left, right);
};

var findSymmetric = function(node1, node2) {
  if (!node1 && !node2) {
      return true;
  }
  
  if (!node1 || !node2) {
      return false;
  }
  
  if (node1.val !== node2.val) {
      return false;
  }
  
  var leftRight = findSymmetric(node1.left, node2.right);
  var rightLeft = findSymmetric(node1.right, node2.left);
  
  return leftRight && rightLeft;
}

/**
 * Iterative solution
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetricIterative = function(root) {
  if (!root) {
      return true;
  }
};