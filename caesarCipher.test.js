const caesarCipher = require('./caesarCipher')

it("should be Khoor, Zruog!", () => {
    expect(caesarCipher("Hello, world!", 3));
})