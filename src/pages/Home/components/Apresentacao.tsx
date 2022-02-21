import React, { FC } from 'react';
import { Grid, Switch, Typography } from '@mui/material';
import laptopCode from '../../../assets/icons/laptopCode.png';
import { PRESENTATION } from '../../../utils/Constantes';
import ReactTypingEffect from 'react-typing-effect';

interface IApresentacaoProps {
  handleThemeChange: () => void;
}

const Apresentacao: FC<IApresentacaoProps> = ({ handleThemeChange }) => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid>
        <img style={{ height: '150px' }} src={laptopCode} alt="Logo" />
      </Grid>
      <Typography variant="h3">{PRESENTATION.name}</Typography>

      <Grid height="50px">
        <ReactTypingEffect
          eraseDelay={1000}
          eraseSpeed={200}
          typingDelay={1000}
          speed={100}
          text={PRESENTATION.posts}
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
    </Grid>
  );
};

export default Apresentacao;
