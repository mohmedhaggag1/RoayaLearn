import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from "../../../../environments/environment";
import { ApiService } from "../../../core/api.service";

@Component({
  selector: 'app-blog-details-style-one',
  templateUrl: './blog-details-style-one.component.html',
  styleUrls: ['./blog-details-style-one.component.scss']
})
export class BlogDetailsStyleOneComponent implements OnInit {

  constructor(public formBuilder: FormBuilder, private _route: Router,
    public _api: ApiService, public _ActivatedRoute: ActivatedRoute,
    public _http: HttpClient) {
  }

  public changepassword: FormGroup;
  ngOnInit(): void {

    // to change password
    this.changepassword = this.formBuilder.group({
      email: [''],
      password: [''],
      newPassword: ['']
    })

  }
  posts: any;

  Changepass() {

    this._api.ChangeMYPassword(this.changepassword.value).subscribe((response) => {
      this.posts = response;
      if (this.posts.succeeded == true) {
        alert('تم تغيير الرقم السري بنجاح')
        console.log(response)
        this.changepassword.reset();
        this._route.navigate(['login'])
      }
      else {
        alert("تأكد من صحة البريد الإلكتروني أو الرقم السري   ")
      }
    }, err => { alert("تأكد من صحة البيانات ") })

  }

}