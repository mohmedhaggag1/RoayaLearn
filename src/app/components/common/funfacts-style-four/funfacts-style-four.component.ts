import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {environment} from "../../../../environments/environment";
import {ApiService} from "../../../core/api.service";

@Component({
  selector: 'app-funfacts-style-four',
  templateUrl: './funfacts-style-four.component.html',
  styleUrls: ['./funfacts-style-four.component.scss']
})
export class FunfactsStyleFourComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,public _route:Router,
    public _api:ApiService, public _ActivatedRoute:ActivatedRoute ,
    public _http:HttpClient) {
      this.geteveryStat()
   }

	 
	 statis :any;
	 geteveryStat(){
		this._api.getAllStatistics().subscribe((data) => { this.statis = data; })
    console.log(this.statis)
	 }
	
   bgImage = 'assets/img/white-bg.jpg';

  ngOnInit(): void {
		
	}

}
