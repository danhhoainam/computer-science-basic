/**
 * Bubble Sort
 * 
 * Using purpose:
 * 1. small problem
 * 
 * best case: O(n)
 * worst case: O(n^2)
 * average case: O(n^2)
 */
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class BubbleSort {

  public static void main(String[] args) {
    int[] arr = new int[] {
      1, 19900, 3, 444, 333, 92, 98, 99, 1031, 3, 5, 77, 54
    };
    
    bubbleSort(arr);
    System.out.println(Arrays.toString(arr));
  };

  private static void bubbleSort(int[] arr) {

    int length = arr.length;
    for (int i = 0; i < length - 1; i++) {
      for (int j = i + 1; j < length; j++) {
        if (arr[i] > arr[j]) {
          int temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  }
}