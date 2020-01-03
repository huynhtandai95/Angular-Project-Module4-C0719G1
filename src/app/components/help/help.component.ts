import { Component, OnInit } from '@angular/core';
import { HelpsServiceService} from "src/app/services/helps-service.service";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Helps } from "../../models/helps";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})

export class HelpComponent implements OnInit {
public helps:Helps;


  constructor(
    private helpsService:HelpsServiceService,
    private router: Router,
   
  ) { }

  ngOnInit() {
    this.helps= new Helps();
    
  }

  onadd() {
    console.log(this.helps)
    this.helpsService.addEmployeer(this.helps)
      .subscribe(data=>
        {  this.router.navigateByUrl('helpSucces');})
  }


  

}
