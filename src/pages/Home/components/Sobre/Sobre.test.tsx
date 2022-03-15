import { render, screen } from '@testing-library/react';
import React from 'react';
import { PRESENTATION, STACKS } from '../../../../utils/Constantes';
import Sobre from './Sobre';

describe('Teste do componente <Sobre />', () => {
  test('Validando renderização do componente', async () => {
    render(<Sobre presentation={PRESENTATION} stacks={STACKS} />);
    expect(screen.getByText('Sobre mim')).toBeInTheDocument();

    expect(screen.getByRole('img', { name: PRESENTATION.name })).toHaveAttribute(
      'src',
      'https://media-exp1.licdn.com/dms/image/C4E03AQEAoFH7cQkKPg/profile-displayphoto-shrink_800_800/0/1643154618151?e=1649289600&v=beta&t=8nAqctug7hnzuCgc6N0cwJp2YpDgVk7p1Of5SEAGMu8',
    );

    Object.values(STACKS).map((stack, i) => {
      expect(screen.getAllByRole('img')[i + 1]).toHaveAttribute('alt', stack.name),
        expect(screen.getAllByRole('img')[i + 1]).toHaveAttribute('src', stack.urlSvg);
    });

    expect(screen.getByText(PRESENTATION.mensage)).toBeInTheDocument();
  });
});
