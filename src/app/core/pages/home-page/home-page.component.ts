import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/posts/interfaces/post.interface';
import fixturePosts from '../../../../fixtures/posts.fixtures.json';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  fakePosts: Post[] = fixturePosts;

  constructor() { }

  ngOnInit(): void {
  }

}
