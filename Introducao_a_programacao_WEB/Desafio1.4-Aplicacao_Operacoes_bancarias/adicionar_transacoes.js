const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  };

function createTransaction(transaction) {
    user.transactions.push(transaction);

    if (transaction.type === 'credit') {
        user.balance =user.balance + transaction.value;
    } else {
        user.balance =user.balance - transaction.value;
    }
}

createTransaction({ type: 'credit', value: 50 });
createTransaction({ type: 'debit', value: 30 });

console.log(user)