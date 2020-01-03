import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostOftypeService } from '../../../services/post-of-type.service';

@Component({
  selector: 'app-admin-setting-dialog-edit-post-of-type',
  templateUrl: './admin-setting-dialog-edit-post-of-type.component.html',
  styleUrls: ['./admin-setting-dialog-edit-post-of-type.component.css']
})
export class AdminSettingDialogEditPostOfTypeComponent implements OnInit {
  public formEditPostOfType: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AdminSettingDialogEditPostOfTypeComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public postOfTypeService: PostOftypeService,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formEditPostOfType = this.formBuilder.group({
      postOfTypeName: [this.data.postOfTypeData.postOfTypeName],
      postOfTypeCode: [this.data.postOfTypeData.postOfTypeCode],
      postOfTypeId: [this.data.postOfTypeData.id]
    })
  }

  editPostOfType() {
    console.log(this.formEditPostOfType.value);
    this.postOfTypeService.editPostOfType(this.formEditPostOfType.value).subscribe(data => {
      this.dialogRef.close();
    })
  }

}
