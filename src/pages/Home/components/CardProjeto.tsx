import React, { FC } from 'react';
import { Typography, Card, CardActionArea, CardContent, CardActions, IconButton, ButtonBase } from '@mui/material';
import { GitHub, Globe } from 'react-feather';
import { IProject, STACKS } from '../../../utils/Constantes';

interface ICardProjetoProps {
  projeto: IProject;
}

const CardProjeto: FC<ICardProjetoProps> = ({ projeto }) => {
  return (
    <Card sx={{ marginLeft: 2, maxWidth: 360, display: 'inline-block' }}>
      <CardActionArea>
        <CardContent>
          <img
            alt={projeto.name}
            style={{ marginBottom: '15px', width: 'auto', height: 'auto', maxHeight: '335px' }}
            src={projeto.image}
          ></img>
          <CardActions>
            {projeto.stacks.map((stackProjeto, i) =>
              STACKS.some(
                (stack) =>
                  stack.name === stackProjeto && (
                    <img key={i} alt={stack.name} height="30" width="40" src={stack.urlSvg}></img>
                  ),
              ),
            )}
          </CardActions>
          <Typography variant="h5" component="div">
            {projeto.name}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            {projeto.date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {projeto.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        {projeto.linkRepos && (
          <IconButton>
            <ButtonBase href={projeto.linkRepos} target="_blank">
              <GitHub />
            </ButtonBase>
          </IconButton>
        )}
        {projeto.linkDeploy && (
          <IconButton>
            <ButtonBase href={projeto.linkDeploy} target="_blank">
              <Globe />
            </ButtonBase>
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};

export default CardProjeto;
