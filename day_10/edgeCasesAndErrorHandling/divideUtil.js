function divide(a, b = 1) {
  if (a === undefined) throw new Error("Missing inputs");
  if (a === null || b === null) throw new Error("Invalid inputs");
  if (!Number.isFinite(a) || !Number.isFinite(b))
    throw new Error("Input is not a Number");
  if (b === 0) throw new Error("Cannot divide by zero");
  const value = a / b;
  return value;
}

module.exports = divide;
