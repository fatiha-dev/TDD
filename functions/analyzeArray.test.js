const analyzeArray = require('./analyzeArray');

describe('analyzeArray', () => {
  test('should return null for an empty input array', () => {
    const result = analyzeArray([]);
    expect(result).toBe(null);
  });

  test('should return an object with the correct values for a non-empty input array', () => {
    const inputArray = [4, 8, 15, 16, 23, 42];
    const expectedOutput = {
      minValue: 4,
      maxValue: 42,
      averageValue: 18,
      arrayLength: 6
    };
    const result = analyzeArray(inputArray);
    expect(result).toEqual(expectedOutput);
  });

  test('should return an object with the correct values when the input array has negative numbers', () => {
    const inputArray = [-3, 0, 5, -10, 15];
    const expectedOutput = {
      minValue: -10,
      maxValue: 15,
      averageValue: 1.4,
      arrayLength: 5
    };
    const result = analyzeArray(inputArray);
    expect(result).toEqual(expectedOutput);
  });

  test('should return an object with the correct values when the input array has duplicate numbers', () => {
    const inputArray = [5, 10, 5, 20, 5];
    const expectedOutput = {
      minValue: 5,
      maxValue: 20,
      averageValue: 9,
      arrayLength: 5
    };
    const result = analyzeArray(inputArray);
    expect(result).toEqual(expectedOutput);
  });
});
