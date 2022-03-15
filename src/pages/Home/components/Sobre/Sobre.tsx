import React, { FC } from 'react';
import { Grid, Paper, Typography, Card, CardContent, CardActions, CardHeader } from '@mui/material';
import { IPresentation, IStack } from '../../../../utils/Constantes';

interface IPresetationProps {
  presentation: IPresentation;
  stacks: IStack[];
}

const Sobre: FC<IPresetationProps> = ({ presentation, stacks }) => {
  return (
    <Paper style={{ minHeight: '75vh' }}>
      <Grid container direction="row" justifyContent="center" alignItems="center" pt={5}>
        <Typography variant="h2">Sobre mim</Typography>
      </Grid>

      <Grid container textAlign="center" justifyContent="center" alignItems="center" pt={5}>
        <Grid item sm={12} md={5} columnSpacing={2}>
          <Card sx={{ maxWidth: 430, display: 'inline-block' }}>
            <CardContent>
              <img alt={presentation.name} height={'400px'} src={presentation.img}></img>
            </CardContent>
            <CardActions sx={{ marginX: '2px' }}>
              {stacks.map((item, i) => (
                <img key={i} alt={item.name} height="30" width="40" src={item.urlSvg}></img>
              ))}
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={5} pt={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardHeader
              avatar={<>🔴 🟡 🟢</>}
              action={<>❌</>}
              sx={{ backgroundColor: 'rgba(0,0,0,.03)' }}
            ></CardHeader>
            <CardContent>
              <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                {presentation.mensage}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Sobre;
