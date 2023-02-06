import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FacsadeService } from '../../services/facsade.service';
import { Subscriber } from 'src/app/models/subscriber';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  @Input() public loadFilter: string = '';

  @Input() public authorId!: Subscriber;

  public posts: any[] = [];

  public loaded: boolean = false;
  
  @Output() public editMode: EventEmitter<number> = new EventEmitter<number>();

  constructor(private fascade: FacsadeService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  public loadPosts() {
    this.loaded = false;
    switch(this.loadFilter) {
      case '': {
        this.fascade.getAllPosts().subscribe(
          (response: any) => {
            if (response.response.posts.length) {
              this.posts = response.response.posts;
            }
            this.loaded = true;
          });
          break;
      }
      case 'myPosts': {
        this.fascade.getMyPosts().subscribe(
          (response: any) => {
            if (response.response.allPosts.length) {
              this.posts = response.response.allPosts.filter(
                (post: any) => post.isSubmitted === true && 
                post.author.id === this.authorId.id);
            }
            this.loaded = true;
          });
          break;
      }

      case 'draftPosts': {
        this.fascade.getMyPosts().subscribe(
          (response: any) => {
            if (response.response.allPosts.length) {
              this.posts = response.response.allPosts.filter(
                (post: any) => post.isSubmitted === false);
            }
            this.loaded = true;
          });
          break;
      }

      case 'accept': {
        this.fascade.getMyPosts().subscribe(
          (response: any) => {
            if (response.response.allPosts.length) {
              this.posts = response.response.allPosts.filter(
                (post: any) => post.isSubmitted === true
                && post.isAccepted === false);
            }
            this.loaded = true;
          });
          break;
      }

      case 'publish': {
        this.fascade.getMyPosts().subscribe(
          (response: any) => {
            if (response.response.allPosts.length) {
              this.posts = response.response.allPosts.filter(
                (post: any) => post.isAccepted === true
                && post.isPublished === false);
            }
            this.loaded = true;
          });
          break;
      }
        
    }
  }

  public editPost(event: any) {
    this.editMode.emit(event);
  }
    
}

