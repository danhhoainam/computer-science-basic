/**
 * Given an array of integers, return indices of the two numbers 
 * such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, 
 * and you may not use the same element twice.
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * My run time: 56ms
 * I beated: 86.16%
 * Time: Nov 17, 2018
 * 29 / 29 test cases passed.
 * 
 * Can I make it run faster with JS?
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  return hashmapSolution(nums, target);
};

/**
* time complexity: O(n^2)
* space complexity: O(1)
*/
var bruteForceSolution = function(nums, target) {
  for (var first = 0; first < nums.length - 1; first++) {
      var firstNumber = nums[first];
      
      for (var second = first + 1; second < nums.length; second++) {
          var secondNumber = nums[second];
          var total = firstNumber + secondNumber;
          if (total === target) {
              return [first, second];
          }
      }
  }
  return [];
}

/**
* time complexity: O(n)
* space complexity: O(n)
*/
var hashmapSolution = function(nums, target) {
  var mapNumbers = {};
  for (var i = 0; i < nums.length; i++) {
      var firstNumber = nums[i];
      var secondNumber = target - firstNumber;
      if (mapNumbers[secondNumber] !== undefined) {
          return [i, mapNumbers[secondNumber]];
      }
      mapNumbers[nums[i]] = i;
  }
}
