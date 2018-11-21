/**
 * In the heapsort procedure, we sort an arbitrary set of numbers as follows:
 * - Put all the numbers into an array in an arbitrary order.
 * - Organize the binary heap one element at a time by 
 *   repeatedly swapping larger children with smaller parents.
 * - Switch the root of the heap with the node furthest down
 * - Remove what was previously the root from the heap. 
 *   Store it as the smallest of the already sorted numbers.
 * - Repeat the previous three steps until the heap is empty. 
 *   The list of stored numbers will be sorted.
 * 
 * It is efficient to represent the binary heap tree using an array.
 * By convention, as was mentioned previously, 
 * the indices of the array translate to nodes on the tree as follows:
 * - Each parent, with index n, has children with indices 2n and 2n+1
 * - Parents always have higher priority than their children. (This is also called the max-heap property.)
 */