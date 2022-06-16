import { Injectable } from '@angular/core';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class FacsadeService {

  constructor(private postService: PostService ) { }

  public getAllPosts() {
    return this.postService.gPost();
  }
}
