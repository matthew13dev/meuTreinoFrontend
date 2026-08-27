import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  selector: 'app-menu-component',
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  protected nome: string = 'Matheus';
}
