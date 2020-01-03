import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../../../services/post.service';
import { Router } from '@angular/router';
import { SearchPostAdvancedService } from '../../../services/search-post-advanced.service';

@Component({
  selector: 'app-search-post-by-title',
  templateUrl: './search-post-by-title.component.html',
  styleUrls: ['./search-post-by-title.component.css']
})
export class SearchPostByTitleComponent implements OnInit {

  public formSearchPostByTitle: FormGroup

  constructor(
    public formBuilder: FormBuilder,
    public postService: PostService,
    public router: Router,
    public searchPostAdvancedService: SearchPostAdvancedService
  ) { }

  ngOnInit() {
    this.formSearchPostByTitle = this.formBuilder.group({
      title: []
    })
  }

  searchPostByTitle() {
    console.log(this.formSearchPostByTitle.value)
    this.postService.searchPostByTitle(this.formSearchPostByTitle.value).subscribe(data => {
      console.log(data);
      this.searchPostAdvancedService.sendData(data);
      this.router.navigateByUrl('post/list');
    })
  }


  cancelSearchPostByTitle() {
    this.router.navigateByUrl('post/list');
  }

}
