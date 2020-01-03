import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-admin-setting-dialog-edit-category',
  templateUrl: './admin-setting-dialog-edit-category.component.html',
  styleUrls: ['./admin-setting-dialog-edit-category.component.css']
})
export class AdminSettingDialogEditCategoryComponent implements OnInit {
  public formEditCategory: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AdminSettingDialogEditCategoryComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public formBuilder: FormBuilder,
    public categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.formEditCategory = this.formBuilder.group({
      categoryId: [this.data.categoryData.id],
      categoryCode: [this.data.categoryData.categoryCode],
      categoryName: [this.data.categoryData.categoryName]
    })
  }

  editCategory() {
    this.categoryService.editCategory(this.formEditCategory.value).subscribe(data => {
      this.dialogRef.close();
    })
  }

}
