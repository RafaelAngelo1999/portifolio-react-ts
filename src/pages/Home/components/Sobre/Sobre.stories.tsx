import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sobre } from './index';
import { PRESENTATION, STACKS } from '../../../../utils/Constantes';

export default {
  title: 'Sobre',
  component: Sobre,
} as ComponentMeta<typeof Sobre>;

const Template: ComponentStory<typeof Sobre> = (args) => <Sobre {...args} />;

export const SobreBase = Template.bind({});
SobreBase.args = { presentation: PRESENTATION, stacks: STACKS };
