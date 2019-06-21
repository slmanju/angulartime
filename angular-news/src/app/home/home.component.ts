import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../services/news.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  news: any; //new Array(20);
  newsSubscription;

  length;
  pageSize = 8;
  page = 1;

  constructor(private newsService: NewsService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getData();
  }

  ngOnDestroy() {
    this.newsSubscription.unsubscribe();
  }

  getData() {
    this.newsSubscription = this.newsService
    .getData(`top-headlines?country=us&pageSize=${this.pageSize}&page=${this.page}`)
    .subscribe(data => {
      this.news = data;
      this.length = data['totalResults'];
    });
  }

  onFavorite(article) {
    let items = [];
    const val = localStorage.getItem('items');
    if (val !== null) {
      items = JSON.parse(val);
    }
    items.push(article);
    localStorage.setItem('items', JSON.stringify(items));

    this.snackBar.open('Favorite Added', 'Ok', {
      duration: 2000
    });
  }

  onPageChange(event) {
    this.newsSubscription = this.newsService
    .getData(`top-headlines?country=us&pageSize=${this.pageSize}&page=${event.pageIndex + 1}`)
    .subscribe(data => {
      this.news = data;
      this.length = data['totalResults'];
    });
  }

}
