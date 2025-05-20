import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { UserLoginComponent } from './screens/user-login/user-login.component';
import { RecruiterLoginComponent } from './screens/recruiter-login/recruiter-login.component';
import { CurriculumComponent } from './screens/curriculum/curriculum.component';    
export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'user-login',
        component: UserLoginComponent
    },
    {
        path:'recruiter-login',
        component: RecruiterLoginComponent
    },
    {
        path:'curriculum',
        component: CurriculumComponent
    }

];
