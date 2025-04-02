import { Component } from '@angular/core';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { AppConfig } from '../../../enums/app-data';
import { EducationCardComponent } from '../../components/education-card/education-card.component';
import { GlobalStatsService } from '../../services/global-stats/global-stats.service';
import { AppRoutes } from '../../../enums/routes-data.enum';
import {DURATION_ENTER_ANIMATION} from "../../../animations/burger-menu.animation";
import {fadeInLeftAnimation, fadeInRightAnimation, fadeInTopAnimation} from "../../../animations/fade-in.animation";
import {AnimateOnScrollDirective} from "../../../animations/animate-on-scroll.directive";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
    selector: 'app-education',
    standalone: true,
    imports: [
        EducationCardComponent,
        AnimateOnScrollDirective,
        TranslatePipe,
    ],
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss',
    animations: [fadeInRightAnimation, fadeInLeftAnimation, fadeInTopAnimation],
})
export class EducationComponent {
    public assetPaths = AssetPaths;
    public appConfig = AppConfig;

    constructor(
        private _globalStates: GlobalStatsService,
    ) {
        this._globalStates.setCanonicalUrl(AppRoutes.EDUCATION);
    }

    protected readonly DURATION_ENTER_ANIMATION = DURATION_ENTER_ANIMATION;
}
