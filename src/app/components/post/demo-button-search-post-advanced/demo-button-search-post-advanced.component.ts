import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogSearchPostAdvancedComponent } from '../dialog-search-post-advanced/dialog-search-post-advanced.component';

@Component({
  selector: 'app-demo-button-search-post-advanced',
  templateUrl: './demo-button-search-post-advanced.component.html',
  styleUrls: ['./demo-button-search-post-advanced.component.css']
})
export class DemoButtonSearchPostAdvancedComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogSearchPostAdvancedComponent,
      {
        width: '650px',
        disableClose: true,
        data: { name: 'Trinh Ngoc Tuan' }
      });
  }

}
