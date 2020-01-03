import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from "@angular/material/dialog";
import {AdminService  } from "../../../services/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-lock-employee',
  templateUrl: './lock-employee.component.html',
  styleUrls: ['./lock-employee.component.css']
})
export class LockEmployeeComponent implements OnInit {

  constructor(
    private matDialogRef:MatDialogRef<LockEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private adminService:AdminService,
    private router:Router

  ) { }

  ngOnInit() {
  }
  lockAccount(){
    this.adminService.lockAccountEmployee(this.data.id).subscribe((result:any)=>{
      console.log(result)
    })
  }
}
