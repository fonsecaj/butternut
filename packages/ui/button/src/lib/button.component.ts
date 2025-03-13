import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[butter-button]',
  template: `
    <ng-content/>
  `,
  host: {
    class: 'butter-button',
  },
  styles: [
    `
      .butter-button {
        appearance: none;
        height: 28px;
        border-radius: 8px;
        color: var(--butternut-gray-100);
        background: var(--butternut-gray-1000);
        border: none;
        font-weight: 500;
        padding: 0 8px;
        max-width: 100%;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition-property: background;
        transition-duration: .15s;
        transition-timing-function: ease-in;
      }

      .butter-button:hover {
        background: var(--butternut-gray-900);
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {}