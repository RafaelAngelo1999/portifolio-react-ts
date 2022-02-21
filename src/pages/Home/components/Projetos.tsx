import React, { FC } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { PROJETOS } from '../../../utils/Constantes';
import CardProjeto from './CardProjeto';

const Projetos: FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box style={{ height: '80vh' }}>
      <Grid container direction="row" justifyContent="center" alignItems="center" pt={5}>
        <Typography variant="h2">Projetos</Typography>
      </Grid>
      <Carousel responsive={responsive}>
        {PROJETOS.map((projetos, i) => (
          <CardProjeto key={i} projeto={projetos} />
        ))}
      </Carousel>
    </Box>
  );
};

export default Projetos;
