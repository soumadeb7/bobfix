/**
 * order.js
 * Order total calculation, discounting, and validation.
 */

function calculateOrderTotal(items) {
  // Sums the cost of all items in an order (price * quantity per line).
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

function applyDiscount(total, discount) {
  // Applies a percentage discount to an order total.
  if (discount < 0 || discount > 100) {
    throw new Error('Discount must be between 0 and 100');
  }
  return total - (total * discount) / 100;
}

function validateOrder(items) {
  // Checks whether an order is well-formed.
  if (!Array.isArray(items)) return false;
  if (items.length === 0) return false;
  return true;
}

module.exports = { calculateOrderTotal, applyDiscount, validateOrder };
