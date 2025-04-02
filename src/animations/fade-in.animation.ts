import { trigger, transition, style, animate } from '@angular/animations';

// FUTURE Refactor >> animation-constants.ts

export const ANIMATION_DURATION_MS = 300; // Durata in millisecondi
export const TRANSLATE_DISTANCE_PX = 25; // Distanza in pixel

// Costruzione dinamica delle stringhe di animazione
export const ANIMATION_DURATION = `${ANIMATION_DURATION_MS}ms ease-out`;
export const TRANSLATE_DISTANCE = `${TRANSLATE_DISTANCE_PX}px`;

//NO >> GPT only >> NON funzionante
// export const fadeInLeftAnimation = trigger('fadeInLeft', [
//     state('hidden', style({ opacity: 0, transform: 'translateX(-30px)' })),
//     state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
//     transition('hidden => visible', animate('1s ease-out'))
// ]);

//OK >> Questa invece prelevata da https://stackblitz.com/edit/angular-animation-fade-in? e poi modificata con GPT

//>>>>> IN
export const fadeInLeftAnimation = trigger('fadeInLeft', [
    transition('void => *', [
        style({ opacity: 0, transform: `translateX(${TRANSLATE_DISTANCE})` }),
        animate(ANIMATION_DURATION, style({ opacity: 1, transform: 'translateX(0)' }))
    ])
]);

export const fadeInRightAnimation = trigger('fadeInRight', [
    transition('void => *', [
        style({ opacity: 0, transform: `translateX(-${TRANSLATE_DISTANCE})` }),
        animate(ANIMATION_DURATION, style({ opacity: 1, transform: 'translateX(0)' }))
    ])
]);

export const fadeInTopAnimation = trigger('fadeInTop', [
    transition('void => *', [
        style({ opacity: 0, transform: `translateY(${TRANSLATE_DISTANCE})` }),
        animate(ANIMATION_DURATION, style({ opacity: 1, transform: 'translateY(0)' }))
    ])
]);

export const fadeInBottomAnimation = trigger('fadeInBottom', [
    transition('void => *', [
        style({ opacity: 0, transform: `translateY(-${TRANSLATE_DISTANCE})` }),
        animate(ANIMATION_DURATION, style({ opacity: 1, transform: 'translateY(0)' }))
    ])
]);

//>>>>> OUT

// animations.ts

export const fadeOutLeftAnimation = trigger('fadeOutLeft', [
    transition('* => void', [
        animate(ANIMATION_DURATION, style({ opacity: 0, transform: `translateX(-${TRANSLATE_DISTANCE})` }))
    ])
]);

export const fadeOutRightAnimation = trigger('fadeOutRight', [
    transition('* => void', [
        animate(ANIMATION_DURATION, style({ opacity: 0, transform: `translateX(${TRANSLATE_DISTANCE})` }))
    ])
]);

export const fadeOutTopAnimation = trigger('fadeOutTop', [
    transition('* => void', [
        animate(ANIMATION_DURATION, style({ opacity: 0, transform: `translateY(-${TRANSLATE_DISTANCE})` }))
    ])
]);

export const fadeOutBottomAnimation = trigger('fadeOutBottom', [
    transition('* => void', [
        animate(ANIMATION_DURATION, style({ opacity: 0, transform: `translateY(${TRANSLATE_DISTANCE})` }))
    ])
]);
