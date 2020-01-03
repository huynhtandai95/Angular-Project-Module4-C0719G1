import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute,Router } from "@angular/router";
import { PostService } from "../../../../services/post.service";

@Component({
  selector: 'app-remove-post-mat-dialog',
  templateUrl: './remove-post-mat-dialog.component.html',
  styleUrls: ['./remove-post-mat-dialog.component.css']
})
export class RemovePostMatDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RemovePostMatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private postService:PostService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  changeStatus(){
    this.postService.changeStatusPostAppvoral(this.data).subscribe(data=>{
      this.router.navigateByUrl('/admin/post-pending-approval');
    })
  }
}
