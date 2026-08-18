import { Component } from '@angular/core';
import { Breadcrumbs, Crumb } from '../breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-about',
  imports: [Breadcrumbs],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  crumbs: Crumb[] = [
    { label: 'Home', url: '/' },
    { label: 'About' }
  ];
}