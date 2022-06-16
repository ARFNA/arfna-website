import { Component, OnInit } from '@angular/core';
import { FacsadeService } from '../../services/facsade.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  public posts: any[] = [];

  public loaded: boolean = false;

  constructor(private fascade: FacsadeService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  public loadPosts() {
    this.fascade.getAllPosts().subscribe(
      (response: any) => {
        if (response.response.posts.length) {
          this.posts = response.response.posts;
        }
        this.loaded = true;
      });
  }

}
