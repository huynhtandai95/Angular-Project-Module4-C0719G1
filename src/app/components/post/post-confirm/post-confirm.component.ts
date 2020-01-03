import { Component, OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { MAT_DIALOG_DATA, MatDialogRef,MatDialog } from "@angular/material";
import { PostSuccessComponent} from "../post-success/post-success.component";
import { PostAuthUserService } from "../../../services/Auth/post-auth-user.service";
import { DirectionService } from "../../../services/direction.service";
import { PostOftypeService } from "../../../services/post-of-type.service";
import { SellerService } from "../../../services/seller.service";
import { StatusOfPostService } from "../../../services/status-of-post.service";
import { CategoryService } from "../../../services/category.service";
import { RegionService } from "../../../services/region.service";
import { UploadFileService } from "../../../services/Upload/upload-file.service";
import { FileUpload } from "../../../models/fileupload";
@Component({
  selector: 'app-post-confirm',
  templateUrl: './post-confirm.component.html',
  styleUrls: ['./post-confirm.component.css']
})
export class PostConfirmComponent implements OnInit {
  direction;
  postOftype;
  seller;
  statusOfPost;
  category;
  region;
  err;
  imageUrls:string = "assets/image/default.png";
  currentFileUpload;
  file;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PostConfirmComponent>,
    private router: Router,
    private postAuthUserService: PostAuthUserService,
    private directionService: DirectionService,
    private postOftypeService: PostOftypeService,
    private sellerService: SellerService,
    private statusOfPostService: StatusOfPostService,
    private categoryService: CategoryService,
    private regionService: RegionService,
    public dialog: MatDialog,
    private uploadService: UploadFileService
  ) { }

  ngOnInit() {
    this.getAllInputPost()
    this.imageUrls = this.data.imagePre
  }

  // Click Cancel
  onClickBack() {
    this.dialogRef.close();
  }
  onClickAdd(){
    this.currentFileUpload = new FileUpload(this.data.form.imagePost1);
    this.uploadService.pushFileToStorage(this.currentFileUpload).toPromise().then(data => {
      this.data.form.imagePost1 = data
      this.postAuthUserService.createNewPost(this.data.form).subscribe(data => {   
        this.dialogRef.close()
      this.dialog.open(PostSuccessComponent)   
      setTimeout(() => {   
        window.location.href = '/user/profile'
      }, 5000);   
    }, error =>{
      this.err = error.error.errors
    })
    }
    );

  }

  // Click Add new Post
  // onClickAdd() {
  //   this.upload()

  //   this.postAuthUserService.createNewPost(this.data).subscribe(data => {   
  //       this.dialogRef.close()
  //     this.dialog.open(PostSuccessComponent)   
  //     setTimeout(() => {   
  //       window.location.href = '/user/profile'
  //     }, 5000);   
  //   }, error =>{
  //     this.err = error.error.errors
  //   })
    
  // }

  // Get All Input Post through Variable Data -- MAT_DIALOG_DATA
  getAllInputPost() {
    this.directionService.getDirectionById(this.data.form.directionId).subscribe(result => {
      this.direction = result.directionName
    })

    this.postOftypeService.getPostOfTypeById(this.data.form.postOfTypeId).subscribe(result => {
      this.postOftype = result.postOfTypeName
    })


    this.sellerService.getSellerById(this.data.form.sellerId).subscribe(result => {
      this.seller = result.sellerName
    })


    this.statusOfPostService.getStatusOfPostId(this.data.form.statusOfPostId).subscribe(result => {
      this.statusOfPost = result.statusOfPostName
    })


    this.categoryService.getCategoryById(this.data.form.categoryId).subscribe(result => {
      this.category = result.categoryName
    })


    this.regionService.getRegionById(this.data.form.regionId).subscribe(result => {
      this.region = result.regionName
    })
  }
}
