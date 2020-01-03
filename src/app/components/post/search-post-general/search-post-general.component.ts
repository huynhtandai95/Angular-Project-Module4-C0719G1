import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../../../services/post.service';
import { Router } from '@angular/router';
import { SearchPostAdvancedService } from '../../../services/search-post-advanced.service';

@Component({
  selector: 'app-search-post-general',
  templateUrl: './search-post-general.component.html',
  styleUrls: ['./search-post-general.component.css']
})
export class SearchPostGeneralComponent implements OnInit {
  public formSearchGeneral: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public postService: PostService,
    public router: Router,
    public searchPostAdvancedService: SearchPostAdvancedService
  ) { }

  ngOnInit() {
    this.formSearchGeneral = this.formBuilder.group({
      categoryId: ['0'],
      regionId: ['0'],
      sellerId: ['0'],
      postOfTypeId: ['0'],
      statusOfPostId: ['0'],
      areaRangeId: ['0'],
      priceRangeId: ['0'],
      directionId: ['0'],
      ableComposition: [true]
    })
  }

  searchPostGeneral() {
    console.log(this.formSearchGeneral.value);
    this.postService.searchPostGeneral(this.formSearchGeneral.value).subscribe(data => {
      console.log(data);
      this.searchPostAdvancedService.sendData(data);
      this.router.navigateByUrl('post/list');
    });

  }

  cancelSearchPostGeneral() {
    this.router.navigateByUrl('post/list');
  }
}
