/**
 * calculator.js
 * Basic pricing utilities: discounts, totals, and tax.
 */

function calculateDiscount(price, discount) {
  // Applies a percentage discount to a price.
  if (discount < 0 || discount > 100) {
    throw new Error('Discount must be between 0 and 100');
  }
  const discounted = price - (price * discount) / 100;
  return discounted;
}

function calculateTotal(price, quantity) {
  // Multiplies unit price by quantity.
  if (quantity <= 0) {
    throw new Error('Quantity must be a positive number');
  }
  return price * quantity;
}

function calculateTax(amount, taxRate) {
  // Computes tax owed on an amount, rounded to the nearest cent.
  const tax = amount * (taxRate / 100);
  return Math.round(tax * 100) / 100;
}

module.exports = { calculateDiscount, calculateTotal, calculateTax };
