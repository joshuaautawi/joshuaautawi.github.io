/**
 * O(n)
 * Worst case scan everyting in arr
 * @param {string[] | number[]} arr
 * @param {string | number}searchValue
 * @return {boolean}
 */
function linearSearch(arr, searchValue) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] == searchValue) {
      return true;
    }
  }
  return false;
}

/**
 * O(log n)
 * This algorithm is used for sorted array
 * basically it keep halving the array
 * and compare the value and current index is lower or higher
 * @param {number[]} arr
 * @param {number} searchValue
 * @return {boolean}
 */
function binarySearch(arr, searchValue) {
  let len = arr.length;
  let firstCursor = 0;
  let endCursor = arr.length;
  let index = Math.floor((endCursor - firstCursor) / 2);
  // keep divide the len by 2
  for (let i = 0; i < len; len = Math.floor(len / 2)) {
    if (searchValue == arr[index]) {
      return true;
    } else if (searchValue < arr[index]) {
      // change the lastCursor to mid
      endCursor = index;
      // substract half from begin - mid / 2
      index -= Math.ceil((endCursor - firstCursor) / 2);
    } else {
      // change the firstCursor to mid
      firstCursor = index;
      // add half from begin - mid / 2
      index += Math.ceil((endCursor - firstCursor) / 2);
    }
  }
  return false;
}
