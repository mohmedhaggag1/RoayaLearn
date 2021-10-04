import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {ApiService} from '../../../core/api.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-courses-style-one',
  templateUrl: './courses-style-one.component.html',
  styleUrls: ['./courses-style-one.component.scss']
})

export class CoursesStyleOneComponent implements OnInit {

  allCourses: any;
  loader = false;
  urlImage = environment.url_image;

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.loader = true;
    this.apiService.getAllCourses().subscribe(response => {
      this.allCourses = response;
      this.loader = false;
    });
  }

  goTo(CourseId): void {
    this.router.navigate(['/details-courses', {i: CourseId}]);
  }
}
