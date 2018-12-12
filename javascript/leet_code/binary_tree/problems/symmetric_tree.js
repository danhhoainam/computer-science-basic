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

  var queue = [root.left, root.right];
  while (queue.length) {
    var queueSize = queue.length;
    if (queueSize % 2 !== 0) {
      return false
    }
    var temp = [];
    
    for (var i = 0; i < queueSize/2; i++) {
      var leftNode = queue.shift();
      var rightNode = queue.pop();
      if (!leftNode && !rightNode) {
          continue;
      }
      if (!leftNode || !rightNode) {
          return false;
      }
      if (leftNode.val !== rightNode.val) {
          return false;
      }
      
      temp.splice(0, 0, leftNode.left);
      temp.splice(0, 0, leftNode.right);
      temp.push(rightNode.right);
      temp.push(rightNode.left);
    }
    queue = temp;
  }
      
  return true;
};