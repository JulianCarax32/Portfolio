import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import { SplashComponent } from '../splash/splash.component';
import { AppConfig } from '../../../enums/app-data';
import { GlobalStatsService } from '../../services/global-stats/global-stats.service';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { SocialMediaLinksComponent } from '../../components/social-media-links/social-media-links.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { AppRoutes } from '../../../enums/routes-data.enum';
import {fadeInLeftAnimation, fadeInRightAnimation} from '../../../animations/fade-in.animation';
import {NgIf} from "@angular/common";
import {AnimateOnScrollDirective} from "../../../animations/animate-on-scroll.directive";
import {TranslatePipe} from "@ngx-translate/core";
import {Platform} from "@angular/cdk/platform";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        SplashComponent,
        SocialMediaLinksComponent,
        AboutMeComponent,
        NgIf,
        AnimateOnScrollDirective,
        TranslatePipe
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    animations: [fadeInLeftAnimation, fadeInRightAnimation],
})
export class HomeComponent implements OnInit, AfterViewInit {

    public appConfig = AppConfig
    public isAnimationPlayed: boolean;
    public assetPaths = AssetPaths;

    fadeState = 'hidden';

    constructor(
        private _globalStatsService: GlobalStatsService,
        protected platform: Platform
    ) {
        this.isAnimationPlayed = _globalStatsService.isSplashAnimationPlayed //= false;
        this._globalStatsService.setCanonicalUrl(AppRoutes.HOME);
    }

    ngOnInit(): void {
        // this.fadeState = 'visible';

        // const observer = new IntersectionObserver(
        //     ([entry]) => {
        //         if (entry.isIntersecting) {
        //             this.fadeLeftState = 'visible';
        //             observer.unobserve(this.el.nativeElement);
        //         }
        //     },
        //     { threshold: 0.3 }
        // );
        //
        // observer.observe(this.el.nativeElement);

        // const fadeElement = document.getElementById('fadeElement');
        // if (fadeElement) observer.observe(fadeElement);  // Inizia a osservare il div
    }

    ngAfterViewInit(): void {
        this._playSplashAnimation();
    }

    private _playSplashAnimation(): void {
        setTimeout(() => {
            this._globalStatsService.isSplashAnimationPlayed = true;
            this.isAnimationPlayed = true;
        }, 3200);
    }

}
