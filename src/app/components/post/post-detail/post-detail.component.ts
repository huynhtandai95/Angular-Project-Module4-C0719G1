import { Component, OnInit ,Input} from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';

import { Commentpost } from "src/app/models/commentmodels";
import {CommentserviceService  } from "src/app/services/commentservice.service";
import { ActivatedRoute,Router } from '@angular/router';
import { PostService } from "src/app/services/post.service";
import { Posts } from "src/app/models/post.model";

import { TrafficService } from "src/app/services/traffic.service";
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  paginacomment:any;
   public commentposts:Commentpost[];
   public id;
   public isCheck=true;
  
   
   postdetail:Posts;
   public viewpost={};
    ipClient;
  constructor(
    private route:ActivatedRoute,
    private routes:Router,
    private commentpostservice:CommentserviceService,
    private postserve:PostService,
    private trafficService:TrafficService,
    

  ) { 
    if(localStorage.getItem('token')==null){
      this.isCheck=true
    }else
    this.isCheck=false;
    console.log(this.isCheck)
  this.getPostFromroute();
   this.paginacomment = {
    itemsPerPage: 4,
    currentPage: 1,
    pageSize:4,
    
   
  };
  }
  getcommentpostFromServices(): void {
    //this.movies = this.movieService.getMovies();
    this.commentpostservice.getcommentpost().subscribe(updatedCommentpost => {
      this.commentposts = updatedCommentpost

    });
  }
  getPostFromroute():void{
    this.route.params.subscribe(data=>{
      this.id=data['id'],console.log(this.id)
    })
    this.postserve.getPostfromId(this.id).subscribe(post => {
      this.postdetail= post, console.log(this.postdetail)
    }); 
  }
  onadd(commentContent:string):void {
    const newComment: Commentpost= new Commentpost();
    newComment.userId=this.postdetail.userId;
    newComment.postId=this.id;
    newComment.commentContent=commentContent;
    
    this.commentpostservice.addCommentpost(newComment).subscribe(insertedComment => {
      console.log(insertedComment)
     });
    //  this.routes.navigateByUrl('detailpost/'+this.id);
     
  }
  ngOnInit() {
    this.getcommentpostFromServices();
    this.postdetail=new Posts;
    this.getip()

  }
  pageChanged(event){
  
    this.paginacomment.currentPage = event;
  }
  refresh(): void {
    window.location.reload();
}

  //Upview
  upview(){
    this.trafficService.upView(this.viewpost).subscribe(data=>{

    })
  }
  //Get Ip
  getip(){
    this.trafficService.getIPAddress().subscribe(data=>{
      this.ipClient =data['ip']
       this.viewpost={
        posts_id: this.id,
        ip: this.id+':'+this.ipClient    
      };
      this.upview()
      
    })
  }

}
