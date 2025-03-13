import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  render: () => ({
    template: `<button sek-button>Upload</button>`,
  })
}
