import { provideZoneChangeDetection } from '@angular/core';
import { applicationConfig, type Preview } from '@storybook/angular';

import 'zone.js';

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [
        provideZoneChangeDetection(),
      ],
    }),
  ]
};

export default preview;