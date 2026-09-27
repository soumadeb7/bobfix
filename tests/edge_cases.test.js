/**
 * edge_cases.test.js
 *
 * Tests that expose the 10 known bugs from dataset/bug_cases.json.
 * These tests are written against the CORRECT expected behavior.
 * They are expected to FAIL against the current (buggy) implementation.
 *
 * Priority legend: [HIGH] / [MEDIUM]
 */

const { calculateDiscount, calculateTotal, calculateTax } = require('../src/calculator');
const { validateEmail, createUser, isAdult } = require('../src/user');
const { calculateOrderTotal, applyDiscount, validateOrder } = require('../src/order');

// ---------------------------------------------------------------------------
// calculator.js
// ---------------------------------------------------------------------------

describe('BUG-001 [HIGH] calculateDiscount — discount > 100', () => {
  test('discount of 150% should throw or return null, not a negative price', () => {
    expect(() => calculateDiscount(100, 150)).toThrow();
  });
});

describe('BUG-002 [MEDIUM] calculateDiscount — negative discount', () => {
  test('negative discount should throw or return null, not increase the price', () => {
    expect(() => calculateDiscount(100, -10)).toThrow();
  });
});

describe('BUG-003 [HIGH] calculateTotal — zero or negative quantity', () => {
  test('quantity of 0 should throw or return null, not return 0', () => {
    expect(() => calculateTotal(50, 0)).toThrow();
  });

  test('negative quantity should throw or return null, not return a negative total', () => {
    expect(() => calculateTotal(50, -2)).toThrow();
  });
});

describe('BUG-004 [MEDIUM] calculateTax — fractional-cent truncation', () => {
  // 33.33 * 8.75% = 2.916... → should round to 2.92, not floor to 2.91
  test('tax on 33.33 at 8.75% should round to 2.92, not truncate to 2.91', () => {
    expect(calculateTax(33.33, 8.75)).toBe(2.92);
  });
});

// ---------------------------------------------------------------------------
// user.js
// ---------------------------------------------------------------------------

describe('BUG-005 [MEDIUM] validateEmail — missing domain suffix', () => {
  test('"a@b" (no TLD) should be rejected as invalid', () => {
    expect(validateEmail('a@b')).toBe(false);
  });

  test('"user@domain" (no dot in domain) should be rejected', () => {
    expect(validateEmail('user@domain')).toBe(false);
  });
});

describe('BUG-006 [HIGH] isAdult — boundary value of exactly 18', () => {
  test('age 18 should be treated as an adult (>= 18)', () => {
    expect(isAdult(18)).toBe(true);
  });
});

describe('BUG-007 [MEDIUM] createUser — empty name or malformed email', () => {
  test('empty name should throw or return null', () => {
    expect(() => createUser('', 'alice@example.com', 25)).toThrow();
  });

  test('malformed email should throw or return null', () => {
    expect(() => createUser('Alice', 'not-an-email', 25)).toThrow();
  });
});

// ---------------------------------------------------------------------------
// order.js
// ---------------------------------------------------------------------------

describe('BUG-008 [HIGH] calculateOrderTotal — quantity > 1 ignored', () => {
  test('item with quantity 3 should contribute price * 3, not just price', () => {
    const items = [{ price: 10, quantity: 3 }];
    expect(calculateOrderTotal(items)).toBe(30);
  });

  test('mixed quantities should be summed correctly', () => {
    const items = [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 4 },
    ];
    expect(calculateOrderTotal(items)).toBe(40);
  });
});

describe('BUG-009 [MEDIUM] validateOrder — empty items array', () => {
  test('empty array should be rejected as an invalid order', () => {
    expect(validateOrder([])).toBe(false);
  });
});

describe('BUG-010 [MEDIUM] applyDiscount — discount > 100', () => {
  test('discount of 150% should throw or return null, not a negative total', () => {
    expect(() => applyDiscount(100, 150)).toThrow();
  });
});
