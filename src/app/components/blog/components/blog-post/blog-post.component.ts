import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from 'src/app/models/author';
import { Post } from 'src/app/models/post';
import { FascadeService } from 'src/app/services/fascade.service';
import { FacsadeService } from '../../services/facsade.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {

  @Input() public post: Post = new Post('', '', 0, new Author());

  @Input() public tabState: string = '';

  public buttonPressed: string = '';

  public image: string = '../../../../../assets/peanut-butter.jpg';

  @Output() public reload: EventEmitter<any> = new EventEmitter<any>();
 
  @Output() public editMode: EventEmitter<number> = new EventEmitter<number>();
  
  constructor(private facsadeService: FacsadeService,
    private facsade: FascadeService) { }

  ngOnInit(): void {
    if (!this.post.title) {
      this.post.title = 'untitled';
    }

    if (this.post.thumbnail) {
      this.facsadeService.getImageFromUrl(this.post.thumbnail).subscribe((response: any) => {
        this.image = response;
      });
    }
  }

  public urlEncodeTitle() {
    return this.post.title.split(' ').join('-');
  }

  public accept() {
    this.facsadeService.acceptPost(this.post.id).subscribe((response) => {
      this.reload.emit('');
    },
    (error) => {

    });
  }

  public publish() {
    this.facsadeService.publishPost(this.post.id).subscribe((response) => {
      this.reload.emit('');
    },
    (error) => {

    });
  }

  public delete() {
    this.facsadeService.deletePost(this.post.id).subscribe((response) => {
      this.reload.emit('');
    },
    (error) => {

    });
  }
  
  public edit() {
    this.editMode.emit(this.post.id);
  }

  openModal(id: string, button: string) {
    this.buttonPressed = button;
    this.facsade.open(id+this.post.id);
  }

  closeModal(id: string, confirm: boolean) {
    this.facsade.close(id+this.post.id);
    if (confirm) {
      switch (this.buttonPressed) {
        case 'delete':
          this.delete();
          break;
        case 'accept':
          this.accept();
          break;
        case 'publish':
          this.publish();
          let urlEncodeTitle = this.urlEncodeTitle();
          let arr = new Array('/blog', this.post.id.toString(), this.urlEncodeTitle())
          let redirectPath = arr.join('/')
          window.location.href=redirectPath
          this.facsadeService.redirect(redirectPath);
          break;
        case 'edit':
          this.edit();
          break;
      }
    }
  }
}
