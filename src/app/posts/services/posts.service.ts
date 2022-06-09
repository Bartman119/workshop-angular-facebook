import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from '../interfaces/post.interface';
import { environment } from 'src/environments/environment';
import { delay, filter, lastValueFrom } from 'rxjs';
import { resolve } from 'cypress/types/bluebird';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(
    private httpClient: HttpClient
  ) { }

  getPosts() {
    return this.makeRequest<Post[]>(environment.postsUrl);
  }

  getPostById(postId: string) {
    return this.makeRequest<Post>(`${environment.postsUrl}/${postId}`);
  }

  // getPostsForUser(userId: string) {
  //   return this.makeRequest<Post[]>(environment.postsUrl + userId);
  // }

  private makeRequest<T>(url: string): Promise<T> {
    return lastValueFrom<T>(this.httpClient.get<T>(url).pipe(
      delay(2000)));
  }
}
