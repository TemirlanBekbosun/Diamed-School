
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const MissionSection = styled(Box)({
  background: '#f8f9fa',
  borderRadius: '30px',
  padding: '50px',
  marginTop: '40px',
  marginBottom: '40px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
  '@media (max-width: 768px)': {
    padding: '30px 20px'
  }
});

const MissionTitle = styled(Typography)({
  fontSize: '36px',
  color: '#667eea',
  marginBottom: '25px',
  fontWeight: 600
});

const MissionText = styled(Typography)({
  fontSize: '18px',
  lineHeight: 1.8,
  color: '#555',
  marginBottom: '20px'
});

const ValuesList = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '15px',
  marginTop: '30px'
});

const ValueChip = styled(Box)({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: '12px 25px',
  borderRadius: '25px',
  fontSize: '16px',
  fontWeight: 500
});

const MissionValues = () => {
  const values = [
    '✓ Качество образования',
    '✓ Индивидуальный подход',
    '✓ Честность и открытость',
    '✓ Инновации в обучении',
    '✓ Поддержка студентов',
    '✓ Ориентация на результат'
  ];

  return (
    <MissionSection>
      <MissionTitle>Наша миссия</MissionTitle>
      <MissionText>
        Мы верим, что качественное образование должно быть доступным каждому. Наша цель — не просто подготовить к экзаменам, 
        а развить глубокое понимание предметов, критическое мышление и любовь к науке.
      </MissionText>
      <MissionText>
        В Diamed School мы создаем комфортную среду для обучения, где каждый студент получает персональное внимание и поддержку.
      </MissionText>
      
      <ValuesList>
        {values.map((value, index) => (
          <ValueChip key={index}>{value}</ValueChip>
        ))}
      </ValuesList>
    </MissionSection>
  );
};

export default MissionValues;