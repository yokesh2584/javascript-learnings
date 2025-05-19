export const add = (a = 0, b = 0) => a + b;
export const sub = (a = 0, b = 0) => a - b;
export const multiply = (a = 1, b = 1) => a * b;
export const divide = (a = 1, b = 1) => {
  if (b !== 0) return a / b;
  else return `Zero is not allowed.`;
};
