import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';


@Component({
  selector: 'app-compte',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.css'
})
export class CompteComponent {
accounts = [
    { name: 'Compte chèque', balance: 1000 },
    { name: 'Compte épargne', balance: 5000 }
  ];

  newAccount = { name: '', balance: 0 };

  constructor() { }

  ngOnInit(): void {
  }

  addAccount(): void {
    if (this.newAccount.name && this.newAccount.balance >= 0) {
      this.accounts.push({ ...this.newAccount });
      this.newAccount = { name: '', balance: 0 }; // Reset form
     
    }
  }

  deleteAccount(index: number): void {
    this.accounts.splice(index, 1);
  }
}
