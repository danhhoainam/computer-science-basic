/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 * Example 1:
 * Input: 123
 * Output: 321
 * 
 * Example 2:
 * Input: -123
 * Output: -321
 * 
 * Example 3:
 * Input: 120
 * Output: 21
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers 
 * within the 32-bit signed integer range: [−231,  231 − 1]. 
 * For the purpose of this problem, assume that your function returns 0 
 * when the reversed integer overflows.
 * 
 * My run time: 72ms
 * I beated: 93.23%
 * Time: Nov 17, 2018
 * 1032 / 1032 test cases passed.
 * 
 * Can I make it run faster with JS?
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var resultString = '0';
  var absoluteValue = Math.abs(x);
  while (absoluteValue !== 0) {
      resultString += (absoluteValue%10);
      absoluteValue = Math.floor(absoluteValue/10);
  }
  
  var extra = x < 0 ? -1 : 1;
  var result = extra * parseInt(resultString, 10);
  
  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
      return 0;
  }
  
  return result;
};