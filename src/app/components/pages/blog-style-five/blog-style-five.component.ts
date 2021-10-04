import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {environment} from "../../../../environments/environment";
import {ApiService} from "../../../core/api.service";

@Component({
  selector: 'app-blog-style-five',
  templateUrl: './blog-style-five.component.html',
  styleUrls: ['./blog-style-five.component.scss']
})
export class BlogStyleFiveComponent implements OnInit {
//to send my recived code  عشان نسيت الباسورد 
public MyDataTOchange :FormGroup;
constructor(public formBuilder:FormBuilder,private _route:Router,
  public _api:ApiService, public _ActivatedRoute:ActivatedRoute ,
  public _http:HttpClient) {
}

    ngOnInit(): void {
      this.MyDataTOchange = this.formBuilder.group({
        email:[''],
        code:[''],
        newPassword:['']
      })
    }

  
// this called every time when user changed the code
onCodeChanged(code1: string) { // دي بيتجيب رقم برقم بس مستخدمتهاش 

}

// this called only if user entered full code

onCodeCompleted(code: number) { // دي اول مايخلص ادخال الرقم بتجيبه ع بعضه 
  this.MyDataTOchange.get('code').setValue(code);
  
}
  
// get new  password when forget 
posts:any;
ForGEtPassWOrd(){

  this._api.forgetpassword(this.MyDataTOchange.value).subscribe((response)=>{
    this.posts=response;
    if(this.posts.succeeded == true){
    alert('تم تغيير الرقم السري بنجاح') 
      console.log(response)
      this.MyDataTOchange.reset();
      this._route.navigate(['login'])
    }
    else{
      alert('تأكد من صحة البريد الإلكتروني أو الكود')
    }
  },err=>{alert("تأكد من صحة البريد الإلكتروني أو الكود" )})
}

}