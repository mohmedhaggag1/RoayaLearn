import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CountUpModule} from 'ngx-countup';
import {StickyNavModule} from 'ng2-sticky-nav';
import {TabsModule} from 'ngx-tabset';
import {NgxScrollTopModule} from 'ngx-scrolltop';
import {LightboxModule} from 'ngx-lightbox';
import {AccordionModule} from 'ngx-accordion';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/common/navbar/navbar.component';
import {FooterComponent} from './components/common/footer/footer.component';
import {ElearningSchoolComponent} from './components/pages/elearning-school/elearning-school.component';
import {ContactUsComponent} from './components/pages/contact-us/contact-us.component';
import {AboutStyleFourComponent} from './components/pages/about-style-four/about-style-four.component';
import {TeacherComponent} from './components/pages/teacher/teacher.component';
import {CoursesStyleOneComponent} from './components/pages/courses-style-one/courses-style-one.component';
import {CoursesDetailsStyleOneComponent} from './components/pages/courses-details-style-one/courses-details-style-one.component';
import {ProfileComponent} from './components/pages/profile/profile.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './core/api.service';
import {ViewAllCoursesComponent} from './components/common/view-all-courses/view-all-courses.component';
import {FunfactsFeedbackComponent} from './components/common/funfacts-feedback/funfacts-feedback.component';
import {ElearningAboutComponent} from './components/pages/elearning-school/elearning-about/elearning-about.component';
import {FeaturesStyleOneComponent} from './components/common/features-style-one/features-style-one.component';
import {ElearningBannerComponent} from './components/pages/elearning-school/elearning-banner/elearning-banner.component';
import {FeedbackComponent} from './components/common/feedback/feedback.component';
import {FunfactsStyleTwoComponent} from './components/common/funfacts-style-two/funfacts-style-two.component';
import {OurStoryComponent} from './components/pages/success-story/our-story/our-story.component';
import {HealthCoachingBannerComponent} from './components/pages/health-coaching/health-coaching-banner/health-coaching-banner.component';
import {ServicesComponent} from "./components/common/services/services.component";
import {FunfactsStyleFourComponent} from "./components/common/funfacts-style-four/funfacts-style-four.component";
import {TestimonialsStyleTwoComponent} from "./components/common/testimonials-style-two/testimonials-style-two.component";
import {PrivacyPolicyComponent} from "./components/pages/privacy-policy/privacy-policy.component";
//haggag
import { BlogStyleOneComponent } from './components/pages/blog-style-one/blog-style-one.component';
import { BlogStyleTwoComponent } from './components/pages/blog-style-two/blog-style-two.component';
import { BlogStyleThreeComponent } from './components/pages/blog-style-three/blog-style-three.component';
import { BlogStyleFourComponent } from './components/pages/blog-style-four/blog-style-four.component';
import { BlogStyleFiveComponent } from './components/pages/blog-style-five/blog-style-five.component';
import { BlogDetailsStyleOneComponent } from './components/pages/blog-details-style-one/blog-details-style-one.component';
import { BlogDetailsStyleTwoComponent } from './components/pages/blog-details-style-two/blog-details-style-two.component';
import { BlogDetailsStyleThreeComponent } from './components/pages/blog-details-style-three/blog-details-style-three.component';
import { CoursesStyleFourComponent } from './components/pages/courses-style-four/courses-style-four.component';
import { CoursesStyleFiveComponent } from './components/pages/courses-style-five/courses-style-five.component';
import { CoursesStyleSixComponent } from './components/pages/courses-style-six/courses-style-six.component';
import { CoursesStyleSevenComponent } from './components/pages/courses-style-seven/courses-style-seven.component';
import { HealthCoursesComponent } from './components/pages/health-coaching/health-courses/health-courses.component';
import { CodeInputModule } from 'angular-code-input';//verivication code


@NgModule({
  declarations: [
    AppComponent,
    ElearningSchoolComponent,
    ServicesComponent,
    ViewAllCoursesComponent,
    FunfactsStyleFourComponent,
    TestimonialsStyleTwoComponent,
    FunfactsFeedbackComponent,
    ElearningAboutComponent,
    PrivacyPolicyComponent,
    HealthCoachingBannerComponent,
    FeedbackComponent,
    FunfactsStyleTwoComponent,
    FeaturesStyleOneComponent,
    ElearningBannerComponent,
    AboutStyleFourComponent,
    TeacherComponent,
    CoursesStyleOneComponent,
    OurStoryComponent,
    CoursesDetailsStyleOneComponent,
    ProfileComponent,
    ContactUsComponent,
    NavbarComponent,
    FooterComponent,
    BlogStyleTwoComponent,
    BlogStyleThreeComponent,
    BlogStyleFourComponent,
    BlogStyleFiveComponent,
    BlogDetailsStyleOneComponent,
    BlogDetailsStyleTwoComponent,
    BlogDetailsStyleThreeComponent,
    CoursesStyleFourComponent,
    CoursesStyleFiveComponent,
    CoursesStyleSixComponent,
    CoursesStyleSevenComponent,
    HealthCoursesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    CountUpModule,
    StickyNavModule,
    TabsModule,
    NgxScrollTopModule,
    LightboxModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    CodeInputModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
