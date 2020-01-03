import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from "@angular/material/dialog";
import { AdminService } from "../../../services/admin.service";
import { DeletePostMatDialogComponent } from '../admin-post-details/delete-post-mat-dialog/delete-post-mat-dialog.component';
import { Router } from "@angular/router";

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(
private matDialogRef:MatDialogRef<DeletePostMatDialogComponent>,
@Inject(MAT_DIALOG_DATA) public data:any,
private adminService:AdminService,
private router:Router

  ) { }

  ngOnInit() {
  }
  deleteEmployee(){
    this.adminService.deleteEmployee(this.data.id).subscribe(result=>{
       window.location.href='/admin/authorization-admin';
      console.log(result);
    })
  }
}
