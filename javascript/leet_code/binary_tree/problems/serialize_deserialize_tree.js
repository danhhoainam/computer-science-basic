/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  var results = [];
  serializer(root, results);
  return results.join(',');
};

var serializer = function(node, arr) {
  if (!node) {
    arr.push('null');
    return;
  }
  
  arr.push(node.val);
  serializer(node.left, arr);
  serializer(node.right, arr);
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  var arr = data.split(',').map(function(num) {
    return num && num !== 'null' ? parseInt(num, 10) : null;
  });
  console.log(arr);
  return deserializer(arr);
};

var deserializer = function(arr) {
  if (!arr.length) return null;
  var value = arr.shift();
  if (value === null) return null;
  
  var node = new TreeNode(value);
  node.left = deserializer(arr);
  node.right = deserializer(arr);
  return node;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */