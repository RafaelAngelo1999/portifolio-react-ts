import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Experiencias } from './index';
import { EXPERIENCESES } from '../../../../utils/Constantes';

export default {
  title: 'Experiencias',
  component: Experiencias,
} as ComponentMeta<typeof Experiencias>;

const Template: ComponentStory<typeof Experiencias> = (args) => <Experiencias {...args} />;

export const ExperienciasBase = Template.bind({});
ExperienciasBase.args = { experiences: EXPERIENCESES };
