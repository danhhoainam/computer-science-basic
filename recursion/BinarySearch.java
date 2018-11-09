/**
 * binary search by recursion
 */
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class BinarySearch {

  public static void main(String[] args) {
    int[] arr = new int[]{1, 23, 22, 65, 99, 111, 36, 95, 5, 56};
    bubbleSort(arr);

    System.out.println(Arrays.toString(arr));
    Boolean search1 = binarySearch(arr, 22);
    Boolean search2 = binarySearch(arr, 111);
    Boolean search3 = binarySearch(arr, 666);

    System.out.println(search1 + "; " + search2 + "; " + search3);
  }

  public static Boolean binarySearch(int[] arr, int toFindNumber) {
    int len = arr.length;
    if (len == 0) {
      return Boolean.FALSE;
    }

    int middle = len / 2;
    if (arr[middle] == toFindNumber) {
      return Boolean.TRUE;
    }

    int fromIndex = 0;
    int toIndex = 0;
    if (arr[middle] > toFindNumber) {
      fromIndex = 0;
      toIndex = middle;
    } else {
      fromIndex = middle + 1;
      toIndex = len - 1;
    }
    int[] subArray = getSubArray(arr, fromIndex, toIndex);
    return binarySearch(subArray, toFindNumber);
  }

  public static int[] getSubArray(int[] originalArray, int fromIndex, int toIndex) {
    int len = toIndex - fromIndex + 1;
    int[] subArray = new int[len];
    int index = 0;
    for (int i = fromIndex; i <= toIndex; i++) {
      subArray[index] = originalArray[i];
      index++;
    }
    return subArray;
  }

  // bubble sort
  public static void bubbleSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
      for (int j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          int tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        }
      }
    }
  }
}