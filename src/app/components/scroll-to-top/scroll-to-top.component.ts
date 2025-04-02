import { Component, HostListener } from '@angular/core';
import {fadeInTopAnimation, fadeOutBottomAnimation} from "../../../animations/fade-in.animation";
import {NgIf} from "@angular/common";
import {AnimateOnScrollDirective} from "../../../animations/animate-on-scroll.directive";

@Component({
    selector: 'app-scroll-to-top',
    standalone: true,
    imports: [
        NgIf
    ],
    templateUrl: './scroll-to-top.component.html',
    styleUrl: './scroll-to-top.component.scss',
    animations: [fadeInTopAnimation, fadeOutBottomAnimation]
})
export class ScrollToTopComponent {

    isVisible = false;

    goToTop(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    @HostListener('window:scroll', [])
    onWindowScroll(): void {
        const topButton = document.getElementById('topButton');
        if (window.scrollY > 30) {
            if (topButton) topButton.style.visibility = 'visible';
            this.isVisible = true;
        } else {
            if (topButton) topButton.style.visibility = 'hidden';
            this.isVisible = false;
        }
    }
}
