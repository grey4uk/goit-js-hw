"use strict";
console.log("-------------------task7gi-------------------");
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

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
    ({ type: type, amount: amount });
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
  this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
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
    amount<=this.balance?this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW)):alert("not enough money");
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    for(this.transaction of this.transactions){
      this.transaction.type===Transaction.DEPOSIT?this.balance=+this.transaction[Transaction.DEPOSIT]:this.balance=+this.transaction[Transaction.WITHDRAW];
    }
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {}
};

console.table(Transaction);

while (true) {
  let i = 1;
  let choiceOfTransaction = prompt("Input 1 for deposit or 2 for withdraw");
  if (choiceOfTransaction === null) {
    alert("canceled");
    break;
  }
  choiceOfTransaction = Number(choiceOfTransaction);
  let typeOfTransaction;
  let amountOfTransaction;
  if (choiceOfTransaction === 1) {
    typeOfTransaction = Transaction.DEPOSIT;
    amountOfTransaction = Number(prompt("input sum"));
    if (amountOfTransaction === null) {
      alert("canceled");
      break;
    }
    if (Number.isNaN(amountOfTransaction)) {
      alert("uncorrect sum");
    }
  } else if (choiceOfTransaction === 2) {
    typeOfTransaction = Transaction.WITHDRAW;
    amountOfTransaction = Number(prompt("input sum"));
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
  account.createTransaction(amountOfTransaction, typeOfTransaction);
}
// console.log(account.createTransaction(amountOfTransaction, typeOfTransaction));
console.table(account.transactions);

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