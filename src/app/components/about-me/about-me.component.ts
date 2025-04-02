import { Component } from '@angular/core';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { CommonModule } from '@angular/common';
import { AppConfig } from '../../../enums/app-data';
import {fadeInLeftAnimation, fadeInRightAnimation, fadeInTopAnimation} from "../../../animations/fade-in.animation";
import {AnimateOnScrollDirective} from "../../../animations/animate-on-scroll.directive";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [
        CommonModule,
        AnimateOnScrollDirective,
        TranslatePipe,
    ],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss',
    animations: [fadeInLeftAnimation, fadeInRightAnimation, fadeInTopAnimation],
})
export class AboutMeComponent {
    public assetPaths = AssetPaths;
    public appConfig = AppConfig;
}
