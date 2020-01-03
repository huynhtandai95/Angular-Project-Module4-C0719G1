import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegionService } from '../../../services/region.service';

@Component({
  selector: 'app-admin-setting-dialog-confirm-delete-region',
  templateUrl: './admin-setting-dialog-confirm-delete-region.component.html',
  styleUrls: ['./admin-setting-dialog-confirm-delete-region.component.css']
})
export class AdminSettingDialogConfirmDeleteRegionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdminSettingDialogConfirmDeleteRegionComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public regionService: RegionService
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

  deleteRegion() {
    this.regionService.deleteRegion(this.data.regionData.id).subscribe(data => {
      console.log(data);
      this.dialogRef.close();
    })
  }

}
