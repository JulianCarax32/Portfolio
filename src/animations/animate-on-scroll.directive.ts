import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ANIMATION_DURATION_MS, TRANSLATE_DISTANCE_PX } from './fade-in.animation';

// https://medium.com/@nemanjablagojevic/animate-elements-on-scroll-with-intersection-observer-in-angular-f91d98a92d13
@Directive({
    selector: '[animateOnScroll]',
    standalone: true,
})
export class AnimateOnScrollDirective implements OnInit {

    @Input('animateOnScroll') animationName: string = 'fadeInLeft'; // Nome dell'animazione

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        // Setta gli stili iniziali in base all'animazione scelta
        const initialStyles = this.getInitialStyles(this.animationName);
        Object.keys(initialStyles).forEach((key) => {
            this.renderer.setStyle(this.el.nativeElement, key, initialStyles[key]);
        });

        // Observer per attivare l'animazione quando entra nel viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.applyAnimation();
                    observer.unobserve(this.el.nativeElement);
                }
            });
        },
            { threshold: 0.15 }
        );

        observer.observe(this.el.nativeElement);
    }

    private applyAnimation() {
        this.renderer.setStyle(this.el.nativeElement, 'transition', `all ${ANIMATION_DURATION_MS}ms ease-out`);
        this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(0, 0)');
    }

    private getInitialStyles(animationName: string): any {
        const distance = `${TRANSLATE_DISTANCE_PX}px`;
        switch (animationName) {
            case 'fadeInLeft': return { opacity: '0', transform: `translateX(${distance})` };
            case 'fadeInRight': return { opacity: '0', transform: `translateX(-${distance})` };
            case 'fadeInTop': return { opacity: '0', transform: `translateY(${distance})` };
            case 'fadeInBottom': return { opacity: '0', transform: `translateY(-${distance})` };
            default: return { opacity: '0', transform: 'translateY(20px)' }; // Default animation
        }
    }
}
