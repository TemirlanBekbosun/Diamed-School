
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  borderRadius: '30px',
  padding: '60px 50px',
  marginBottom: '40px',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
  '@media (max-width: 768px)': {
    padding: '40px 30px'
  }
});

const HeroTitle = styled(Typography)({
  fontSize: '48px',
  color: '#ffffff',
  marginBottom: '25px',
  fontWeight: 700,
  '@media (max-width: 768px)': {
    fontSize: '36px'
  }
});

const HeroSubtitle = styled(Typography)({
  fontSize: '22px',
  color: '#ffffff',
  marginBottom: '40px',
  lineHeight: 1.6,
  opacity: 0.95,
  '@media (max-width: 768px)': {
    fontSize: '18px'
  }
});

const StatsContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'center'
});

const StatCard = styled(Box)({
  background: 'rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(10px)',
  padding: '30px',
  borderRadius: '20px',
  textAlign: 'center',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  minWidth: '200px',
  flex: '1 1 200px',
  maxWidth: '250px',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    background: 'rgba(255, 255, 255, 0.2)'
  }
});

const StatNumber = styled(Typography)({
  fontSize: '42px',
  fontWeight: 700,
  color: '#ffffff',
  marginBottom: '10px'
});

const StatLabel = styled(Typography)({
  fontSize: '16px',
  color: '#ffffff',
  opacity: 0.9
});

const HeroStats = () => {
  const stats = [
    { number: '500+', label: 'Успешных студентов' },
    { number: '95%', label: 'Поступили в ВУЗы' },
    { number: '10+', label: 'Лет опыта' },
    { number: '15+', label: 'Преподавателей' }
  ];

  return (
    <HeroSection>
      <HeroTitle>Diamed School</HeroTitle>
      <HeroSubtitle>
        Современный образовательный центр, специализирующийся на подготовке к экзаменам ОРТ, ЕГЭ и ЕНТ. 
        Мы помогаем студентам достигать высоких результатов и поступать в лучшие университеты.
      </HeroSubtitle>
      
      <StatsContainer>
        {stats.map((stat, index) => (
          <StatCard key={index}>
            <StatNumber>{stat.number}</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatCard>
        ))}
      </StatsContainer>
    </HeroSection>
  );
};

export default HeroStats;