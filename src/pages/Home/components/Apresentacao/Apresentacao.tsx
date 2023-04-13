import React, { FC } from 'react';
import { Grid, IconButton, Switch, Typography } from '@mui/material';
import laptopCode from '../../../../assets/icons/laptopCode.png';
import laptopCodeWhite from '../../../../assets/icons/laptopCodeWhite.png';
import ReactTypingEffect from 'react-typing-effect';
import { IPresentation } from '../../../../utils/Constantes';
import { ExpandCircleDown } from '@mui/icons-material';

interface IApresentacaoProps {
  presentation: IPresentation;
  handleThemeChange: () => void;
  isThemeDark: boolean;
}

const Apresentacao: FC<IApresentacaoProps> = ({ presentation, handleThemeChange, isThemeDark }) => {
  const handleScroll = () => {
    const element = document.getElementById('my-apresentation');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid>
        <img style={{ height: '150px' }} src={isThemeDark ? laptopCodeWhite : laptopCode} alt="Logo" />
      </Grid>
      <Typography variant="h3">{presentation.name}</Typography>

      <Grid height="50px">
        <ReactTypingEffect
          eraseDelay={1000}
          eraseSpeed={200}
          typingDelay={1000}
          speed={100}
          text={presentation.posts}
          displayTextRenderer={(text: string) => {
            return (
              <code>
                {text.split('').map((char: string, i: number) => {
                  const key = `${i}`;
                  return (
                    <span style={{ fontSize: 28 }} key={key}>
                      {char}
                    </span>
                  );
                })}
              </code>
            );
          }}
        />
      </Grid>
      <Grid>
        <Switch onChange={handleThemeChange} />
      </Grid>
      <IconButton size={'large'} style={{ color: isThemeDark ? '#FFF' : '#000', width: '30px' }} onClick={handleScroll}>
        <ExpandCircleDown />
      </IconButton>
    </Grid>
  );
};

export default Apresentacao;
