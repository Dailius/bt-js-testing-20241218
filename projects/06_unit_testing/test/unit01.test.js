const { add, divide } = require('../math')

test('', () => {
    console.log('1st empty test')
});


test('Option 1: Sum 2 and 3 to equal 5', () => {
    // 1. Arrange
    const a = 2;
    const b = 3;
    const expected = 5;

    // 2. Act
    const actual = add(a, b)

    // 3. Assert
    expect(actual).toBe(expected)
});


test('Option 2: Sum 2 and 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5)
});

