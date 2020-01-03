import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-admin-setting-dialog-confirm-delete-category',
  templateUrl: './admin-setting-dialog-confirm-delete-category.component.html',
  styleUrls: ['./admin-setting-dialog-confirm-delete-category.component.css']
})
export class AdminSettingDialogConfirmDeleteCategoryComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdminSettingDialogConfirmDeleteCategoryComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public categoryService: CategoryService) { }


  ngOnInit() {
    console.log(this.data);
  }

  deleteCategory() {
    console.log(this.data.categoryData.id);
    this.categoryService.deleteCategory(this.data.categoryData.id).subscribe(data => {
      console.log(data);
      this.dialogRef.close();
    });

  }

}
