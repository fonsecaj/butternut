import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
  
    // Brand
    brandTitle: `<span>@butternut/ui${process.env.VERSION}</span>`,
    brandUrl: '/',
    brandTarget: '_self',
  }),
});
