import { Component } from '@angular/core';
import { AppConfig } from '../../../enums/app-data';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { AppRoutes } from '../../../enums/routes-data.enum';
import { GlobalStatsService } from '../../services/global-stats/global-stats.service';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import {fadeInLeftAnimation, fadeInRightAnimation, fadeInTopAnimation} from "../../../animations/fade-in.animation";
import {AnimateOnScrollDirective} from "../../../animations/animate-on-scroll.directive";

@Component({
    selector: 'app-achievements',
    standalone: true,
    imports: [
        ProjectCardComponent,
        AnimateOnScrollDirective
    ],
    templateUrl: './achievements.component.html',
    styleUrl: './achievements.component.scss',
    animations: [fadeInLeftAnimation, fadeInRightAnimation, fadeInTopAnimation],
})
export class AchievementsComponent {
    public assetPaths = AssetPaths;
    public appConfig = AppConfig;

    constructor(
        private _globalStates: GlobalStatsService,
    ) {
        this._globalStates.setCanonicalUrl(AppRoutes.ACHIEVEMENTS);
    }
}
