import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username: string = '';
  password: string = '';

  correctUsername: string = 'mosta@test.com';
  correctPassword: string = '123456';

  constructor(private router: Router) { }

  login(): void {
    if (this.username === this.correctUsername && this.password === this.correctPassword) {
      this.router.navigate(['dashboard']);
    } else {
      alert('Invalid username or password');
    }
  }

}
