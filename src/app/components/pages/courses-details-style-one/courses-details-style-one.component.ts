import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../core/api.service";
import {environment} from "../../../../environments/environment";

@Component({
    selector: 'app-courses-details-style-one',
    templateUrl: './courses-details-style-one.component.html',
    styleUrls: ['./courses-details-style-one.component.scss']
})
export class CoursesDetailsStyleOneComponent implements OnInit {
    courseDetails: any;
    allCourses: any;
    loader = false;
    urlImage = environment.url_image;

    constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private router: Router) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(param => {
            this.getOneCourse(param.i);
        });
        this.getCourses();
    }

    getOneCourse(CourseId): void {
        this.loader = true;
        this.apiService.getOneCourseById(CourseId).subscribe(response => {
            this.courseDetails = response;
            this.loader = false;
        }, error => this.router.navigateByUrl('/not-found').then(value => console.error(error)));
    }

    getCourses(): void {
        this.apiService.getAllCourses().subscribe(response => {
            if (response) {
                this.allCourses = response.splice(0, 3);
            }
        }, error => this.router.navigateByUrl('/not-found').then(value => console.error(error)));
    }

    goTo(CourseId): void {
        this.router.navigate(['/details-courses', {i: CourseId}]);
    }

    
  ShowMe:boolean=false;
  toggle(){
    this.ShowMe=!this.ShowMe;
  }
}
