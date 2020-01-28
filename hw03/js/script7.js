"use strict";
console.log("-------------------task7-------------------");
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
// debugger;
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};
console.log(Transaction.DEPOSIT);
let transactionsCounter = 0;
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transaction = { id: transactionsCounter, type: type, amount: amount };
    transactionsCounter += 1;
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.transactions.push(
      this.createTransaction(amount, Transaction["DEPOSIT"])
    );
    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount <= this.balance) {
      this.transactions.push(
        this.createTransaction(amount, Transaction["WITHDRAW"])
      );
      this.balance -= amount;
    } else {
      alert("not enough money");
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    return this.transactions[id];
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for ( this.transaction of this.transactions)
      if (this.transaction.type === type) {
        total += this.transaction.amount;
      }
    return total;
  }
};


while (true) {
  let choiceOfTransaction = prompt("Input 1 for deposit or 2 for withdraw");
  if (choiceOfTransaction === null) {
    alert("canceled");
    break;
  }
  choiceOfTransaction = Number(choiceOfTransaction);
  let amountOfTransaction;
  if (choiceOfTransaction === 1) {
    amountOfTransaction = Number(prompt("input sum"));
    account.deposit(amountOfTransaction);
    if (amountOfTransaction === null) {
      alert("canceled");
      break;
    }
    if (Number.isNaN(amountOfTransaction)) {
      alert("uncorrect sum");
    }
  } else if (choiceOfTransaction === 2) {
    amountOfTransaction = Number(prompt("input sum"));
    account.withdraw(amountOfTransaction);
    if (amountOfTransaction === null) {
      alert("canceled");
      break;
    }
    if (Number.isNaN(amountOfTransaction)) {
      alert("uncorrect sum");
    }
  } else {
    alert("wrong choice, try again");
  }
}

console.table(account.transactions);

console.log(account.getTransactionDetails(1));
// debugger;
console.log(account.getTransactionTotal(Transaction.DEPOSIT));

console.log(account.getBalance());

////////////////////////////////////////WORKING////////////////////////////////////////////////////////////////
//////////////////////////////////////Variant Artema/////////////////////////////////////////////////////
// "use strict";
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
//   };

//   /*
//    * Каждая транзакция это объект со свойствами: id, type и amount
//    */

//   const account = {

//     // Текущий баланс счета
//     balance: 0,

//     // История транзакций
//     transactions: [],

//     /*
//      * Метод создает и возвращает объект транзакции.
//      * Принимает сумму и тип транзакции.
//      */
//     createTransaction(amount, type) {

//         return {
//             amount,
//             type,
//             id: this.transactions.length+1
//         }

//     },

//     /*
//      * Метод отвечающий за добавление суммы к балансу.
//      * Принимает сумму танзакции.
//      * Вызывает createTransaction для создания объекта транзакции
//      * после чего добавляет его в историю транзакций
//      */
//     deposit(amount) {
//         this.balance += amount;
//         const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
//         this.transactions.push(newTransaction);
//     },

//     /*
//      * Метод отвечающий за снятие суммы с баланса.
//      * Принимает сумму танзакции.
//      * Вызывает createTransaction для создания объекта транзакции
//      * после чего добавляет его в историю транзакций.
//      *
//      * Если amount больше чем текущий баланс, выводи сообщение
//      * о том, что снятие такой суммы не возможно, недостаточно средств.
//      */
//     withdraw(amount) {
//         if(this.balance<amount){
//             console.log(`Cнятие такой ${amount} не возможно, недостаточно ${amount-this.balance}.`)
//         }
//         else{
//             const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
//             this.transactions.push(newTransaction);
//             this.balance -= amount;
//         }
//     },

//     /*
//      * Метод возвращает текущий баланс
//      */
//     getBalance() {
//         return this.balance;
//     },

//     /*
//      * Метод ищет и возвращает объект транзации по id
//      */
//     getTransactionDetails(id) {
//         for(let tr of this.transactions){
//             if(tr.id === id){
//                 return tr;
//             }
//         }
//     },

//     /*
//      * Метод возвращает количество средств
//      * определенного типа транзакции из всей истории транзакций
//      */
//     getTransactionTotal(type) {
//         let totalAmount = 0;
//         for(let tr of this.transactions){
//             if(tr.type === type){
//                 totalAmount += tr.amount;
//             }
//         }
//         return totalAmount;
//     }
//   };
//   account.deposit(100);
//   console.log(account.getBalance());//100
//   account.deposit(300);
//   console.log(account.getBalance());//400
//   account.withdraw(50);
//   console.log(account.getBalance());//350
//   account.withdraw(10);
//   console.log(account.getBalance());//340
//   console.log(account.getTransactionDetails(1));// deposit 100
//   console.log(account.getTransactionTotal(Transaction.DEPOSIT));// 400
//   console.log(account.getTransactionTotal(Transaction.WITHDRAW)); // 60
//   console.table(account.transactions);
