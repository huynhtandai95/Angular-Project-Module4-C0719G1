import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from "@angular/material/dialog";
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-remove',
  templateUrl: './dialog-remove.component.html',
  styleUrls: ['./dialog-remove.component.css']
})
export class DialogRemoveComponent implements OnInit {

  constructor(
    private matDialogRef:MatDialogRef<DialogRemoveComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private postService:PostService,
    private router:Router

  ) { }

  ngOnInit() {
  }
  changeStatus(){
    this.postService.changeStatusPostAppved(this.data).subscribe(data=>{
      this.router.navigateByUrl('/admin/post-approved');
    })
  }
}
