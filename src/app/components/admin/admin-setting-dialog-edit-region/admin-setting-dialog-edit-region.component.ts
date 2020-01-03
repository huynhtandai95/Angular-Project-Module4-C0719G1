import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegionService } from '../../../services/region.service';

@Component({
  selector: 'app-admin-setting-dialog-edit-region',
  templateUrl: './admin-setting-dialog-edit-region.component.html',
  styleUrls: ['./admin-setting-dialog-edit-region.component.css']
})
export class AdminSettingDialogEditRegionComponent implements OnInit {
  public formEditRegion: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AdminSettingDialogEditRegionComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public formBuilder: FormBuilder,
    public regionService: RegionService
  ) { }

  ngOnInit() {
    console.log(this.data);
    this.formEditRegion = this.formBuilder.group({
      regionId: [this.data.regionData.id],
      regionName: [this.data.regionData.regionName],
      regionCode: [this.data.regionData.regionCode]
    })
  }

  editRegion() {
    console.log(this.formEditRegion.value);
    this.regionService.editRegion(this.formEditRegion.value).subscribe(data => {
      this.dialogRef.close();
    })
  }

}
