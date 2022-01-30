function selectionSortRecursive(arr) {
  // BASE CASE
  if (arr.length === 0) {
    return []
  }

  const min = Math.min(...arr)
  const idx = arr.indexOf(min)
  // splice(start, deleteCount)
  arr.splice(idx, 1);

  // The unshift() method adds one or more elements to the beginning of an array 
  // and returns the new length of the array.
  const result = selectionSortRecursive(arr)
  result.unshift(min)
  return result;
}

if (require.main === module) {
  // add your own tests in here

  console.log("Expecting: [0, 23, 45, 100]")
  console.log("=>", selectionSortRecursive([100, 45, 0, 23]))

  console.log("");

  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
