import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { Post } from 'src/app/models/post';
import { FacsadeService } from '../../services/facsade.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  @Input() public post: Post = new Post('', '', 0, new Author());

  @Input() public tabState: string = '';
  
  constructor(private facsadeService: FacsadeService) { }

  ngOnInit(): void {
  }

  public accept() {
    this.facsadeService.acceptPost(this.post.id).subscribe((response) => {
      this.facsadeService.redirect('/blog/dashboard');
    },
    (error) => {

    });
  }

  public publish() {
    this.facsadeService.publishPost(this.post.id).subscribe((response) => {
      this.facsadeService.redirect('/blog/dashboard');
    },
    (error) => {

    });
  }

  public delete() {
    this.facsadeService.deletePost(this.post.id).subscribe((response) => {
      this.facsadeService.redirect('/blog/dashboard');
    },
    (error) => {

    });
  }



}
