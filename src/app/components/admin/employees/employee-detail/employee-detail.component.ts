import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder,FormGroup } from "@angular/forms";
import { EmloyeeService } from "../../../../services/emloyee.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
 public isCheck =false;
 public isCheckEdit =false;
 public employee={};
 public success;
 public formEdit:FormGroup
  constructor(
    private loginService:LoginService,
    private employeeService:EmloyeeService,
    private __FormBuilder:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(
    
  ) {
    this.getEmployee();
  }
  open(){
    this.isCheck =true;
    this.isCheckEdit =false;
    this.formEdit=this.__FormBuilder.group({
      passwordOld:[''],
      passwordNew:[''],
      confirmPasswordNew:['']
    })
  } 
  close(){
    this.isCheck =false;
  }
  openEdit(){
    this.isCheckEdit =true;
    this.isCheck =false;
    this.formEdit=this.__FormBuilder.group({
      fullName:[''],
      address:[''],
      phoneNumber:['']
    });
    this.loginService.getUser().subscribe(data=>{
      this.formEdit.patchValue(data)
    })
  }
  closeEdit(){
    this.isCheckEdit =false;
  }
  getEmployee(){
    this.loginService.getUser().subscribe(data=>{
      this.employee=data;
    })
  }
  onClickEdit(){
    this.employeeService.editEmployee(this.formEdit.value).subscribe(data=>{
      this.getEmployee();
      this.close();
      this.closeEdit();
      this.success=data;
    })
  }
  onClickChangePassword(){
    this.employeeService.changePassword(this.formEdit.value).subscribe(data=>{
      if(data['success']==true){
      this.getEmployee();
      this.close();
      this.closeEdit();
      this.success=data['message']
    }else{
      this.success=data['message']
    }
    })

  }
}
