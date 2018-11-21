Use heaps to make sure you can find what you need most, without imposing any expensive requirements.
- How to operate a priority queue
- Combine heaps and trees into treaps to balance your data
- Which node violates the max-heap property?
- How would you represent this tree as an array?

############################
Use Binary Heap to build structure for Priority Queue
What is Binary Heap?
- Binary heaps are binary trees where the value of each node must be greater than or equal to value of either of its children.

A binary heap is a binary tree with the following properties:
- The binary tree is complete, i.e. every node in every level is filled except for (possibly) the last one.
- The key of every node is greater than or equal to that of its children. This is also called a max-heap.

############################
Now that we have defined binary heaps, let’s explore how to insert a new element into the binary heap such that its max-heap characteristic is preserved, and that every element is greater than the elements of either of its children.

This is done in the following way:
- Insert a number as you would in a normal binary heap (based on the index of the node, not the priority).
- “Bubble” the number up to the top. I.e., if its priority is higher than its parents, switch its priority with its parent.
- Continue this process until its parent is higher than it is, or it is at the root.

We could, of course, build a heap by repeatedly “inserting” nodes as described above. This will take O(n * log2n) runtime, since we have  nodes, and for each one we need to traverse down the tree through up to log2n nodes.

It can be shown that constructing a binary heap in this way takes a runtime of O(n)