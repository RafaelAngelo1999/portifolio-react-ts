import { render, screen } from '@testing-library/react';
import React from 'react';
import { PRESENTATION } from '../../../../utils/Constantes';
import laptopCode from '../../../../assets/icons/laptopCode.png';
import Apresentacao from './Apresentacao';

describe('Teste do componente <Apresentacao />', () => {
  test('Validando renderização do componente', async () => {
    const handleThemeChange = jest.fn();
    render(<Apresentacao handleThemeChange={handleThemeChange} presentation={PRESENTATION} />);

    expect(screen.getByText(PRESENTATION.name)).toBeInTheDocument();

    const img = screen.getByRole('img', {});
    expect(img).toHaveAttribute('alt', 'Logo');
    expect(img).toHaveAttribute('src', laptopCode);
  });
});
