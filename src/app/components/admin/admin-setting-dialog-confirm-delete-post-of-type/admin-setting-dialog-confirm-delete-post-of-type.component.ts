import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostOftypeService } from '../../../services/post-of-type.service';

@Component({
  selector: 'app-admin-setting-dialog-confirm-delete-post-of-type',
  templateUrl: './admin-setting-dialog-confirm-delete-post-of-type.component.html',
  styleUrls: ['./admin-setting-dialog-confirm-delete-post-of-type.component.css']
})
export class AdminSettingDialogConfirmDeletePostOfTypeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdminSettingDialogConfirmDeletePostOfTypeComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public postOfTypeService: PostOftypeService
  ) { }

  ngOnInit() {
  }

  deletePostOfType() {
    this.postOfTypeService.deletePostOfType(this.data.postOfTypeData.id).subscribe(data => {
      console.log(data);
      this.dialogRef.close();
    })
  }

}
