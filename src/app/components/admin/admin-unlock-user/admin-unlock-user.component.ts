import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-admin-unlock-user',
  templateUrl: './admin-unlock-user.component.html',
  styleUrls: ['./admin-unlock-user.component.css']
})
export class AdminUnlockUserComponent implements OnInit {
  userId;
  userName;

  constructor(
    public dialogRef: MatDialogRef<AdminUnlockUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.userId = this.data.userId;
    this.userName = this.data.userName
  }

  unlockUserAccount() {
    this.userService.unlockUserAccount(this.userId).toPromise().then(data => {
      console.log(data);
      this.dialogRef.close();
    })

  }

}
