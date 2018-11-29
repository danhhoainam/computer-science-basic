/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) {
      return null;
  }
  
  // create hashmap of inorder
  var mapInorder = inorder.reduce(function(accu, curr, index) {
      accu[curr] = index;
      return accu;
  }, {});
  
  return buildSubTree(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1, mapInorder);
};

var buildSubTree = function(
  preorder, startPre, endPre,
  inorder, startIn, endIn,
  mapInorder
) {
  // base case
  if (startPre > endPre || startIn > endIn) {
      return null;
  }
      
  // create node and children
  var nodeValue = preorder[startPre];
  var node = new TreeNode(nodeValue);
  var inorderNodeIndex = mapInorder[nodeValue];
      
  var leftStartIn = startIn;
  var leftEndIn = inorderNodeIndex - 1;
  var leftStartPre = startPre + 1;
  var leftEndPre = leftStartPre + (leftEndIn - leftStartIn);
  
  var rightStartIn = inorderNodeIndex + 1;
  var rightEndIn = endIn;
  var rightStartPre = leftEndPre + 1;
  var rightEndPre = endPre;
      
  node.left = buildSubTree(preorder, leftStartPre, leftEndPre, inorder, leftStartIn, leftEndIn, mapInorder);
  node.right = buildSubTree(preorder, rightStartPre, rightEndPre, inorder, rightStartIn, rightEndIn, mapInorder);
  
  return node;
}