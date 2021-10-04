import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-feedback-style-three',
    templateUrl: './feedback-style-three.component.html',
    styleUrls: ['./feedback-style-three.component.scss']
})
export class FeedbackStyleThreeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    gymFeedbackSlides: OwlOptions = {
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        rtl: true,
        autoplay: true,
        autoHeight: true,
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-right-arrow'></i>",
            "<i class='flaticon-chevron'></i>"
        ]
    }

}