/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  var visited = [];

  var toVisit = [];
  toVisit.push(root);

  while (toVisit.length) {
      var current = toVisit.pop();
      if (current) {
          visited.splice(0, 0, current.val);
          toVisit.push(current.left);
          toVisit.push(current.right);
      }
  }

  return visited;
};

//=================================
var postorderTraversal2 = function(root) {
  var result = [];
  traverse(root, result);
  return result;
};

var traverse = function(node, result) {
  if (!node || !result) return;
  if (node.left) {
    traverse(node.left, result);
  }

  if (node.right) {
    traverse(node.right, result);
  }

  result.push(node.val);
}