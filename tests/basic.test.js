const { calculateDiscount, calculateTotal, calculateTax } = require('../src/calculator');
const { validateEmail, createUser, isAdult } = require('../src/user');
const { calculateOrderTotal, applyDiscount, validateOrder } = require('../src/order');

describe('calculator.js - basic cases', () => {
  test('calculateDiscount applies a normal discount', () => {
    expect(calculateDiscount(100, 10)).toBe(90);
  });

  test('calculateTotal multiplies price and quantity', () => {
    expect(calculateTotal(50, 2)).toBe(100);
  });

  test('calculateTax computes tax on a normal amount', () => {
    expect(calculateTax(100, 10)).toBe(10);
  });
});

describe('user.js - basic cases', () => {
  test('validateEmail accepts a normal email', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  test('isAdult returns true for a clearly adult age', () => {
    expect(isAdult(25)).toBe(true);
  });

  test('createUser returns a populated user object', () => {
    const user = createUser('Alice', 'alice@example.com', 30);
    expect(user.name).toBe('Alice');
    expect(user.email).toBe('alice@example.com');
    expect(user.isAdult).toBe(true);
  });
});

describe('order.js - basic cases', () => {
  test('calculateOrderTotal sums single-quantity items', () => {
    const items = [
      { price: 10, quantity: 1 },
      { price: 20, quantity: 1 },
    ];
    expect(calculateOrderTotal(items)).toBe(30);
  });

  test('applyDiscount applies a normal discount', () => {
    expect(applyDiscount(100, 10)).toBe(90);
  });

  test('validateOrder accepts a normal order', () => {
    const items = [{ price: 10, quantity: 1 }];
    expect(validateOrder(items)).toBe(true);
  });
});
