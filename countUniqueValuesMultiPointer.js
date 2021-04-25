// count the unique values in a sorted array
function countUniqueValuesMultiPointer(arr) {
  // create two pointers
  // if arr has length, counter is 1
  // have second move ahead until it find something different than first pointer
  // if so set first to second
  // increment counter
  // have second move ahead until it find something different than first pointer
  // if second counter matches arr length return counter
  //  i
  // [1,1,3,4,9]
  //    j
  // can remove counter by overwriting array with count.
  var count = 0
  var i = 0
  var j = 1
  if (arr.length > 0) {
    for (const arrValue of arr) {
      if (arr[i] != arr[j]) {
        i = j
        count++
      }
      j++ // for loop would allow j to increment automatically
    }

    return count
  }

  return 0
}

module.exports = countUniqueValuesMultiPointer;