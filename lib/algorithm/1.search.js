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
  const len = arr.length;
  let firstCursor = 0;
  let lastCursor = len;
  for (let i = 0; i < len; i *= 2) {
    const midCursor = firstCursor + Math.floor((lastCursor - firstCursor) / 2);
    if (searchValue == arr[midCursor]) {
      return true;
    } else if (searchValue < arr[midCursor]) {
      lastCursor = midCursor;
    } else {
      firstCursor = midCursor + 1;
    }
  }
  return false;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 1));
