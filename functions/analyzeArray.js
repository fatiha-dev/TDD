function analyzeArray(arr) {
  // Get the length of the array
  const arrayLength = arr.length;

  if( arrayLength != 0) {
    // Find the minimum value in the array
    const minValue = getMin(arr);
  
    // Find the maximum value in the array
    const maxValue = getMax(arr);
  
    // Calculate the average value of the array
    const averageValue = getAverage(arr);
    // Create an object with the results
    return {
      minValue: minValue,
      maxValue: maxValue,
      averageValue: averageValue,
      arrayLength: arrayLength,
    };
  } else {
    return null
  }
  }
function getMin(arr) {
  return Math.min(...arr);
}

function getMax(arr) {
  return Math.max(...arr);
}

function getAverage(arr) {
  const sum = arr.reduce((acc, curr)=> acc + curr,0);
  return sum / arr.length;
}
  const arr = [2,7,3,0]
  console.log(getAverage(arr));
  module.exports = analyzeArray;