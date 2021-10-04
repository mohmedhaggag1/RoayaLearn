import {Component, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {ApiService} from "../../../core/api.service";
import {Router} from "@angular/router";
interface InterfaceStatistics {
  blogs: number;
  categories: number;
  courses: number;
  reviews: number;
  teachers: number;
}
@Component({
  selector: 'app-funfacts-feedback',
  templateUrl: './funfacts-feedback.component.html',
  styleUrls: ['./funfacts-feedback.component.scss']
})
export class FunfactsFeedbackComponent implements OnInit {

  statistics: InterfaceStatistics;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}

  bgImage = [
    {
      img: 'assets/img/white-bg.jpg'
    }
  ];

  feedbackSlides: OwlOptions = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    rtl: true,
    animateOut: 'fadeOut',
    autoHeight: true,
    items: 1,
    navText: [
      "<i class='bx bx-chevron-right'></i>",
      "<i class='bx bx-chevron-left'></i>"
    ]
  };

/*  getStatistics(): void {
    this.apiService.GetStatistics().subscribe((response: InterfaceStatistics) => {
      this.statistics = response;
      console.error(response);
    }, error => this.router.navigateByUrl('/not-found').then(value => console.error(error)));
  }*/
}
