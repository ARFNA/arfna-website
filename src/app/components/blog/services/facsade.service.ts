import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class FacsadeService {
  

  constructor(private postService: PostService ) { }

  public getAllPosts() {
    return this.postService.gPost();
  }

  public getMyPosts() {
    return this.postService.uPost();
  }

  public getPost(id: number) {
    return this.postService.getPost(id);
  }

  public savePost(post: Post) {
    return this.postService.savePost(post);
  }

  public submitPost(post: Post) {
    return this.postService.submitPost(post);
  }

  public acceptPost(id: number) {
    return this.postService.acceptPost(id);
  }

  public publishPost(id: number) {
    return this.postService.publishPost(id);
  }

}
