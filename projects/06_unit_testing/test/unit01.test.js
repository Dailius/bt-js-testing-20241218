const { add, divide } = require('../math');

test('', () => {
    console.log('1st empty test');
});

test('Option 1: Sum 2 and 3 to equal 5', () => {
    // 1. Arrange
    const a = 2;
    const b = 3;
    const expected = 5;

    // 2. Act
    const actual = add(a, b);

    // 3. Assert
    expect(actual).toBe(expected);
});

test('Option 2: Sum 2 and 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    //   const z = undefined;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    //   expect(z).not.toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
    expect(value).not.toEqual(5);
});

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
    expect('team').not.toMatch(/I/i);
    expect('team').not.toMatch('I');

    // expect('team').toMatch(/TEAM/); // failing
    expect('team').toMatch(/team/);
    expect('team').toMatch(/TEAM/i);
    expect('TEAM').toMatch(/TEAM/i);
    expect('team').toMatch('team');
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch("stop");
  expect('Christoph').toMatch(/stop/i); // case insensitive
  expect('ChriSTOPh').toMatch(/stop/i); // case insensitive
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

//Exceptions
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use a string that must be contained in the error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);

  // Or you can match an exact error message using a regexp like below
//   expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});
