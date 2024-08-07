import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent implements OnInit {
 budgetItems = [
    { category: 'Alimentation', amount: 200 },
    { category: 'Loyer', amount: 800 },
    { category: 'Transport', amount: 100 }
  ];

  newBudgetItem = { category: '', amount: 0 };

  constructor() { }

  ngOnInit(): void {
  }

  addBudgetItem(): void {
    if (this.newBudgetItem.category && this.newBudgetItem.amount >= 0) {
      this.budgetItems.push({ ...this.newBudgetItem });
      this.newBudgetItem = { category: '', amount: 0 }; // Reset form
    }
  }

  deleteBudgetItem(index: number): void {
    this.budgetItems.splice(index, 1);
  }

  getTotalAmount(): number {
    return this.budgetItems.reduce((total, item) => total + item.amount, 0);
  }
}
