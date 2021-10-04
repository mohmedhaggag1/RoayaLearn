import { CoursesStyleSixComponent } from './components/pages/courses-style-six/courses-style-six.component';
import { HealthBlogComponent } from './components/pages/health-coaching/health-blog/health-blog.component';
import { BlogDetailsStyleTwoComponent } from './components/pages/blog-details-style-two/blog-details-style-two.component';
import { BlogDetailsStyleOneComponent } from './components/pages/blog-details-style-one/blog-details-style-one.component';
import { BlogStyleThreeComponent } from './components/pages/blog-style-three/blog-style-three.component';
import { BlogStyleTwoComponent } from './components/pages/blog-style-two/blog-style-two.component';
//
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElearningSchoolComponent } from './components/pages/elearning-school/elearning-school.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { AboutStyleFourComponent } from './components/pages/about-style-four/about-style-four.component';
import { TeacherComponent } from './components/pages/teacher/teacher.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { CoursesStyleOneComponent } from './components/pages/courses-style-one/courses-style-one.component';
import { CoursesDetailsStyleOneComponent } from './components/pages/courses-details-style-one/courses-details-style-one.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import {PrivacyPolicyComponent} from "./components/pages/privacy-policy/privacy-policy.component";
import { BlogStyleFourComponent } from './components/pages/blog-style-four/blog-style-four.component';
import { BlogStyleFiveComponent } from './components/pages/blog-style-five/blog-style-five.component';
import { CoursesStyleFourComponent } from './components/pages/courses-style-four/courses-style-four.component';
import { CoursesStyleFiveComponent } from './components/pages/courses-style-five/courses-style-five.component';
import { CoursesStyleSevenComponent } from './components/pages/courses-style-seven/courses-style-seven.component';
import { BlogDetailsStyleThreeComponent } from './components/pages/blog-details-style-three/blog-details-style-three.component';
import { AdminGuardGuard } from 'src/admin-guard.guard';

const routes: Routes = [
    {path: '', component: ElearningSchoolComponent},
    {path: 'home', component: ElearningSchoolComponent},
    {path: 'about', component: AboutStyleFourComponent},
    {path: 'teacher', component: TeacherComponent},
    {path: 'courses', component: CoursesStyleOneComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'details-courses', component: CoursesDetailsStyleOneComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'contact', component: ContactUsComponent},
    // Here add new pages component
    //haggag
    {path: 'login' , component : BlogStyleTwoComponent},
    {path : 'register' ,component :BlogStyleThreeComponent},
    {path : 'forget-Password' ,component :BlogStyleFourComponent},
    {path : 'send-Code' , component :BlogStyleFiveComponent},
    {path :'Change-Password' ,component :BlogDetailsStyleOneComponent},
    //dashbord
    {path : 'BlogDetailsStyleThreeComponent', component :BlogDetailsStyleThreeComponent ,canActivate:[AdminGuardGuard]},
    {path : 'delete-teacher' ,component : CoursesStyleFiveComponent ,canActivate:[AdminGuardGuard]},
    {path : 'add-teacher' , component :CoursesStyleFourComponent ,canActivate:[AdminGuardGuard]},
    {path : 'add-course' ,component : CoursesStyleSixComponent ,canActivate:[AdminGuardGuard]},
    {path : 'delete-course' , component :CoursesStyleSevenComponent ,canActivate:[AdminGuardGuard]},
    {path: '**', component: ErrorComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
