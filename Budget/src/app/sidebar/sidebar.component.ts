import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompteComponent } from '../compte/compte.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,CompteComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
