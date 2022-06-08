import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Array<Post> = [
  {
    "id": "c9cd06ea-4048-59b2-9062-23b6c727d1c1",
    "createdTime": "Sun Nov 21 2021 01:51:23 GMT+0100 (Central European Standard Time)",
    "author": {
      "id": "12780527-5b9b-51e3-936a-a1a32c7ad392",
      "name": "Angelita Swift",
      "avatarUrl": "//www.gravatar.com/avatar/7a7a31c79d60484324accc9cd9ab654b"
    },
    "body": "Me nah wifsiw manefiz po lihap sapi reha ur hi lu fonuzni.",
    "images": [
      "https://picsum.photos/id/60/300/150/",
      "https://picsum.photos/id/806/300/150/",
      "https://picsum.photos/id/530/300/150/"
    ]
  },
  {
    "id": "705398ab-fd1d-5c0d-b3c9-1913ec289020",
    "createdTime": "Fri Apr 01 2022 22:12:10 GMT+0200 (Central European Summer Time)",
    "author": {
      "id": "732ce62c-c86c-543b-8b07-c3bbce0ef780",
      "name": "Estelle Huels",
      "avatarUrl": "//www.gravatar.com/avatar/7a7a31c79d60484324accc9cd9ab654b"
    },
    "body": "Gifhow toupham viwpo wa di rownoj tiv livnobos wa jair jav fuji wambuvse pintikwef kozelte coiniboj.",
    "images": [
      "https://picsum.photos/id/570/300/150/",
      "https://picsum.photos/id/989/300/150/",
      "https://picsum.photos/id/75/300/150/",
      "https://picsum.photos/id/355/300/150/"
    ]
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
