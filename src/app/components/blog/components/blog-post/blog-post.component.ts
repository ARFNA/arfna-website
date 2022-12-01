import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  @Input() public post: Post = new Post('', '', new Author());
  
  constructor() { }

  ngOnInit(): void {
  }

}
