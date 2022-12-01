import { Component, Input, OnInit } from '@angular/core';
import { FacsadeService } from '../../services/facsade.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  @Input() public loadFilter: string = '';

  public posts: any[] = [];

  public loaded: boolean = false;

  constructor(private fascade: FacsadeService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  public loadPosts() {
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
                (post: any) => post.isSubmitted === true);
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
        
    }
  }
    
}

