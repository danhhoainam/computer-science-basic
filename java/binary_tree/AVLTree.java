/**
 * An AVL tree, named after its inventors, Adelson-Velskii and Landis, 
 * is a self-balancing BST that applies a tree rotation automatically. 
 * Because it is always balanced, it has much faster operations than most BST’s, 
 * and it was the first self-balancing tree!
 * 
 * After transcending a branch to insert a node, 
 * that branch is inspected to see where it can be balanced 
 * and a corresponding left or right rotation occurs. 
 * The following panes discuss the algorithm in depth.
 * 
 * Space: O(n)
 * Search: O(log2(n))
 * Traversal: *O(n)
 * Insert: O(log2(n))
 * Delete: O(log2(n))
 * 
 * AVL tree has better balance than Red Black tree
 */