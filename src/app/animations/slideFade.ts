import {trigger, state, style, animate, transition, query, stagger} from '@angular/animations';

export const slideFadeAnimation = [
    trigger('slideFadeRight', [
        transition(':enter', [
            style({
                transform: 'translateX(-5%)', 
                position : 'relative',
                opacity: 0.0,
               
              }),
              animate(
                "900ms 100ms ease-out",
                style({
                  transform: 'translateX(0%)',
                  opacity: 1.0,
                 
                })
              )
        ]),
        transition(':leave', [animate(500, style({ height: 0 }))]),
    ]),
    trigger('slideFadeLeft', [
        transition(':enter', [
            style({
                transform: 'translateX(5%)', 
                position : 'relative',
                opacity: 0.0,
               
              }),
              animate(
                "900ms 100ms ease-out",
                style({
                  transform: 'translateX(0%)',
                  opacity: 1.0,
                 
                })
              )
        ]),
        transition(':leave', [animate(500, style({ height: 0 }))]),
    ]),

    trigger('slideFadeUp', [
      transition(':enter', [
          style({
              transform: 'translateY(10%)', 
              position : 'relative',
              opacity: 0.0,
             
            }),
            animate(
              "900ms 100ms ease-out",
              style({
                transform: 'translateY(0%)',
                opacity: 1.0,
               
              })
            )
      ]),
      transition(':leave', [animate(500, style({ height: 0 }))]),
  ]),
]