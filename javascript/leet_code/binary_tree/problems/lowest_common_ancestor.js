/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  var path_to_p = [];
  var path_to_q = [];
  
  var has_path_to_p = traverse(root, p, path_to_p);
  var has_path_to_q = traverse(root, q, path_to_q);
  if (!has_path_to_p || !has_path_to_q) {
    return null;
  }
  
  // find common ancestor
  return find_common(path_to_p, path_to_q);
};

var traverse = function(node, toFind, path) {
  if (!node || !toFind) {
    return false;
  }
  
  path.push(node);
  
  if (node.val === toFind.val) return true;
  if (traverse(node.left, toFind, path)
     || traverse(node.right, toFind, path)) {
    return true;
  }
  
  path.pop();
  
  return false;
}

var find_common = function(path_to_p, path_to_q) {
  var p_len = path_to_p.length;
  var q_len = path_to_q.length;
  var iteration = p_len > q_len ? q_len : p_len;
  
  var val = null;
  for (var i = 0; i < iteration; i++) {
    if (path_to_p[i].val === path_to_q[i].val) {
      val = path_to_p[i];
    } else {
      break;
    }
  }
  
  return val;
}

/**
 * Online solution
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (!left) return right // p and q are in the right subtree
  if (!right) return left; // p and q are in the left subtree
  return root; // p is in one side and q is in the other
};