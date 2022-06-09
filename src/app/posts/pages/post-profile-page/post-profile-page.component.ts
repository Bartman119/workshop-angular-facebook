import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-profile-page',
  templateUrl: './post-profile-page.component.html',
  styleUrls: ['./post-profile-page.component.scss']
})
export class PostProfilePageComponent implements OnInit {

  post: Post | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostsService,
    private router: Router
  ) {}

  ngOnInit(): void { 
    this.setupPost();
  }

  async setupPost() {
    const postId = this.activatedRoute.snapshot.params['id'];
    try {
      const post = await this.postService.getPostById(postId);
      if(!post) {
        throw new Error('post is not defined');
      }
      this.post = post;
    } catch {
      this.router.navigate(['/post-not-found']);
    }
  }

}
