import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { debounceTime } from 'rxjs';
import { Image } from 'src/app/models/image';
import { Post } from 'src/app/models/post';
import { Errors } from '../../constants/errors.constants';
import { FacsadeService } from '../../services/facsade.service';
import { FormBuilderService } from '../../services/form-builder.service';
import { FormFieldsService } from '../../services/form-fields.service';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.scss']
})
export class NewPostFormComponent implements OnInit {

  public content: Map<string, string> = new Map();

  @Input()
  public currentPost!: number | undefined;

  public saving: boolean = false;

  public submitting: boolean = false;

  public errorMessage: string = '';

  public selectedFile: any;

  @Output()
  public statechange: EventEmitter<string> = new EventEmitter();

  @Input()
  public htmlContent: string = 'Enter your text here!'; 

  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '5rem',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: this.htmlContent,
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Calibri',
    fonts: [
      {class: 'calibri', name: 'Calibri'}
    ],
    toolbarHiddenButtons: [
      [],
      ['insertImage', 'customClasses', 'insertVideo', 'toggleEditorMode']
    ]
  };

  public postForm!: FormGroup;

  public saveSubscription: any;

  constructor(private formBuilder: FormBuilderService,
    private formFieldService: FormFieldsService,
    private fascadeService: FacsadeService) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.buildPostFormGroup();
    this.processConstants();

    this.saveSubscription = this.postForm.valueChanges.pipe(
      debounceTime(2000),
    ).subscribe((result: any) => {this.save();});

    if (!this.currentPost) {
      this.save();
    } else {
      this.fascadeService.getPost(this.currentPost)
        .subscribe((data: any) => {
        if (!data.body.response.post.title) {
            data.body.response.post.title = 'untitled';
        }
          this.postForm.patchValue(data.body.response.post);
      })
    }
  }

  public processConstants(): void {
    this.content.set('requiredTxt', Errors.REQUIRE);
    this.content.set('maxLengthTxt', Errors.MAXLENGTH140);
    this.content.set('minLengthTxt', Errors.MINLENGTH);
  }

  proccessErrors(field: string) {
    this.formFieldService.processFieldValidationMessage(this.postForm, field, this.content);
  }

  save() {
    this.saving = true;
    let form = this.postForm.value;
    let post = new Post(form.title, form.markdown, this.currentPost);

    this.fascadeService.savePost(post).subscribe((response: any) => {
      this.saving = false;
      if (response.body.response.post.id) {
        this.currentPost = response.body.response.post.id;
      }

    }, (error) => {
      this.saving = false;
      this.errorMessage = error.status.message;
    });
  }

  submit() {
    this.saveSubscription.unsubscribe();
    this.submitting = true;
    let form = this.postForm.value;
    let post = new Post(form.title, form.markdown, this.currentPost);

    if(this.selectedFile) {
      this.encodeBase64().then((data: any) =>{
        const img: Image = {
          base64: data.toString().replace(/^data:(.*,)?/, ''),
          extension: '.' + this.selectedFile.type.replace(/^image\/?/, '')
        }
        this.fascadeService.saveImage(this.currentPost, img).subscribe((response: any) => {
           post.thumbnail = response.body.response.imageId;
           this.savePost(post);
         });
      });
    } else {
      this.savePost(post);
    }
  }

  public onFileSelected(event: any): void {
    const filesize = ((event.target.files[0].size/1024)/1024);
    if (event.target.files[0].type === 'image/jpeg' ||
    event.target.files[0].type === 'image/png' && filesize <= 2) {
      this.selectedFile = event.target.files[0] ?? null;
      console.log(filesize)
    } else {
      alert('Upload limited to 2MB jpg/png only');
    }
  }

  private encodeBase64(): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  private savePost(post: Post) {
    this.fascadeService.submitPost(post).subscribe((response) => {
      this.submitting = false;
      this.statechange.emit('myPosts');

    }, (error) => {
      this.submitting = false;
      this.errorMessage = error.status.message;
    });
  }


}

