"use strict";

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
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
      const transaction = {};
      transaction.id = this.transactions.length + 1; 
      transaction.amount = amount;
      transaction.type = type;
      return transaction;
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
      const objectTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
      this.balance += amount;
      this.transactions.push(objectTransaction);
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
      const objectTransaction = this.createTransaction(amount, Transaction.WITHDRAW);

      if (amount > this.balance) {
        console.log(`Не возможно снять ${amount}! Недостаточно денег на счету!`);
        return;
      } 
      
      this.balance -= amount;
      this.transactions.push(objectTransaction);

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
      const objectId = this.transactions;

      for (let obj of objectId) {
        if (obj.id === id){
              return obj;
            }
      }

    },
  
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
      const objects = this.transactions;
      let total = 0;

      for (let object of objects) {
        if (object.type === type){
          total += object.amount;
        }
      }

      return total;
    },
  }; 