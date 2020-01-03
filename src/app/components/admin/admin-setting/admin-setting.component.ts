import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { RegionService } from '../../../services/region.service';
import { PostOftypeService } from '../../../services/post-of-type.service';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminSettingDialogConfirmDeleteCategoryComponent } from '../admin-setting-dialog-confirm-delete-category/admin-setting-dialog-confirm-delete-category.component';
import { AdminSettingDialogEditCategoryComponent } from '../admin-setting-dialog-edit-category/admin-setting-dialog-edit-category.component';
import { AdminSettingDialogConfirmDeleteRegionComponent } from '../admin-setting-dialog-confirm-delete-region/admin-setting-dialog-confirm-delete-region.component';
import { AdminSettingDialogEditRegionComponent } from '../admin-setting-dialog-edit-region/admin-setting-dialog-edit-region.component';
import { AdminSettingDialogConfirmDeletePostOfTypeComponent } from '../admin-setting-dialog-confirm-delete-post-of-type/admin-setting-dialog-confirm-delete-post-of-type.component';
import { AdminSettingDialogEditPostOfTypeComponent } from '../admin-setting-dialog-edit-post-of-type/admin-setting-dialog-edit-post-of-type.component';

@Component({
  selector: 'app-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrls: ['./admin-setting.component.css']
})
export class AdminSettingComponent implements OnInit {
  public categorys;
  public regions;
  public postOfTypes;
  public formCreateNewCategory: FormGroup;
  public formCreateNewRegion: FormGroup;
  public formCreateNewPostOfType: FormGroup;

  constructor(
    public categoryService: CategoryService,
    public regionService: RegionService,
    public postOfTypeService: PostOftypeService,
    public formBuilder: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.categoryService.getAllCategory().subscribe(data => {
      this.categorys = data;
      console.log(this.categorys);
    })

    this.regionService.getAllRegionsOfAdminSetting().subscribe(data => {
      this.regions = data;
      console.log(this.regions);
    })

    this.postOfTypeService.getAllPostOfTypeOfAdminSetting().subscribe(data => {
      this.postOfTypes = data;
      console.log(this.postOfTypes);
    })

    this.formCreateNewCategory = this.formBuilder.group({
      categoryCode: [''],
      categoryName: ['']
    })

    this.formCreateNewRegion = this.formBuilder.group({
      regionCode: [''],
      regionName: ['']
    })

    this.formCreateNewPostOfType = this.formBuilder.group({
      postOfTypeName: [''],
      postOfTypeCode: ['']
    })

  }

  createNewCategory() {
    this.categoryService.createNewCategory(this.formCreateNewCategory.value).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

  createNewRegion() {
    this.regionService.createNewRegion(this.formCreateNewRegion.value).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    })
  }

  openDialogConfirmDeleteCategory(category) {
    const dialogRef = this.dialog.open(AdminSettingDialogConfirmDeleteCategoryComponent, {
      width: '500px',
      data: {
        categoryData: category
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  openDialogEditCategory(category) {
    console.log(category);
    const dialogRef = this.dialog.open(AdminSettingDialogEditCategoryComponent, {
      width: '500px',
      data: {
        categoryData: category
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }


  openDialogConfirmDeleteRegion(region) {
    const dialogRef = this.dialog.open(AdminSettingDialogConfirmDeleteRegionComponent, {
      width: '500px',
      data: {
        regionData: region
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  openDialogEditRegion(region) {
    const dialogRef = this.dialog.open(AdminSettingDialogEditRegionComponent, {
      width: '500px',
      data: {
        regionData: region
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  createNewPostOfType() {
    this.postOfTypeService.createNewPostOfType(this.formCreateNewPostOfType.value).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    })
  }


  openDialogConfirmDeletePostOfType(postOfType) {
    const dialogRef = this.dialog.open(AdminSettingDialogConfirmDeletePostOfTypeComponent, {
      width: '500px',
      data: {
        postOfTypeData: postOfType
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  openDialogEditPostOfType(postOfType) {
    const dialogRef = this.dialog.open(AdminSettingDialogEditPostOfTypeComponent, {
      width: '500px',
      data: {
        postOfTypeData: postOfType
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });

  }


}
