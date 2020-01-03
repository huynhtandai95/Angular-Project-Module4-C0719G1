import { Component, OnInit } from '@angular/core';
import { PostService } from "../../../../services/post.service";
import { Posts } from 'src/app/models/post.model';
import { ActivatedRoute,Router } from '@angular/router';
import { MatDialog } from "@angular/material/dialog";
import { RemovePostMatDialogComponent } from "../remove-post-mat-dialog/remove-post-mat-dialog.component";

@Component({
  selector: 'app-post-details-pending-approval',
  templateUrl: './post-details-pending-approval.component.html',
  styleUrls: ['./post-details-pending-approval.component.css']
})
export class PostDetailsPendingApprovalComponent implements OnInit {
  postDetails;
  id: number;
  constructor(
    private postService: PostService,
    private activateRouter: ActivatedRoute,
    private router:Router,
    private dialog:MatDialog
  ) { }

  ngOnInit() {
    this.postDetails = new Posts;
    this.activateRouter.params.subscribe(params => {
      this.id = params['id']
    })
    this.postService.getPostDetailApproval(this.id).subscribe(data => {
      this.postDetails = data
    })
  }

  changeAvailability() {
    const dialogRef = this.dialog.open(RemovePostMatDialogComponent, {
      width: '500px',
      data: {
        id: this.postDetails.id,
        title: this.postDetails.title
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

}
