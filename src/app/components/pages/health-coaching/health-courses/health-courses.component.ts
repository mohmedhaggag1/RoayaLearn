import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-health-courses',
    templateUrl: './health-courses.component.html',
    styleUrls: ['./health-courses.component.scss']
})
export class HealthCoursesComponent implements OnInit {

    
	constructor() { }

	active: boolean = false;
  
  
	onClick() {
	  this.active = !this.active
	}
  
	ngOnInit(): void {
	}
  
  }
  