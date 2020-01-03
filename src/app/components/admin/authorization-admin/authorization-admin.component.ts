import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DeleteEmployeeComponent } from "../delete-employee/delete-employee.component";
import { LockEmployeeComponent } from "../lock-employee/lock-employee.component";
import { UnlockEmployeeComponent } from "../unlock-employee/unlock-employee.component";
import { EmloyeeService } from "../../../services/emloyee.service";
import { AdminService } from "../../../services/admin.service";
import { FormBuilder,FormGroup } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-authorization-admin',
  templateUrl: './authorization-admin.component.html',
  styleUrls: ['./authorization-admin.component.css']
})
export class AuthorizationAdminComponent implements OnInit {
employees;
levels;
formEmloyee:FormGroup;
  constructor(
    private dialog:MatDialog,
    private __FormBuilder:FormBuilder,
    private employeeService:EmloyeeService,
    private adminSerive:AdminService,
    private router:Router
  ) { }

  ngOnInit() {
    this.getEmployee();
    this.getLevelUser();
    this.addEmployee();
  }


  getEmployee(){
    this.employeeService.getEmloyees().subscribe(data=>{
     this.employees=data
    })
  }
  getLevelUser(){
    this.adminSerive.getLevelUser().subscribe(data=>{
      this.levels=data;
    })
  }
addEmployee(){
  this.formEmloyee=this.__FormBuilder.group({
    email:[''],
    address:[''],
    fullName:[''],
    level:['']
  })
  this.formEmloyee.valueChanges.subscribe(
    data=>{
      console.log(data);
    }
  )
}
onClickAddEmployee(){
  this.employeeService.addEmloyee(this.formEmloyee.value).subscribe(data=>{
    window.location.href='/admin/authorization-admin'
  })
}
deleltEmployee(employee){
  const dialogRf=this.dialog.open(DeleteEmployeeComponent,{
    width:'500px',
    data:{
      id:employee.id,
      fullName:employee.fullName
    }
  });
  dialogRf.afterClosed().subscribe(result=>{
    this.ngOnInit();  
  })
}

lockEmployee(employee){
  console.log(employee);
  const dialogRf=this.dialog.open(LockEmployeeComponent,{
    width:'500px',
    data:{
      id:employee.id,
      fullName:employee.fullName
    }
  });
  dialogRf.afterClosed().subscribe(result=>{
    this.ngOnInit();  
  })
}

unLockEmployee(employee){
  const dialogRf=this.dialog.open(UnlockEmployeeComponent,{
    width:'500px',
    data:{
      id:employee.id,
      fullName:employee.fullName
    }
  });
  dialogRf.afterClosed().subscribe(result=>{
    this.ngOnInit();  
  })
}

}
