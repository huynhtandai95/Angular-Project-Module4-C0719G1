import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { PostService } from '../../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminLockUserComponent } from '../admin-lock-user/admin-lock-user.component';
import { AdminUnlockUserComponent } from '../admin-unlock-user/admin-unlock-user.component';

@Component({
  selector: 'app-admin-user-detail',
  templateUrl: './admin-user-detail.component.html',
  styleUrls: ['./admin-user-detail.component.css']
})
export class AdminUserDetailComponent implements OnInit {
  user;
  posts;
  numberOfPost;
  numberOfPage;
  paginationArrays;
  selectedPage = 1;
  backgroundColorOfSelectedPage = { backgroundColor: 'rgb(74, 113, 145)' };
  backgroundColorOfNotSelectedPage = {};

  constructor(
    public userService: UserService,
    public activateRoute: ActivatedRoute,
    public postService: PostService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(data => {

      // Start get user information
      this.userService.getUserById(data['id']).toPromise().then(data => {
        this.user = data[0];
        console.log(this.user);
        // End get user information


        //Start get numberOfPost and Create pagination bar
        this.postService.getNumberOfPostOfUserByUserId(this.user.id).toPromise().then(data => {
          this.numberOfPost = data;
          this.numberOfPage = Math.ceil(this.numberOfPost / 3);
          console.log(this.numberOfPage);
          this.paginationArrays = [];
          for (var i = 1; i <= this.numberOfPage; i++) {
            this.paginationArrays.push(i);
          }
          console.log(this.paginationArrays);
        });
        //End get numberOfPost and Create pagination bar


        // Start allPostOfUser by userId
        this.postService.getAllPostOfUserByUserId(this.user.id).toPromise().then(data => {
          this.posts = data.data;
          console.log(this.posts);
        });
        // End allPostOfUser by userId

      });
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AdminLockUserComponent, {
      width: '500px',
      data: {
        userId: this.user.id,
        userName: this.user.fullName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(AdminUnlockUserComponent, {
      width: '500px',
      data: {
        userId: this.user.id,
        userName: this.user.fullName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }


  goToPageOfNumber(pageNumber, userId) {
    this.postService.getAllPostOfUserByUserIdAndPageNumber(pageNumber, userId).subscribe(data => {
      this.posts = data.data;
    });
    this.selectedPage = pageNumber;
    console.log(this.selectedPage);
  }

  goToPreviousPage(userId) {
    if (this.selectedPage != 1) {
      this.selectedPage = this.selectedPage - 1;
      this.postService.getAllPostOfUserByUserIdAndPageNumber(this.selectedPage, userId).subscribe(data => {
        this.posts = data.data;
      });
    }
  }

  goToNextPage(userId) {
    if (this.selectedPage != this.numberOfPage) {
      this.selectedPage = this.selectedPage + 1;
      this.postService.getAllPostOfUserByUserIdAndPageNumber(this.selectedPage, userId).subscribe(data => {
        this.posts = data.data;
      });
    }
  }
}
