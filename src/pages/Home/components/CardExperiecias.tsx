import React, { FC } from 'react';
import { Chip } from '@mui/material';
import { GitHub } from 'react-feather';
import { IExperiences } from '../../../utils/Constantes';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

interface ICardExperiencesProps {
  experience: IExperiences;
}

const CardExperiecias: FC<ICardExperiencesProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={experience.date}
      iconStyle={
        experience.id === 1
          ? { background: 'lightgray', color: '#fff' }
          : { background: 'rgb(33, 150, 243)', color: '#fff' }
      }
      icon={<GitHub />}
    >
      <h3 className="vertical-timeline-element-title" style={{ color: 'black' }}>
        {experience.name}
      </h3>
      <h4 className="vertical-timeline-element-subtitle" style={{ color: 'black' }}>
        {experience.local}
      </h4>
      <p>
        {experience.stacks.map((stack, i) => (
          <Chip
            key={i}
            label={stack}
            color="primary"
            variant="filled"
            style={{ marginRight: '5px', marginBottom: '5px' }}
          />
        ))}
      </p>
    </VerticalTimelineElement>
  );
};

export default CardExperiecias;
