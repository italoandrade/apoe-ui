import {animate, style, transition, trigger} from '@angular/animations';

export const navigationDrawerEnterLeaveViewAnimation = trigger(
  'navigationDrawerEnterLeaveViewAnimation',
  [
    transition(
      '* => create', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate('0ms', style({
          transform: 'translateX(0)'
        }))
      ]
    ),
    transition(
      '* => show', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({
          transform: 'translateX(0)'
        }))
      ]
    ),
    transition(
      ':leave', [
        style({
          transform: 'translateX(0)'
        }),
        animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({
          transform: 'translateX(-100%)'
        }))
      ]
    )]
);
