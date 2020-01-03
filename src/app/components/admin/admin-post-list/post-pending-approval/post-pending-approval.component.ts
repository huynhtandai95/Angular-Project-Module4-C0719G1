import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Posts } from "../../../../models/post.model";
import { FormBuilder, FormGroup } from "@angular/forms";
// import {  } from "@angular/router";

@Component({
  selector: 'app-post-pending-approval',
  templateUrl: './post-pending-approval.component.html',
  styleUrls: ['./post-pending-approval.component.css']
})
export class PostPendingApprovalComponent implements OnInit {
  postApprovals: Posts[] = [];
  formSearch: FormGroup;
  countPosts;
  count;
  paginateArrayPosts;
  paginateArrays;
  isCheck: boolean = true;
  idNext:number=1;
  resultPost;
  constructor(
    private postService: PostService,
    private _FormBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.search();
    this.postService.getPostApproval().subscribe((data: any) => {
      this.postApprovals = data.postApproval.data;
      this.resultPost=data.count
      this.countPosts = Math.ceil(data.count / 5);
      this.paginateArrayPosts = [];
      for (var i = 1; i <= this.countPosts; i++) {
        this.paginateArrayPosts.push(i);
      }
      // console.log(this.paginateArrayPosts);
    })
  }
  search() {
    this.formSearch = this._FormBuilder.group({
      title: ['']
    })
  }

  onClickApproval(id) {
    this.postService.getPostApprovalPangite(id).subscribe(data => {
      this.postApprovals = data.postApproval.data
    })
  }
  onClickSearch() {
    this.isCheck = false
    this.postService.searchPostApproral(this.formSearch.value).subscribe(data => {
      this.postApprovals = data.postApproval.data;
      this.count = Math.ceil(data.count / 5);
      this.paginateArrays = [];
      for (var i = 1; i <= this.count; i++) {
        this.paginateArrays.push(i);
      }
    })
  }
  clickPostApprovalPaginate(id) {
    this.isCheck = false
    this.postService.searchPostApprovalPaginate(id, this.formSearch.value).subscribe(
      data => {  this.postApprovals = data.postApproval.data; }
    )
  }

  last() {
    this.postService.searchPostApprovalPaginate(this.idNext - 1, this.formSearch.value).subscribe(data => {
      this.postApprovals = data.postApproval.data;
    })
  }
  next() {
    this.postService.searchPostApprovalPaginate(this.idNext + 1, this.formSearch.value).subscribe(data => {
      this.postApprovals = data.postApproval.data;
    })
  }
  lastPost() {
    this.isCheck = true;
    this.postService.getPostApprovalPangite(this.idNext - 1).subscribe(data => {
      this.postApprovals = data.postApproval.data;
    })
  }
  nextPost() {
    this.isCheck = true;
    this.postService.getPostApprovalPangite(this.idNext + 1).subscribe(data => {
      this.postApprovals = data.postApproval.data;
    })
  }
}
