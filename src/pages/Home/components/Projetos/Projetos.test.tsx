import { render, screen } from '@testing-library/react';
import React from 'react';
import { PROJETOS } from '../../../../utils/Constantes';
import Projetos from './Projetos';

describe('Teste do componente <Projetos />', () => {
  test('Validando renderização do componente', async () => {
    render(<Projetos projetos={PROJETOS} />);
    expect(screen.getByText('Projetos')).toBeInTheDocument();
  });
});
