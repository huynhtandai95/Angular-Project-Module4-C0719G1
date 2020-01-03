import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from "@angular/material/dialog";
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-unlock-employee',
  templateUrl: './unlock-employee.component.html',
  styleUrls: ['./unlock-employee.component.css']
})
export class UnlockEmployeeComponent implements OnInit {

  constructor(
    private matDialogRef:MatDialogRef<UnlockEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private adminService:AdminService,
    private router:Router
    
  ) { }

  ngOnInit() {
  }
  UnlockAccount(){
    this.adminService.unLockAccountEmployee(this.data.id).subscribe((result:any)=>{
    })
  }
}
