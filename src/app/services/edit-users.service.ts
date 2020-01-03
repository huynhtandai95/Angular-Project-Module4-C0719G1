import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {editUsers  } from "src/app/models/editUsers";

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import {FileUpload  } from "../models/uploadService";




import {Observable} from "rxjs";
import { of } from "rxjs";
import { catchError,map,tap } from 'rxjs/operators'; 
import { User } from '../models/user.model';
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };


@Injectable({
  providedIn: 'root'
})
export class EditUsersService {
  public editAPI='http://127.0.0.1:8000/api/getUserById';
  public sendHelpMessageAPI='http://127.0.0.1:8000/api/editUsers';
  public editUsersAPI='http://127.0.0.1:8000/api/updateedit';

  private basePath = '/uploads';

  constructor(
    private http:HttpClient,
    private db: AngularFireDatabase,
     private storage: AngularFireStorage
    ) { }

  // getUsersfromId(id): Observable<any>{
  //   return this.http.get(this. editAPI+'/'+id).pipe(map((response: any) => response));
  // }
  
  getEditUsers(id){
    // var editUsers= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
  
   return this.http.get(this.editAPI+'/'+id)
  }
  
  sendEditUsersMessage(message:editUsers)
  {
    return this.http.put(this.sendHelpMessageAPI+'/'+message.id, message).pipe(map((response: any) => response));
  }



  sendchangepassword(message:editUsers)
  {
    var tokenHeader= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.http.post(this. editUsersAPI, message,{headers : tokenHeader}).pipe(map((response: any) => response));
  }
  pushFileToStorage(fileUpload: FileUpload): Observable<any> {
    const filePath = this.basePath + '/' + fileUpload.file.name;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);
    return storageRef.getDownloadURL();
  }
 
}
