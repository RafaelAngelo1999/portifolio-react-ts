import React from 'react';

import { ComponentStory, ComponentMeta, storiesOf } from '@storybook/react';

import { Apresentacao } from './index';
import { PRESENTATION } from '../../../../utils/Constantes';

export default {
  title: 'Apresentacao',
  component: Apresentacao,
} as ComponentMeta<typeof Apresentacao>;

const Template: ComponentStory<typeof Apresentacao> = (args) => <Apresentacao {...args} />;

export const ApresentacaoBase = Template.bind({});
ApresentacaoBase.args = { presentation: PRESENTATION };
