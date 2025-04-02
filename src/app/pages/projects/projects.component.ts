import {CommonModule, NgOptimizedImage} from '@angular/common';
import { Component } from '@angular/core';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { AppConfig } from '../../../enums/app-data';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { AppRoutes } from '../../../enums/routes-data.enum';
import { GlobalStatsService } from '../../services/global-stats/global-stats.service';
import {DURATION_ENTER_ANIMATION} from "../../../animations/burger-menu.animation";
import {fadeInLeftAnimation, fadeInRightAnimation, fadeInTopAnimation} from "../../../animations/fade-in.animation";
import {AnimateOnScrollDirective} from "../../../animations/animate-on-scroll.directive";
import {TranslatePipe} from "@ngx-translate/core";
import {Project} from "../../../interfaces/project.interface";

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [
        CommonModule,
        ProjectCardComponent,
        NgOptimizedImage,
        AnimateOnScrollDirective,
        TranslatePipe,
    ],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    animations: [fadeInLeftAnimation, fadeInRightAnimation, fadeInTopAnimation],
})
export class ProjectsComponent {
    public assetPaths = AssetPaths;
    public appConfig = AppConfig;

    protected selectedProject!: Project | null;

    constructor(
        private _globalStates: GlobalStatsService,
    ) {
        this._globalStates.setCanonicalUrl(AppRoutes.PROJECTS);
    }

    toggleProjectSelection(project: Project) {
        this.selectedProject = project.title == this.selectedProject?.title ? null : project;
    }

    protected readonly DURATION_ENTER_ANIMATION = DURATION_ENTER_ANIMATION;
}
