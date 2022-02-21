import React, { FC, useState } from 'react';
import { CssBaseline } from '@mui/material';
import Apresentacao from '../components/Apresentacao';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sobre from '../components/Sobre';
import Projetos from '../components/Projetos';
import Experiencias from '../components/Experiencias';

const Home: FC = () => {
  const PRIMARY_COLOR = '#85534c';
  const SECONDARY_COLOR = '#e088ac';

  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? 'dark' : 'light';

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
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Apresentacao handleThemeChange={handleThemeChange} />
        <Sobre />
        <Projetos />
        <Experiencias />
      </ThemeProvider>
    </>
  );
};

export default Home;
