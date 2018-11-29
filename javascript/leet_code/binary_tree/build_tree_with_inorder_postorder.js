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
 * 1. find the last node in the postorder, this is the root
 * 2. find the root in the inorder to find left and right subtree of root
 * 3. recursive above process for the sub array
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (!inorder.length || !postorder.length) {
      return null;
  }
  
  // create hashmap for searching to be O(1) complexity time
  var mapInorder = inorder.reduce(function(mapData, ele, index) {
      mapData[ele] = index;
      return mapData;
  }, {});
  
  // build the tree
  return buildSubTree(inorder, postorder, 0, inorder.length - 1, 0, postorder.length - 1, mapInorder);
};

var buildSubTree = function(
   inorder, postorder,
   startInorder, endInorder,
   startPostorder, endPostorder,
   mapInorder) {

  // base case
  if (startInorder > endInorder || startPostorder > endPostorder) {
      return null;
  }
  
  var rootValue = postorder[endPostorder];
  var rootNode = new TreeNode(rootValue);
  var inorderIndex = mapInorder[rootValue];
       
  var leftStartIn = startInorder;
  var leftEndIn = inorderIndex - 1;
  var leftStartPost = startPostorder;
  var leftEndpost = leftStartPost + (leftEndIn - leftStartIn);
       
  var rightStartIn = inorderIndex + 1;
  var rightEndIn = endInorder;
  var rightStartPost = leftEndpost + 1;
  var rightEndpost = endPostorder - 1;
       
  rootNode.left = buildSubTree(inorder, postorder, leftStartIn, leftEndIn, leftStartPost, leftEndpost, mapInorder);
  rootNode.right = buildSubTree(inorder, postorder, rightStartIn, rightEndIn, rightStartPost, rightEndpost, mapInorder);
       
  return rootNode;
}