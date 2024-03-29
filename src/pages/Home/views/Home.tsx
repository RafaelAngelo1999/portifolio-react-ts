import React, { FC, useState } from 'react';
import { CssBaseline } from '@mui/material';
import { Apresentacao } from '../components/Apresentacao';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Sobre } from '../components/Sobre';
import { Projetos } from '../components/Projetos';
import { Experiencias } from '../components/Experiencias';
import { EXPERIENCESES, PRESENTATION, PROJETOS, STACKS } from '../../../utils/Constantes';

const Home: FC = () => {
  const PRIMARY_COLOR = '#85534c';
  const SECONDARY_COLOR = '#e088ac';

  const THEME_DARK = 'dark';
  const THEME_LIGHT = 'light';

  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? THEME_DARK : THEME_LIGHT;

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const theme = createTheme({
    palette: {
      mode: palletType,
      primary: {
        dark: PRIMARY_COLOR,
        main: PRIMARY_COLOR,
        light: PRIMARY_COLOR,
      },
      secondary: {
        dark: SECONDARY_COLOR,
        main: SECONDARY_COLOR,
        light: SECONDARY_COLOR,
      },
      success: {
        dark: '#0093a2',
        main: '#02c4d3',
        light: '#64f7ff',
      },
      warning: {
        dark: '#C15100',
        main: '#FA8022',
        light: '#FFB154',
      },
      error: {
        dark: '#b0002c',
        main: '#e84855',
        light: '#FF7c81',
      },
      info: {
        dark: '#00458e',
        main: '#276fbf',
        light: '#669df2',
      },
      background: {
        default: darkState ? '#493C3C' : '#beb9b9',
        paper: darkState ? '##352E2E' : '#dedbdb',
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Apresentacao presentation={PRESENTATION} handleThemeChange={handleThemeChange} isThemeDark={darkState} />
        <Sobre presentation={PRESENTATION} stacks={STACKS} />
        <Projetos projetos={PROJETOS} />
        <Experiencias experiences={EXPERIENCESES} />
      </ThemeProvider>
    </>
  );
};

export default Home;
