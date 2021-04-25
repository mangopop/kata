// count the unique values in a sorted array
function countUniqueValues(arr) {
  var count = []
  for (const arrValue of arr) {
    if (count.indexOf(arrValue) >= 0) {
      // console.log(arrValue, count[arrValue], count.indexOf(arrValue), count)
      count[arrValue]++
    } else {
      count[arrValue] = 1
    }
    // console.log(count[arrValue])
  }
  // doesn't work for minus numbers
  // [
  //   0 => 0,
  //   1 => 2,
  //   2 => 1
  //   3 => 1
  //   4 => 1
  //   9 => 1
  // ]

  let result = 0;

  // console.log(count)

  for (const countValue of count) {
    if (countValue > 0) {
      result++
    }
  }

  return result

}

module.exports = countUniqueValues;