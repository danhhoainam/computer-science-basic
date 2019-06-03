import java.util.ArrayList;
import java.util.List;

/**
 * Traverse through root nodes first
 */

 public class PreOrderTraversal {

    public static void main(String[] args) {

        List<Integer> results = new ArrayList<>();
        TreeNode root = buildTreeNode();

        traverse(root, results);

        System.out.println(results);
    }

    public static TreeNode buildTreeNode() {

        TreeNode root = new TreeNode(4);
        TreeNode rootLeft = new TreeNode(5);
        TreeNode rootRight = new TreeNode(6);

        root.setLeft(rootLeft);
        root.setRight(rootRight);

        return root;
    }

    public static void traverse(TreeNode root, List<Integer> results) {

        if (root == null || results == null) return;

        results.add(root.val);
        if (root.left != null) {
            traverse(root.left, results);
        }

        if (root.right != null) {
            traverse(root.right, results);
        }
    }
 }

 class TreeNode {

    int val;
    TreeNode left;
    TreeNode right;
    
    TreeNode(int x) {
        val = x;
        left = right = null;
    }

    public TreeNode getLeft() {
        return left;
    }

    public void setLeft(TreeNode left) {
        this.left = left;
    }

    public TreeNode getRight() {
        return right;
    }

    public void setRight(TreeNode right) {
        this.right = right;
    }
 }