function caesarCipher(str, shift) {
    // Wrap the shift factor if it's greater than 26 or less than -26
    shift = shift % 26;
    
    // Convert the string to an array of characters
    const chars = str.split('');
    
    // Use the Array.map() method to transform each character
    const ciphered = chars.map(char => {
      // Check if the character is a letter
      if (char.match(/[a-z]/i)) {
        // Get the character code and add the shift factor
        let code = char.charCodeAt(0) + shift;
        
        // If the character is uppercase and the shifted code is greater than 'Z', or if the character is lowercase and the shifted code is greater than 'z', wrap the code back to the beginning of the alphabet
        if ((char >= 'A' && char <= 'Z' && code > 'Z'.charCodeAt(0)) || (char >= 'a' && char <= 'z' && code > 'z'.charCodeAt(0))) {
          code -= 26;
        }
        
        // Convert the code back to a character
        return String.fromCharCode(code);
      } else {
        // If the character is not a letter, return it unchanged
        return char;
      }
    });
    
    // Convert the array of characters back to a string and return it
    return ciphered.join('');
  }
  const message = 'Hello, World!';
  const shift = 3;
  const ciphered = caesarCipher(message, shift);
  
  console.log(ciphered);
module.exports = caesarCipher;