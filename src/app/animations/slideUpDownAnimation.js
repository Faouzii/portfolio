import {trigger, state, style, animate, transition, query, stagger} from '@angular/animations';

export const slideUpDownAnimation = [
    trigger('slideUpDown', [
        transition(':enter', [style({ height: 0 }), animate(120)]),
        transition(':leave', [animate(500, style({ height: 0 }))]),
    ]),
]