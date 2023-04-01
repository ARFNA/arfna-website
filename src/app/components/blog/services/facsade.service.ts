import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from 'src/app/models/image';
import { Post } from 'src/app/models/post';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class FacsadeService {
  
  constructor(private postService: PostService, private router: Router ) { }

  public getAllPosts() {
    return this.postService.gPost();
  }

  public getMyPosts() {
    return this.postService.uPost();
  }

  public getPost(id: number) {
    return this.postService.getPost(id);
  }

  public getPublishedPost(id: number) {
    return this.postService.getPublishedPost(id);
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

  public deletePost(id: number) {
    return this.postService.deletePost(id);
  }

  public redirect(url: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([url]));
  }

  public saveImage(id: number | undefined, image: Image) {
    return this.postService.saveImage(id, image);
  }

  public getImage(url: string) {
    return this.postService.getImage(url);
  }

}
