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
var inorderTraversal = function(root) {
  var result = [];

  var stack = [];
  var currentNode = root;
  
  while (stack.length || currentNode) {
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }
    
    currentNode = stack.pop();
    result.push(currentNode.val);
    
    currentNode = currentNode.right;
  }
  
  return result;
};

//==============================================
var inorderTraversal2 = function(root) {
  var result = [];
  traverse(root, result);
  return result;
};

var traverse = function(node, result) {
  if (!node || !result) return;
  if (node.left) {
    traverse(node.left, result);
  }

  result.push(node.val);

  if (node.right) {
    traverse(node.right, result);
  }
}

//==============================================