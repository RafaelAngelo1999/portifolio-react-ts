import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardProjeto } from './index';
import { PROJETOS } from '../../../../utils/Constantes';

export default {
  title: 'CardProjeto',
  component: CardProjeto,
} as ComponentMeta<typeof CardProjeto>;

const Template: ComponentStory<typeof CardProjeto> = (args) => <CardProjeto {...args} />;

export const CardProjetoBase = Template.bind({});
CardProjetoBase.args = { projeto: PROJETOS[0] };
