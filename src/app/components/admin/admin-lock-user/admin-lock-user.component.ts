import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-lock-user',
  templateUrl: './admin-lock-user.component.html',
  styleUrls: ['./admin-lock-user.component.css']
})
export class AdminLockUserComponent implements OnInit {
  userId;
  userName;
  reasonLockUserAccount;
  dataLockUserAccount;

  constructor(
    public dialogRef: MatDialogRef<AdminLockUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public userService: UserService,
    public router: Router
  ) { }

  ngOnInit() {
    this.userId = this.data.userId;
    this.userName = this.data.userName
  }

  lockUserAccount() {
    this.dataLockUserAccount = {
      "userId": this.userId,
      "reasonLockUserAccount": this.reasonLockUserAccount
    }

    console.log(this.dataLockUserAccount);

    this.userService.lockUserAccount(this.dataLockUserAccount).toPromise().then(data => {
      console.log(data);
      this.dialogRef.close();
    })



  }

}
