import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';


interface Operation {
  date: string;
  type: string;
  category: string;
  amount: number;  // Changed from string to number for calculation purposes
  balance: number;
}

const OPERATIONS_DATA: Operation[] = [
  { date: '2024-01-01', type: 'Deposit', category: 'Salary', amount: 1000, balance: 1000 },
  { date: '2024-01-05', type: 'Withdrawal', category: 'Groceries', amount: -50, balance: 950 }
  // Add initial data here if needed
];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule,SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['date', 'type', 'category', 'amount', 'balance'];
  dataSource = [...OPERATIONS_DATA];
  newOperation: Operation = {
    date: '',
    type: '',
    category: '',
    amount: 0,
    balance: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  addOperation() {
    // Add the new operation
    this.dataSource.push({ ...this.newOperation });
    // Reset the new operation form
    this.newOperation = { date: '', type: '', category: '', amount: 0, balance: 0 };
    // Recalculate the balances
    this.updateBalances();
  }

  deleteOperation(index: number) {
    this.dataSource.splice(index, 1);
    this.updateBalances();
  }

  updateBalances() {
    let cumulativeBalance = 0;
    this.dataSource.forEach((operation, index) => {
      cumulativeBalance += operation.amount;
      operation.balance = cumulativeBalance;
    });
  }
}