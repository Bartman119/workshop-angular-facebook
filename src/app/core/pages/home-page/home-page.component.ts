import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/posts/interfaces/post.interface';
import { PostsService } from 'src/app/posts/services/posts.service';
import fixturePosts from '../../../../fixtures/posts.fixtures.json';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  isPostsLoaded = false;
  posts: Post[] = [];

  constructor(
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.setupPosts();
  }

  private async setupPosts() {
    this.posts = await this.postsService.getPosts();
    this.isPostsLoaded = true;
  }

}
