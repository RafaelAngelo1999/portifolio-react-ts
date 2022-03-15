import React, { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IExperiences } from '../../../../utils/Constantes';
import CardExperiecias from '../CardExperiecias/CardExperiecias';

interface IExperienciasProps {
  experiences: IExperiences[];
}

const Experiencias: FC<IExperienciasProps> = ({ experiences }) => {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" pt={5}>
        <Typography variant="h2">Experiencia</Typography>
      </Grid>

      <Grid height="50px">
        <VerticalTimeline>
          {experiences.map((experience, i) => (
            <CardExperiecias key={i} experience={experience} />
          ))}
        </VerticalTimeline>
      </Grid>
    </>
  );
};

export default Experiencias;
