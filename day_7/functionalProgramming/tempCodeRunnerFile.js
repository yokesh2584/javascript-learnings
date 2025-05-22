const transactions = [
  { type: "credit", amount: 1000 },
  { type: "debit", amount: 300 },
  { type: "credit", amount: 400 },
  { type: "debit", amount: 100 },
];
const netBalance = transactions.reduce(
  (acc, val) =>
    val.type === "credit" ? (acc += val.amount) : (acc -= val.amount),
  0
);
console.log(netBalance);