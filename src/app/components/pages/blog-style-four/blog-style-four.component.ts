import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {environment} from "../../../../environments/environment";
import {ApiService} from "../../../core/api.service";

@Component({
  selector: 'app-blog-style-four',
  templateUrl: './blog-style-four.component.html',
  styleUrls: ['./blog-style-four.component.scss']
})
export class BlogStyleFourComponent implements OnInit {

  
  constructor(public formBuilder:FormBuilder,private _route:Router,
    public _api:ApiService, public _ActivatedRoute:ActivatedRoute ,
    public _http:HttpClient) {
  }

  public SendCode :FormGroup;
ngOnInit(): void {
    this.SendCode = this.formBuilder.group({
        toEmail:['']
      })
}


posts :any;
sendMyCode(){

   this._api.sendCodeTomaile(this.SendCode.value).
   subscribe((response)=>{
     this.posts=response;
     if(this.posts.succeeded == true){
       alert('تم إرسال الكود الخاص بك') 
       console.log(response)
       this.SendCode.reset();
     }
     else{
       alert("هذا المستخدم غير موجود" )
     }
   },err=>{alert("من فضلك ادخل البريد الإلكتروني " )})
 
   
 }}