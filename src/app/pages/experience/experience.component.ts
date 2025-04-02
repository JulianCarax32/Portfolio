import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';
import { AppConfig } from '../../../enums/app-data';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { ExperienceCardComponent } from '../../components/experience-card/experience-card.component';
import { AppRoutes } from '../../../enums/routes-data.enum';
import { GlobalStatsService } from '../../services/global-stats/global-stats.service';
import {DURATION_ENTER_ANIMATION} from "../../../animations/burger-menu.animation";
import {fadeInLeftAnimation, fadeInRightAnimation, fadeInTopAnimation} from "../../../animations/fade-in.animation";
import {AnimateOnScrollDirective} from "../../../animations/animate-on-scroll.directive";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [
        ExperienceCardComponent,
        AnimateOnScrollDirective,
        TranslatePipe,
    ],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss',
    animations: [fadeInTopAnimation, fadeInRightAnimation, fadeInLeftAnimation],
})
export class ExperienceComponent implements AfterViewInit {
    public appConfig = AppConfig;
    public assetPaths = AssetPaths;

    constructor(
        private _globalStates: GlobalStatsService,
        private _changeDetectorRef: ChangeDetectorRef,
    ) {
        this._globalStates.setCanonicalUrl(AppRoutes.EXPERIENCE);
    }

    ngAfterViewInit(): void {
        this._changeDetectorRef.detectChanges();
    }

    protected readonly DURATION_ENTER_ANIMATION = DURATION_ENTER_ANIMATION;
}
