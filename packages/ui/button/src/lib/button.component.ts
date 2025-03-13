import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[sek-button]',
  template: `
    <ng-content/>
  `,
  host: {
    class: 'sek-button',
  },
  styles: [
    `
      .sek-button {
        appearance: none;
        height: 28px;
        border-radius: 6px;
        color: var(--sekoya-gray-100);
        background: var(--sekoya-gray-1000);
        border: none;
        font-weight: 500;
        padding: 0 8px;
        max-width: 100%;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition-property: border-color, background, color, transform, box-shadow;
        transition-duration: .15s;
        transition-timing-function: ease;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {}