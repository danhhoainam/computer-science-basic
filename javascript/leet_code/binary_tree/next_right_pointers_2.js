/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  if (!root) return;
    
  var queue = [root];

  while(queue.length) {
    var queueSize = queue.length;
    var previousNode = null;

    for (var i = 0; i < queueSize; i++) {
      var currentNode = queue.pop();
      currentNode.next = previousNode;
      previousNode = currentNode;
      
      if (currentNode.right) {
        queue.splice(0, 0, currentNode.right);
      }
      if (currentNode.left) {
        queue.splice(0, 0, currentNode.left);
      }
    }
  }
};
