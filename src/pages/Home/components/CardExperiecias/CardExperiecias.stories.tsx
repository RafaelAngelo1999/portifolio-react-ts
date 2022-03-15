import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardExperiecias } from './index';
import { EXPERIENCESES } from '../../../../utils/Constantes';

export default {
  title: 'CardExperiecias',
  component: CardExperiecias,
} as ComponentMeta<typeof CardExperiecias>;

const Template: ComponentStory<typeof CardExperiecias> = (args) => <CardExperiecias {...args} />;

export const CardExperieciasBase = Template.bind({});
CardExperieciasBase.args = { experience: EXPERIENCESES[0] };
