/**
 * Quicksort, just like mergesort, is a “divide-and-conquer” sorting algorithm 
 * that runs in O(N*log2(N)) time in the average case. 
 * In fact, when implemented well, quicksort in practice can be 2~3 times faster than mergesort. 
 * Although it has a worst case runtime of O(n^2), 
 * overall quicksort tends to outperform mergesort in the real world, 
 * making it an attractive choice for many programmers.
 * 
 * Divide and Conquer:
 * + Divide--Pick a pivot element (typically the last item in the array). 
 *   All numbers lower than this value go to the left and all elements higher to the right. 
 *   For quicksort, this step is commonly known as partitioning.
 * + Conquer--All elements to the left are fed recursively back into the algorithm, 
 *   as are elements to the right.
 * + Combine--No need to do anything at all. At this point the data should be sorted.
 * 
 * Optimal pivot point: median
 * Java Collections.sort()
 * QUICKSORT_THRESHOLD = 286;
 * INSERTION_SORT_THRESHOLD = 47;
 * 
 * best case: O(N*log2(N))
 * worst case: O(N^2) - sorted array
 */
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class QuickSort {

  public static void main(String[] args) {
    Integer[] arr = new Integer[] {
      1, 19900, 3, 444, 333, 92, 98, 99, 1031, 3, 5, 77, 54
    };
    
    Integer[] result = quickSort(arr);
    System.out.println(Arrays.toString(result));
  };

  private static Integer[] quickSort(Integer[] arr) {

    Integer length = arr.length;
    if (length <= 1) {
      return arr;
    }
    Integer pivot = getThreeMedianPivot(arr);

    List<Integer> listLeft = new ArrayList<>();
    List<Integer> listRight = new ArrayList<>();
    List<Integer> listPivot = new ArrayList<>();

    // divide
    for (int i = 0; i < length; i++) {
      if (arr[i] < pivot) {
        listLeft.add(arr[i]);
      } else if (arr[i] > pivot) {
        listRight.add(arr[i]);
      } else {
        listPivot.add(arr[i]);
      }
    }

    Integer[] left = quickSort(listLeft.toArray(new Integer[listLeft.size()]));
    Integer[] right = quickSort(listRight.toArray(new Integer[listRight.size()]));
    Integer[] pivots = listPivot.toArray(new Integer[listPivot.size()]);

    return combineResult(left, pivots, right);
  }

  public static Integer getThreeMedianPivot(Integer[] arr) {
    Integer length = arr.length;
    Integer middle = length/2;
    Integer[] threePivots = new Integer[]{arr[0], arr[length - 1], arr[middle]};
    bubbleSort(threePivots);
    return threePivots[1];
  }

  public static void bubbleSort(Integer[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
      for (int j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          Integer temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  }

  public static Integer[] combineResult(Integer[] left, Integer[] pivots, Integer[] right) {
    Integer[] result = new Integer[left.length + pivots.length + right.length];

    Integer resultIndex = 0;
    for (int i = 0; i < left.length; i++) {
      result[resultIndex++] = left[i];
    }
    for (int i = 0; i < pivots.length; i++) {
      result[resultIndex++] = pivots[i];
    }
    for (int i = 0; i < right.length; i++) {
      result[resultIndex++] = right[i];
    }
    return result;
  }
}