import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush //makes sure that all components are not being refreshed after minor change
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post | null = null;
  
  @HostListener('click') onClick() {
    this.router.navigateByUrl(this.getPostProfileUrl());
  }

  @HostBinding('class.p-5') get isWilburn() {
    return this.post?.author.name === 'Wilburn Dicki';
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getPostProfileUrl(): string {
    return `/posts/${this.post?.id}`;
  }

}
