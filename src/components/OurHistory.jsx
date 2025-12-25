
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const HistorySection = styled(Box)({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  borderRadius: '30px',
  padding: '50px',
  marginBottom: '40px',
  color: 'white',
  '@media (max-width: 768px)': {
    padding: '30px 20px'
  }
});

const HistoryTitle = styled(Typography)({
  fontSize: '36px',
  marginBottom: '30px',
  fontWeight: 600,
  textAlign: 'center'
});

const Timeline = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '25px',
  justifyContent: 'center'
});

const TimelineItem = styled(Box)({
  flex: '1 1 300px',
  maxWidth: '400px',
  padding: '20px',
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '15px',
  backdropFilter: 'blur(10px)'
});

const TimelineYear = styled(Typography)({
  fontSize: '24px',
  fontWeight: 700,
  marginBottom: '10px'
});

const TimelineDescription = styled(Typography)({
  fontSize: '16px',
  lineHeight: 1.6,
  opacity: 0.9
});

const OurHistory = () => {
  const timeline = [
    { year: '2014', description: 'Основание центра Diamed School. Первые 20 студентов.' },
    { year: '2017', description: 'Запуск онлайн-платформы. Расширение до 100+ студентов.' },
    { year: '2020', description: 'Открытие второго филиала. Авторская методика.' },
    { year: '2023', description: '500+ выпускников в медицинские ВУЗы.' },
    { year: '2024', description: '95% студентов поступают в желаемые университеты.' }
  ];

  return (
    <HistorySection>
      <HistoryTitle>Наша история</HistoryTitle>
      <Timeline>
        {timeline.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineYear>{item.year}</TimelineYear>
            <TimelineDescription>{item.description}</TimelineDescription>
          </TimelineItem>
        ))}
      </Timeline>
    </HistorySection>
  );
};

export default OurHistory;