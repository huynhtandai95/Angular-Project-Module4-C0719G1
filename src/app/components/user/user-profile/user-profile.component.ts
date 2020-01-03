import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../../services/login.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { PostAuthUserService } from "../../../services/Auth/post-auth-user.service";
import { User } from "../../../models/user.model";
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  formSearch : FormGroup
  userDetail;
  PostByUser;
  numberOfPage;
  paginationArrays = [];
  searchPaginationArrays = [];
  selectedPage = 1;
  backgroundColorOfSelectedPage = { backgroundColor: 'rgb(74, 113, 145)' };
  backgroundColorOfNotSelectedPage = {};
  searchClick :boolean = false ;
  constructor(
    private loginService:LoginService,
    private postAuthUserService: PostAuthUserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.userDetail = new User();
    this.getUserDeltail();
    this.getPostByUser();
    this.formSearch = this.formBuilder.group({
      searchWord : ['']
    })
  }

  getUserDeltail(){
    this.loginService.getUser().subscribe(data=>{
      this.userDetail = data
      console.log(data)
    })
  }

  getPostByUser(){
    this.paginationArrays.length = 0
    this.postAuthUserService.getPostByUser().subscribe(data=>{
      this.PostByUser = data.data
      this.numberOfPage = Math.ceil(data.total / 3);
      for (var i = 1; i <= this.numberOfPage; i++) {
        this.paginationArrays.push(i);
      }
      console.log(this.paginationArrays);
    })
  }

  goToPageOfNumber(pageNumber) {
    this.postAuthUserService.goToPageOfNumber(pageNumber).subscribe(data => {
      this.PostByUser = data.data;
    })
    this.selectedPage = pageNumber;
  }

  goToPageSearchOfNumber(pageNumber) {
    this.postAuthUserService.goToPageSearchOfNumber(pageNumber,this.formSearch.value).subscribe(data => {
      this.PostByUser = data.data;
    })
    this.selectedPage = pageNumber;
    console.log(this.formSearch.value)
  }

  goToPreviousPage() {
    if (this.selectedPage != 1) {
      this.selectedPage = this.selectedPage - 1;
      //Load Trang bình thường
      if(this.searchClick == false){
        this.postAuthUserService.goToPageOfNumber(this.selectedPage).subscribe(data => {
          this.PostByUser = data.data;
        })
      }
      //Nếu Click Tìm Kiếm
      else{
        this.postAuthUserService.goToPageSearchOfNumber(this.selectedPage,this.formSearch.value).subscribe(data => {
          this.PostByUser = data.data;
        })
      }
  
    }
  }

  goToNextPage() {
    if (this.selectedPage != this.numberOfPage) {
      this.selectedPage = this.selectedPage + 1;
      //Load Trang bình thường
      if(this.searchClick == false){
        this.postAuthUserService.goToPageOfNumber(this.selectedPage).subscribe(data => {
          this.PostByUser = data.data;
        })
      }
      //Nếu Click Tìm Kiếm
      else{
        this.postAuthUserService.goToPageSearchOfNumber(this.selectedPage,this.formSearch.value).subscribe(data => {
          this.PostByUser = data.data;
         
        })
      }
     
    }
  }

  deletePost(id){
    if(confirm("Bạn có chắc chắn xóa ?")){
      this.postAuthUserService.deletePost(id).subscribe(data =>{
        this.getPostByUser()
      });
    }  
  }
  onClickSearch(){
    this.searchPaginationArrays.length = 0
    this.searchClick = true;
    this.postAuthUserService.searchTitlePost(this.formSearch.value).subscribe(data=>{
      this.PostByUser = data.data;
      this.numberOfPage = Math.ceil(data.total / 3);
      for (var i = 1; i <= this.numberOfPage; i++) {
        this.searchPaginationArrays.push(i);
      }
      console.log(this.searchPaginationArrays)
    })
    
  }
}
