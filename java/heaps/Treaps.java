/**
 * You can construct a treap as follows:
 * - Begin with all the priority values randomly sorted in an array.
 * - Pick the highest priority node and put it at the root of the tree.
 * - From all the remaining elements, pick all the ones that have a key value smaller than the root. 
 *   From those, assign the one with the highest priority to the left child.
 * - Repeat on the right side but with all the higher-valued keys.
 * - Continue this process recursively until all the elements have been assigned nodes on the tree.
 * 
 * Here is the algorithm for deleting a node:
 * If the node is a leaf, delete it.
 * Otherwise, replace the node’s priority with - infinity
 * (or any number lower than any number you know to be in the tree), 
 * then do the appropriate rotations to bring it down to a leaf, and then delete it.
 */