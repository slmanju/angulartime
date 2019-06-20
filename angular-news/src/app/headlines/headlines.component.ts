import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {
  categories = [
    'World',
    'India',
    'Business',
    'Technology',
    'Entertainment',
    'Science',
    'Sports'
  ];

  constructor(private newsService: NewsService) { }
  news;

  ngOnInit() {
    this.getCategoryData(this.categories[0]);
  }

  onGetCategoryData(category) {
    this.getCategoryData(category);
  }

  getCategoryData(category) {
    this.newsService
      .getData(`everything?q=${category.toLowerCase()}`)
      .subscribe(data => {
        this.news = data;
      });
  }

}
