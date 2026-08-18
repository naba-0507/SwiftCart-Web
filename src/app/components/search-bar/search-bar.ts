import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  constructor(
    public searchService: SearchService,
    private router: Router
  ) {}

  onSearch(value: string): void {
  this.searchService.setSearchTerm(value);
  if (!this.router.url.includes('/products')) {
    this.router.navigate(['/products']); 
  }
}
}