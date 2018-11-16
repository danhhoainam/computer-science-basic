/**
 * Insertion sort is a sorting algorithm that builds a final sorted array 
 * (sometimes called a list) one element at a time. 
 * While sorting is a simple concept, 
 * it is a basic principle used in complex computer programs such as
 * file search, data compression, and path finding. 
 * Running time is an important thing to consider when selecting a sorting algorithm 
 * since efficiency is often thought of in terms of speed. 
 * Insertion sort has an average and worst-case running time of O(n^2), 
 * so in most cases, a faster algorithm is more desirable.
 * 
 * The reason to use: use for small size problem; 
 * maintain sorted array; or for the stable sorting;
 * 
 * example: dual thread problem:
 * 1 thread for reading data to FIFO queue,
 * 1 thread for reading data from FIFO queue, 
 * and inserting data to sorted array
 * 
 * Insertion sort is better than Quick sort on short lists.
 * 
 * best case: O(n)
 * worst case: O(n^2)
 * average cases: O(n^2)
 */
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class InsertionSort {

  private static final Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    int n = scanner.nextInt();
    scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

    int[] a = new int[n];

    String[] aItems = scanner.nextLine().split(" ");
    scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

    for (int i = 0; i < n; i++) {
      int aItem = Integer.parseInt(aItems[i]);
      a[i] = aItem;
    }

    sort(a);
    System.out.println(Arrays.toString(a));

    scanner.close();
  }

  static void sortNumberArray(int[] a) {
    int length = a.length;
    for (int index = 0; index < length; index++) {
      int prevIndex = index - 1;
      int currentValue = a[index];
      while (prevIndex >= 0 && a[prevIndex] > currentValue) {
        a[prevIndex + 1] = a[prevIndex];
        prevIndex--;
      }
      a[prevIndex + 1] = currentValue;
    }
  }
}