import { Component } from '@angular/core';
import { AppConfig } from '../../../enums/app-data';
import {fadeInBottomAnimation} from "../../../animations/fade-in.animation";
import {AnimateOnScrollDirective} from "../../../animations/animate-on-scroll.directive";

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [
        AnimateOnScrollDirective
    ],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    animations: [fadeInBottomAnimation]
})
export class FooterComponent {
    public readonly currentDate = new Date();
    public readonly currentYear = this.currentDate.getFullYear();

    public appConfig = AppConfig;
}
