import {Component, HostListener, ViewChild, AfterViewInit, ElementRef, OnInit} from '@angular/core';
import {
    fadeInTopAnimation,
    fadeOutBottomAnimation,
} from "../../../animations/fade-in.animation";
import { NgIf } from "@angular/common";
import { Router, NavigationEnd } from '@angular/router';
import { AnimateOnScrollDirective } from "../../../animations/animate-on-scroll.directive";

@Component({
    selector: 'app-scroll-to-bottom',
    standalone: true,
    imports: [
        NgIf
    ],
    templateUrl: './scroll-to-bottom.component.html',
    styleUrls: ['./scroll-to-bottom.component.scss'],
    animations: [fadeInTopAnimation, fadeOutBottomAnimation]
})
export class ScrollToBottomComponent implements OnInit {

    @ViewChild('bottomButton', { static: false }) bottomButton!: ElementRef;
    isVisible = false;
    private showTimeout: any;

    constructor(private router: Router) {
    }

    ngOnInit() {
        let isFirstRoundAfterSplash = true;

        // Dopo che la vista è stata inizializzata, mostra il bottone dopo 6 secondi (splash) se la condizione è valida
        this.showButtonAfterDelay(6000);

        // Ascolto gli eventi del router per mostrare il bottone quando cambia la rotta
        this.router.events.subscribe(async event => {
            if (event instanceof NavigationEnd) {
                this.isVisible = false;

                this.showButtonAfterDelay(isFirstRoundAfterSplash ? 6000 : 5000);

                isFirstRoundAfterSplash = false;
            }
        });
    }

    public showButtonAfterDelay(MS_DELAY: number = 0): void {
        if (window.scrollY > 5) this.isVisible = false;
        else
            setTimeout(() => {
                if (window.scrollY <= 5) {
                    this.isVisible = true;
                }else {
                    this.isVisible = false;
                }
            }, MS_DELAY); // Ritardo di 3 secondi
    }

    goToBottomALittle(): void {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }

    @HostListener('window:scroll', [])
    onWindowScroll(): void {
        this.showButtonAfterDelay(5000);
    }
}
