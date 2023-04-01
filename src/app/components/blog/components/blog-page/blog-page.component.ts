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

  public cols: number = 5;
  
  @Output() public editMode: EventEmitter<number> = new EventEmitter<number>();

  constructor(private fascade: FacsadeService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  ngDoCheck(): void {
    if (this.getWidth() <= 650) {
      this.cols = 1;
    } else if (this.getWidth() <= 1100) {
      this.cols = 2;
    } else if (this.getWidth() <= 1400) {
      this.cols = 3;
    } else {
      this.cols = 4;
    }
  }

  /** For testing purposes */
  getWidth(): number {
    return window.screen.width
  }

  public loadPosts() {
    this.loaded = false;
    switch(this.loadFilter) {
      case '': {
        this.fascade.getAllPosts().subscribe(
          (response: any) => {
              if (response.body.response.posts.length) {
                this.posts = response.body.response.posts;
              }
              this.loaded = true;
          });
          break;
      }
      case 'myPosts': {
        this.fascade.getMyPosts().subscribe(
          (response: any) => {
            if (response.body.response.allPosts.length) {
              this.posts = response.body.response.allPosts.filter(
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
            if (response.body.response.allPosts.length) {
              this.posts = response.body.response.allPosts.filter(
                (post: any) => post.isSubmitted === false);
            }
            this.loaded = true;
          });
          break;
      }

      case 'accept': {
        this.fascade.getMyPosts().subscribe(
          (response: any) => {
            if (response.body.response.allPosts.length) {
              this.posts = response.body.response.allPosts.filter(
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
            if (response.body.response.allPosts.length) {
              this.posts = response.body.response.allPosts.filter(
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

