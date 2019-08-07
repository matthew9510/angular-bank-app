import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {

  value: number;
  isValidAmount: boolean = true;
  showTransactionHistory: boolean = false;
  showBalance: boolean = false;


  constructor(public _bankService: BankService) { }

  withdraw(): void {
    this.isValidAmount = true;
    if (this.value != undefined) {
      this._bankService.account.balance -= this.value;
      let date = new Date()
      this._bankService.account.transactions.push(
        {
          date: `${date.getMonth()}-${date.getDay()}-${date.getFullYear() % 100}`,
          type: 'withdraw',
          amount: this.value,
          currency: 'usd'
        })
    }
    else {
      this.isValidAmount = false;
    }
    this.value = undefined;
  }

  deposit(): void {
    this.isValidAmount = true;
    if (this.value != undefined) {
      this._bankService.account.balance += this.value;
      this._bankService.account.transactions.push(
        {
          date: '01-01-01',
          type: 'deposit',
          amount: this.value,
          currency: 'usd'
        })

    }
    else {
      this.isValidAmount = false;
    }
    this.value = undefined;
  }

  balanceInquiry(): void{
      this.showBalance = true;
  }

  transactionHistory(): void{
      this.showTransactionHistory = true;
  }


}
