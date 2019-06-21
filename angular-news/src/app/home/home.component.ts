import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  news: any; //new Array(20);
  newsSubscription;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getData();
  }

  ngOnDestroy() {
    this.newsSubscription.unsubscribe();
  }

  getData() {
    this.newsSubscription = this.newsService.getData('top-headlines?country=us').subscribe(data => {
      console.log(data);
      this.news = data;
    });
  }

  onFavorite(article) {
    console.log(article);
    let items = [];
    const val = localStorage.getItem('items');
    if (val !== null) {
      items = JSON.parse(val);
    }
    items.push(article);
    localStorage.setItem('items', JSON.stringify(items));
  }

}
