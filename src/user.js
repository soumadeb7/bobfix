/**
 * user.js
 * User creation and validation utilities.
 */

function validateEmail(email) {
  // Checks whether a string looks like an email address.
  // Requires a dot in the domain part (e.g. user@domain.tld).
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isAdult(age) {
  // Determines whether an age qualifies as an adult (>= 18).
  return age >= 18;
}

function createUser(name, email, age) {
  // Builds a user record after validating inputs.
  if (!name) {
    throw new Error('Name must not be empty');
  }
  if (!validateEmail(email)) {
    throw new Error('Invalid email address');
  }
  return {
    name,
    email,
    age,
    isAdult: isAdult(age),
  };
}

module.exports = { validateEmail, createUser, isAdult };
