import { Component } from '@angular/core';
import { Breadcrumbs, Crumb } from '../breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-contact',
  imports: [Breadcrumbs],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  crumbs: Crumb[] = [
    { label: 'Home', url: '/' },
    { label: 'Contact' }
  ];
}