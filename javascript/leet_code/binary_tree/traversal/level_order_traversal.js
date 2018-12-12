/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  var answer = [];
  
  var queue = [root];
  while(queue.length) {
      var eachLevelResult = [];
      var length = queue.length;
      
      for (var i = 0; i < length; i++) {
          var currentNode = queue.pop();
          if (!currentNode) {
              continue;
          }
          eachLevelResult.push(currentNode.val);

          if (currentNode.left) {
              queue.splice(0, 0, currentNode.left);
          }
          if (currentNode.right) {
              queue.splice(0, 0, currentNode.right);
          }
      }
      if (eachLevelResult && eachLevelResult.length) {
          answer.push(eachLevelResult);
      }
  }
  
  return answer;
};