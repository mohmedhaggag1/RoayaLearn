import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {ApiService} from '../../../core/api.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  allTeachers: any;
  loader = false;
  urlImage = environment.url_image;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loader = true;
    this.apiService.getAllTeachers().subscribe(response => {
      this.allTeachers = response;
      this.loader = false;
    });
  }

  goTo(teacherId): void {
    // console.log(teacherId)
    this.router.navigate(['/profile', {i: teacherId}]);
  }
}
