var valueMap = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
  '': 0,
}
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var total = 0;
  var lastNumber = 1000;
  var len = s.length;
  
  for (var i = 0; i < len; i++) {
    var curNum = valueMap[s[i]];
    if (curNum > lastNumber) total -= (lastNumber*2);
    total += curNum;
    lastNumber = curNum;
  }
 
  return total;
};
