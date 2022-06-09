import { Component, OnInit } from '@angular/core';
import fixturePosts from '../../../../fixtures/posts.fixtures.json';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  fakePosts = fixturePosts;

  constructor() { }

  ngOnInit(): void {
  }

}
