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
var preorderTraversal1 = function(root) {
  var result = [];
  
  var traverse = function(node) {
      if (!node) return;
      result.push(node.val);
      
      if (node.left) {
          traverse(node.left);
      }

      if (node.right) {
          traverse(node.right);
      }
  }
  
  traverse(root);
  
  return result;
};


//==============================================
var preorderTraversal2 = function(root) {
  var result = [];
  traverse(root, result);
  return result;
};

var traverse = function(node, result) {
  if (!node || !result) return;
  result.push(node.val);
      
  if (node.left) {
      traverse(node.left, result);
  }

  if (node.right) {
      traverse(node.right, result);
  }
}

//==============================================
var preorderTraversal3 = function(root) {
  var visited = [];

  var toVisit = [];
  toVisit.push(root);
  
  while (toVisit.length) {
    var current = toVisit.pop();
    if (current) {
      visited.push(current.val);
      toVisit.push(current.right);
      toVisit.push(current.left);
    }
  }
  
  return visited;
};
