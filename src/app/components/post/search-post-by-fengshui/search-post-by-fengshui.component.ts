import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../../../services/post.service';
import { SearchPostAdvancedService } from '../../../services/search-post-advanced.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-post-by-fengshui',
  templateUrl: './search-post-by-fengshui.component.html',
  styleUrls: ['./search-post-by-fengshui.component.css']
})
export class SearchPostByFengshuiComponent implements OnInit {

  public formSearchByFengshui: FormGroup;
  currentDate = new Date(1990, 0, 1);
  minDate = new Date();
  maxDate = new Date();


  constructor(
    public formBuilder: FormBuilder,
    public postService: PostService,
    public searchPostAdvancedService: SearchPostAdvancedService,
    public router: Router
  ) { }

  ngOnInit() {
    this.minDate.setDate(this.minDate.getDate() - 43800);
    this.maxDate.setDate(this.maxDate.getDate() - 6570);


    this.formSearchByFengshui = this.formBuilder.group({
      yearOfBirth: [this.currentDate],
      gender: ['1']
    })
  }

  searchByFengshui() {
    var gender = this.formSearchByFengshui.value.gender;
    var yearOfBirth = this.formSearchByFengshui.value.yearOfBirth.getFullYear();
    var conditionsOfSearchPostByFengshui = {
      "gender": gender,
      "yearOfBirth": yearOfBirth
    };

    this.postService.searchPostByFengshui(conditionsOfSearchPostByFengshui).subscribe(data => {
      console.log(data);
      this.searchPostAdvancedService.sendData(data);
      this.router.navigateByUrl('post/list');
    })
  }

  cancelSearchPostByFengshui() {
    this.router.navigateByUrl('post/list');
  }

}
