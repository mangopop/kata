// Write a function given two integers, find out if have same freq
function sameFrequency(a, b) {
  if (a === undefined || b === undefined) {
    return false
  }
  let collectionA = {}
  let collectionB = {}
  let numberListA = String(a).split('')
  let numberListB = String(b).split('')

  for (const val of numberListA) {
    collectionA[val] = (collectionA[val] || 0) + 1
  }

  for (const val of numberListB) {
    collectionB[val] = (collectionB[val] || 0) + 1
  }

  for (const key in collectionA) {
    if (Object.hasOwnProperty.call(collectionA, key)) {
      const element = collectionA[key];
      if (collectionA[key] !== collectionB[key]) {
        return false
      }
    }
  }

  return true
}

module.exports = sameFrequency