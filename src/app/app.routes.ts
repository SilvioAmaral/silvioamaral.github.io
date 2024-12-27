import { Routes } from '@angular/router';
import { AboutMeComponent } from './aboutme/aboutme.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'about-me', component: AboutMeComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '',   redirectTo: '/about-me', pathMatch: 'full' },
    { path: '**', component: NotfoundComponent }
];
