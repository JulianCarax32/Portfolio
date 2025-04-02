import { Routes } from '@angular/router';
import { AppRoutes } from '../enums/routes-data.enum';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { EducationComponent } from './pages/education/education.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';

export const routes: Routes = [
    {
        path: AppRoutes.HOME,
        component: HomeComponent,
        title: `Ivan's Portfolio`,
    },
    {
        path: AppRoutes.PROJECTS,
        component: ProjectsComponent,
        title: `Projects | Ivan's Portfolio`,
    },
    {
        path: AppRoutes.EXPERIENCE,
        component: ExperienceComponent,
        title: `Experience | Ivan's Portfolio`,
    },
    {
        path: AppRoutes.EDUCATION,
        component: EducationComponent,
        title: `Education | Ivan's Portfolio`,
    },
    {
        path: AppRoutes.ACHIEVEMENTS,
        component: AchievementsComponent,
        title: `Achievements | Ivan's Portfolio`,
    },
    {
        path: "**",
        redirectTo: AppRoutes.ERROR,
    },
    {
        path: AppRoutes.ERROR,
        component: ErrorComponent,
        title: `Error | Ivan's Portfolio`,
    }
];
