import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { debounceTime } from 'rxjs';
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

  public currentPost!: number;

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
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Calibri',
    toolbarHiddenButtons: [
      [],
      ['insertImage', 'customClasses', 'insertVideo', 'toggleEditorMode']
    ]
  };

  public postForm!: FormGroup;

  constructor(private formBuilder: FormBuilderService,
    private formFieldService: FormFieldsService,
    private fascadeService: FacsadeService) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.buildPostFormGroup();
    this.processConstants();

    this.postForm.valueChanges.pipe(
      debounceTime(5000),
    ).subscribe((result) => {this.save();});
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
    let form = this.postForm.value;
    let post = new Post(form.title, form.markdown);

    this.fascadeService.savePost(post).subscribe((response) => {

    }, (error) => {

    });
  }

  submit() {
    let form = this.postForm.value;
    let post = new Post(form.title, form.markdown, this.currentPost);

    this.fascadeService.submitPost(post).subscribe((response) => {

    }, (error) => {
      
    });
  }

}
