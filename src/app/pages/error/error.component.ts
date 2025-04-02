import { Component } from '@angular/core';
import {fadeInTopAnimation} from "../../../animations/fade-in.animation";
import {AnimateOnScrollDirective} from "../../../animations/animate-on-scroll.directive";

@Component({
    selector: 'app-error',
    standalone: true,
    imports: [
        AnimateOnScrollDirective
    ],
    templateUrl: './error.component.html',
    styleUrl: './error.component.scss',
    animations: [fadeInTopAnimation],
})
export class ErrorComponent {

}
