import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Projetos } from './index';
import { PROJETOS } from '../../../../utils/Constantes';

export default {
  title: 'Projetos',
  component: Projetos,
} as ComponentMeta<typeof Projetos>;

const Template: ComponentStory<typeof Projetos> = (args) => <Projetos {...args} />;

export const ProjetosBase = Template.bind({});
ProjetosBase.args = { projetos: PROJETOS };
