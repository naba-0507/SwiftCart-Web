import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartPanel } from './components/cart-panel/cart-panel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CartPanel],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}