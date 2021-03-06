import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import Slider from './Slider';
import type { ISlider } from './ISlider';

export default {
  title: 'atoms/slider',
  component: Slider,
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical', 'circular'],
      },
    },
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    verticalMeterHeight: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    radius: {
      control: {
        type: 'number',
      },
    },
    meterColor: {
      control: {
        type: 'radio',
        options: ['primary', 'primary-shd5', 'error'],
      },
    },
  },
};

const Template: Story<ISlider.IProps> = (args): ReactElement => (
  <div className="h-21xl">
    <Slider {...args} />
  </div>
);

export const sliderStory = Template.bind({});
sliderStory.args = {
  progress: 90,
  type: 'vertical',
  verticalMeterHeight: 300,
  radius: 60,
  meterColor: 'primary',
};
