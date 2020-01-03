import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Posts } from 'src/app/models/post.model';
import { ActivatedRoute,Router } from '@angular/router';
import { MatDialog } from "@angular/material/dialog";
import { DeletePostMatDialogComponent } from "../delete-post-mat-dialog/delete-post-mat-dialog.component";

@Component({
  selector: 'app-post-details-approved',
  templateUrl: './post-details-approved.component.html',
  styleUrls: ['./post-details-approved.component.css']
})
export class PostDetailsApprovedComponent implements OnInit {
  postDetails;
  id;
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
    this.postService.getPostfromId(this.id).subscribe(data => {
      this.postDetails = data;
    })
  }
  changeAvailability() {
    const dialogRef = this.dialog.open(DeletePostMatDialogComponent, {
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
