import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material";
import { PostConfirmComponent } from "../post-confirm/post-confirm.component";
import { PostEditSuccesComponent } from "../post-edit-succes/post-edit-succes.component";
import { CategoryService } from "../../../services/category.service";
import { RegionService } from "../../../services/region.service";
import { DirectionService } from "../../../services/direction.service";
import { PostAuthUserService } from "../../../services/Auth/post-auth-user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Posts } from "../../../models/post.model";
import { timeout } from 'q';
import { UploadFileService } from "../../../services/Upload/upload-file.service";
import { FileUpload } from "../../../models/fileupload";
@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  formPosts: FormGroup
  imageUrls: string = "assets/image/default.png";
  categories;
  regions;
  directions;
  valueForm;
  file;
  test;
  currentFileUpload;
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private categoryService: CategoryService,
    private regionService: RegionService,
    private directionService: DirectionService,
    private postAuthUserService: PostAuthUserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private uploadService: UploadFileService
  ) { }

  ngOnInit() {
    this.valueForm = new Posts();
    this.getPostById()
    this.createForm()
    this.getAllCategory()
    this.getAllRegions()
    this.getAllDirection()

  }
  createForm() {
    this.formPosts = this.formBuilder.group({
      id: [''],
      title: ['', [
        Validators.required,
      ]],
      categoryId: [''],
      regionId: [''],
      sellerId: [''],
      postOfTypeId: [''],
      statusOfPostId: [''],
      address: ['', [
        Validators.required
      ]],
      area: ['', [
        Validators.required,
        Validators.pattern('[0-9]+')
      ]],
      directionId: [''],
      contentPost: ['', [
        Validators.required
      ]],
      price: ['', [
        Validators.required,
        Validators.pattern('[0-9]+')
      ]],
      ableComposition: [false],
      imagePost1: [''],
      imagePost2: [''],
      imagePost3: [''],
      imagePost4: [''],
      imagePost5: [''],
      imagePost6: [''],

    })
    console.log(this.formPosts.value)
    // this.formPosts.valueChanges.subscribe(data=>{
    //   console.log(data.imagePost1)

    // })
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        // console.log(event.target.result[1]);
        this.valueForm.imagePost1 = event.target.result;

      }
      reader.readAsDataURL(event.target.files[0]);
      this.file = event.target.files.item(0)

      //             this.file = event.target.files.item(0);
      // console.log(this.file);

    }
  }

  onClickUpdate() {
    if (this.file != null) {
      this.currentFileUpload = new FileUpload(this.file);
      this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(data => {
        this.formPosts.value.imagePost1 = data
        console.log(data)
        this.postAuthUserService.UpdatePost(this.formPosts.value).subscribe(result => {
          console.log(result)
          this.dialog.open(PostEditSuccesComponent)
        setTimeout(() => {   
          window.location.href = '/user/profile'
        }, 5000);
        })
      }
      );
    }
    else{
      this.postAuthUserService.UpdatePost(this.formPosts.value).subscribe(data => {
        this.dialog.open(PostEditSuccesComponent)
        setTimeout(() => {   
          window.location.href = '/user/profile'
        }, 5000);
      })
    }
         
     
   
  }

  // CLick Update
  onClickUpdatse() {
    if (this.formPosts.value.imagePost1 != null) {
      // this.upload()
    }
    console.log(this.test)
    // if (confirm('Bạn Đồng Ý với sự thay đổi ?')) {
    // this.postAuthUserService.UpdatePost(this.formPosts.value).subscribe(data => {
    //   console.log(data)
    //     this.dialog.open(PostEditSuccesComponent)
    //     setTimeout(() => {   
    //       window.location.href = '/user/profile'
    //     }, 5000);
    // })
    // }
    // this.formPosts.value.imagePost1=1;
    console.log(this.formPosts.value.imagePost1)

  }

  // Get All Category
  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(data => {
      this.categories = data;
    })
  }

  // Get All Region
  getAllRegions() {
    this.regionService.getAllRegions().subscribe(data => {
      this.regions = data;
    })
  }

  getAllDirection() {
    this.directionService.getAllDirection().subscribe(data => {
      this.directions = data;
    })
  }

  getPostById() {
    this.activatedRoute.params.subscribe(data => {
      let id = data['id']
      this.postAuthUserService.showPostById(id).subscribe(result => {
        this.valueForm = result
        this.formPosts.patchValue(result)
      })
    })
  }
}
