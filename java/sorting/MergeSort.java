/**
 * Merge sort
 * 
 * Implemented by Divide and Conquer
 * Divide: divide array into 2 arrays recursively until array length <= 1
 * Conquer: compare left and right in merging process
 * Combine: merge after comparing
 * 
 * Best case: O(n * log(n))
 * Worst case: O(n * log(n))
 * Average case: O(n * log(n))
 * 
 */
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class MergeSort {

  public static void main(String[] args) {
    int[] arr = new int[] {
      1, 19900, 3, 444, 333, 92, 98, 99, 1031, 3, 5, 77, 54
    };
    
    int[] result = mergeSort(arr);
    System.out.println(Arrays.toString(result));
  };

  private static int[] mergeSort(int[] arr) {

    int length = arr.length;
    if (length <= 1) {
      return arr;
    }
    int middle = length/2;

    // divide
    int[] left = getSubArray(arr, 0, middle);
    int[] right = getSubArray(arr, middle, length);

    // conquer
    int[] sortedLeft = mergeSort(left);
    int[] sortedRight = mergeSort(right);

    return mergeResult(sortedLeft, sortedRight);
  }

  private static int[] mergeResult(int[] left, int[] right) {
    int[] result = new int[left.length + right.length];

    int leftIndex = 0;
    int rightIndex = 0;
    int resultIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result[resultIndex++] = left[leftIndex++];
      } else {
        result[resultIndex++] = right[rightIndex++];
      }
    }

    if (leftIndex <= left.length) {
      for (int i = leftIndex; i < left.length; i++) {
        result[resultIndex++] = left[i];
      }
    }

    if (rightIndex <= right.length) {
      for (int i = rightIndex; i < right.length; i++) {
        result[resultIndex++] = right[i];
      }
    }

    return result;
  }

  public static int[] getSubArray(int[] originalArray, int fromIndex, int toIndex) {
    int len = toIndex - fromIndex;
    int[] subArray = new int[len];
    int index = 0;
    for (int i = fromIndex; i < toIndex; i++) {
      subArray[index] = originalArray[i];
      index++;
    }
    return subArray;
  }
}