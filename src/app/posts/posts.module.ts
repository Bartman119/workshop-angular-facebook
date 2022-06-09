import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { PostsService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { PostProfilePageComponent } from './pages/post-profile-page/post-profile-page.component';
import { PostsRoutingModule } from './posts-routing.module';



@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent,
    PostProfilePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    PostsRoutingModule,
  ],
  exports: [
    PostListComponent,
  ],
  providers: [
    PostsService
  ]
})
export class PostsModule { }
