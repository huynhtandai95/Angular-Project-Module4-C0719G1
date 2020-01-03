import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import { FileUpload } from '../../models/fileupload';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  private basePath = '/uploads';
  constructor(
    private db: AngularFireDatabase, 
    private storage: AngularFireStorage
    )  {}

    pushFileToStorage(fileUpload: FileUpload): Observable<any> {
      const filePath = this.basePath + '/' + fileUpload.file.name;
      const storageRef = this.storage.ref(filePath);
      const uploadTask = this.storage.upload(filePath, fileUpload.file);
      return storageRef.getDownloadURL();
    }
}
