// check if first array has same amount of correct results
// kata([1, 2, 3], [4, 2, 9]) = true
function sameIfSquared(a, b) {
  if (a.length !== b.length && a.length !== 0) {
    return false;
  }

  let counter = 0;
  for (var i = 0; i < a.length; i++) {
    if (Number.isInteger(a[i])) {
      // could of used index of instead of loop
      // calc the square and find that result a.indexOf(a[i] ** 2)
      // then this can immediately fail.
      for (var k = 0; k < b.length; k++) {
        if (b[k] === a[i] * a[i]) {
          counter++;
          b.splice(1, k);
          break;
        }
      };
    }
  };

  if (counter === a.length) {
    return true;
  }

  return false;
}

module.exports = sameIfSquared;