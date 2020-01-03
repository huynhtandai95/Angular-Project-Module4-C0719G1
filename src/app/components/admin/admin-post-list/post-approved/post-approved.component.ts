import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Posts } from 'src/app/models/post.model';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { DialogRemoveComponent } from '../dialog-remove/dialog-remove.component';

@Component({
  selector: 'app-post-approved',
  templateUrl: './post-approved.component.html',
  styleUrls: ['./post-approved.component.css']
})
export class PostApprovedComponent implements OnInit {
  postAppreds: Posts[] = [];
  postDetail;
  formSearch: FormGroup;
  countPost: number;
  count: number;
  paginateArrayPosts;
  paginateArrays;
  idNext: number = 1;
  isCheck: boolean = true;
  resultPost;

  constructor(
    private postService: PostService,
    private activateRouter: ActivatedRoute,
    private _FormBuider: FormBuilder,
    private dialog:MatDialog
  ) { }

  ngOnInit() {
    this.search();
    this.postService.getPostAppred().subscribe(data => {
      this.postAppreds = data.postApproval.data;
      this.resultPost=data.count;
      this.countPost = Math.ceil(data.count / 5);
      this.paginateArrayPosts = [];
      for (var i = 1; i <= this.countPost; i++) {
        this.paginateArrayPosts.push(i);
      }
      
    })
  }
  changeAvailability(postDetails) {
    const dialogRef = this.dialog.open(DialogRemoveComponent, {
      width: '500px',
      data: {
        id: postDetails.id,
        title: postDetails.title
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  search() {
    this.formSearch = this._FormBuider.group({
      title: ['']
    })
  }
  onClickGetPostAppred(id) {
    this.postService.getPostAppredPangite(id).subscribe(data => {
      this.postAppreds = data.postApproval.data
    })
  }
  onClickSearch() {
    this.isCheck = false;
    this.postService.searchPostAppred(this.formSearch.value).subscribe(data => {
      this.postAppreds = data.posts.data;
      this.count = Math.ceil(data.count / 5);
      this.paginateArrays = [];
      for (var i = 1; i <= this.count; i++) {
        this.paginateArrays.push(i);
      }
    })
  }
  clickSearchPostAppredPaginate(id) {
    
    this.idNext = id;
    this.postService.searchPostAppredPaginate(id, this.formSearch.value).subscribe(data => {
      this.postAppreds = data.posts.data;
    })
  }
  last() {
    this.postService.searchPostAppredPaginate(this.idNext - 1, this.formSearch.value).subscribe(data => {
      this.postAppreds = data.posts.data;
    })
  }
  next() {
    this.postService.searchPostAppredPaginate(this.idNext + 1, this.formSearch.value).subscribe(data => {
      this.postAppreds = data.posts.data;
    })
  }
  lastPost() {
    this.isCheck = true;
    this.postService.getPostAppredPangite(this.idNext - 1).subscribe(data => {
      this.postAppreds = data.postApproval.data;
    })
  }
  nextPost() {
    this.isCheck = true;
    this.postService.getPostAppredPangite(this.idNext + 1).subscribe(data => {
      this.postAppreds = data.postApproval.data;
    })
  }
}
