'use strict';

const DEFAULT_DENOMINATIONS = [100, 50, 20, 10, 5, 2, 1];

function coinChangeCalculator(value, denominations) {
  // Ensure value is a integer.
  if (!Number.isSafeInteger(value)) return [];

  // Skip if negative;
  if (value < 0) return [];

  // Ensure denominations are valid.
  const validDenominations = !Array.isArray(denominations) ||
    denominations.some(denomination => !Number.isSafeInteger(denomination));
  if (validDenominations) {
    denominations = DEFAULT_DENOMINATIONS;
  }

  // Determine how many of each denomination we can use, which returns a multi
  // dimension array which needs to be flattened.
  return denominations.map(denomination => {
      let values = [];
      while (value / denomination >= 1) {
        values.push(denomination);
        value -= denomination;
      }
      return values;
    })
    .reduce((a, b) => a.concat(b));
}

// Grrr bring on full ES6 support :-(
module.exports = coinChangeCalculator;
