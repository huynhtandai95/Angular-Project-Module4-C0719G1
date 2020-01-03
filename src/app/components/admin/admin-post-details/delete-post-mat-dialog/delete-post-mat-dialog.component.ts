import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute,Router } from "@angular/router";
import { PostService } from "../../../../services/post.service";

@Component({
  selector: 'app-delete-post-mat-dialog',
  templateUrl: './delete-post-mat-dialog.component.html',
  styleUrls: ['./delete-post-mat-dialog.component.css']
})
export class DeletePostMatDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletePostMatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private postService:PostService,
    private router:Router
  ) { }

  ngOnInit( 
  ) {
  }
  changeStatus(){
    this.postService.changeStatusPostAppved(this.data).subscribe(data=>{
      this.router.navigateByUrl('/admin/post-approved');
    })
  }
}
