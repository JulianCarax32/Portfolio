import {Component, input, InputSignal, PlatformRef} from '@angular/core';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { Experience } from '../../../interfaces/work-experience.interface';
import {NgClass} from "@angular/common";
import {fadeInLeftAnimation, fadeInRightAnimation} from "../../../animations/fade-in.animation";
import {AnimateOnScrollDirective} from "../../../animations/animate-on-scroll.directive";
import {Platform} from "@angular/cdk/platform";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
    selector: 'app-experience-card',
    standalone: true,
    imports: [
        NgClass,
        AnimateOnScrollDirective,
        TranslatePipe
    ],
    templateUrl: './experience-card.component.html',
    styleUrl: './experience-card.component.scss',
    animations: [fadeInLeftAnimation, fadeInRightAnimation],
})
export class ExperienceCardComponent {
    public experience: InputSignal<Experience> = input.required<Experience>();
    protected readonly AssetPaths = AssetPaths;

    constructor(protected platform: Platform) {
    }
}
