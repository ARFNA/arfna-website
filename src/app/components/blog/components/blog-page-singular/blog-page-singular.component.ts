import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { FacsadeService } from '../../services/facsade.service';

@Component({
  selector: 'app-blog-page-singular',
  templateUrl: './blog-page-singular.component.html',
  styleUrls: ['./blog-page-singular.component.scss']
})
export class BlogPageSingularComponent implements OnInit {

  public post!: Post;

  public postID!: number;

  constructor(private route: ActivatedRoute,
    private fascadeService: FacsadeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postID = params['id'];

      this.fascadeService.getPublishedPost(this.postID).subscribe(
        (data: any) => {
          this.post = data.body.response.post;
          if (!this.post.title) {
            this.post.title = 'untitled';
          }
        }, 
        (error) => {
          this.fascadeService.getPost(this.postID).subscribe(
            (data: any) => {
              this.post = data.body.response.post;
              if (!this.post.title) {
                this.post.title = 'untitled';
              }
            })
        });
      });
  }
}

