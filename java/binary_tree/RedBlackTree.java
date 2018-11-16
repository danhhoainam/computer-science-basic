/**
 * The red-black tree is similar to the binary search tree in that 
 * it is made up of nodes and each node has at most two children. 
 * However, there are new properties that are specific to the red-black tree.
 * 1. Each node is either red or black, this can be saved in memory as a single bit (e.g. 'red' = 1, 'black' = 0).
 * 2. The root of the tree is always black.
 * 3. All leaves are null and they are black.
 * 4. If a node is red, then its parent is black.
 * 5. Any path from a given node to any of its descendant leaves contains the same amount of black nodes. This is sometimes known as the black-depth.
 * 6. The height of the red-black tree is at most; this property will be proven later.
 * 
 * Space: O(n)
 * Search: O(log2(n))
 * Traversal: *O(n)
 * Insert: O(log2(n))
 * Delete: O(log2(n))
 * 
 * functions:
 * - create node: key, red, left, right, parent
 * - create tree
 * - search
 * - insert: nothing in the tree, find node, assign parents and siblings
 * - fixTree
 * - leftRotate, rightRotate
 */