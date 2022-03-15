import { render, screen } from '@testing-library/react';
import React from 'react';
import { PROJETOS } from '../../../../utils/Constantes';
import CardProjeto from './CardProjeto';

describe('Teste do componente <CardProjeto />', () => {
  test('Validando renderização do componente', async () => {
    render(<CardProjeto projeto={PROJETOS[0]} />);

    expect(screen.getByText(PROJETOS[0].name)).toBeInTheDocument();
    expect(screen.getByText(PROJETOS[0].description)).toBeInTheDocument();
    expect(screen.getByText(PROJETOS[0].date)).toBeInTheDocument();

    const img = screen.getAllByRole('img', {});
    expect(img.length).toBe(1);
    expect(img[0]).toHaveAttribute('src', PROJETOS[0].image);

    const links = screen.getAllByRole('link', {});
    expect(links.length).toBe(2);
    expect(links[0]).toHaveAttribute('href', PROJETOS[0].linkRepos);
    expect(links[1]).toHaveAttribute('href', PROJETOS[0].linkDeploy);
  });
});
