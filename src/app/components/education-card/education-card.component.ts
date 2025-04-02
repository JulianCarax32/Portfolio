import { Component, input, InputSignal } from '@angular/core';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { EducationSection } from '../../../interfaces/education.interface';
import {fadeInLeftAnimation, fadeInRightAnimation} from "../../../animations/fade-in.animation";
import {AnimateOnScrollDirective} from "../../../animations/animate-on-scroll.directive";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
    selector: 'app-education-card',
    standalone: true,
    imports: [
        AnimateOnScrollDirective,
        TranslatePipe
    ],
    templateUrl: './education-card.component.html',
    styleUrl: './education-card.component.scss',
    animations: [fadeInLeftAnimation, fadeInRightAnimation],
})
export class EducationCardComponent {
    public education: InputSignal<EducationSection> = input.required<EducationSection>();
}
