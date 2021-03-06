import React from 'react';
import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import Radio from '.';
import type { IRadio } from './IRadio';

export default {
  component: Radio,
  title: 'Atoms/Radio',
  argTypes: {
    size: {
      options: ['small', 'default'],
      control: { type: 'select' },
    },
    defaultChecked: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template: Story<IRadio.IProps> = (args): ReactElement => (
  <Radio {...args} />
);

export const RadioTS = Template.bind({});
RadioTS.args = {
  size: 'default',
  defaultChecked: false,
  disabled: false,
};
