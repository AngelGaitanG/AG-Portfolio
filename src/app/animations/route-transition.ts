import { animate, query, style, transition, trigger } from '@angular/animations';

export const routeTransition = trigger('routeTransition', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, scale: 0}), // Empieza fuera del viewport
    ], { optional: true }),

    query(':leave', [
      animate('0.2s', style({ opacity: 0, scale: 0.9 })) // Sale hacia la izquierda
    ], { optional: true }),

    query(':enter', [
      animate('0.2s', style({ opacity: 1, scale: 1 })) // Entra desde la derecha
    ], { optional: true })
  ])
]);
