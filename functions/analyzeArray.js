function analyzeArray(arr) {
    // Find the minimum value in the array
    const minValue = Math.min(...arr);
  
    // Find the maximum value in the array
    const maxValue = Math.max(...arr);
  
    // Calculate the average value of the array
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const averageValue = sum / arr.length;
  
    // Get the length of the array
    const arrayLength = arr.length;
  
    // Create an object with the results
    const analysisObj = {
      minValue: minValue,
      maxValue: maxValue,
      averageValue: averageValue,
      arrayLength: arrayLength,
    };
  
    return analysisObj;
  }