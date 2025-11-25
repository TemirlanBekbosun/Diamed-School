
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const FeaturesContainer = styled(Box)({
  marginTop: '50px',
  marginBottom: '50px'
});

const FeaturesGrid = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px',
  justifyContent: 'center'
});

const FeatureCard = styled(Box)({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  padding: '40px 30px',
  borderRadius: '20px',
  color: 'white',
  flex: '1 1 300px',
  maxWidth: '350px',
  minWidth: '280px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 40px rgba(102, 126, 234, 0.4)'
  }
});

const FeatureIcon = styled(Box)({
  fontSize: '48px',
  marginBottom: '20px'
});

const FeatureTitle = styled(Typography)({
  fontSize: '24px',
  marginBottom: '15px',
  fontWeight: 600
});

const FeatureDescription = styled(Typography)({
  fontSize: '16px',
  lineHeight: 1.6,
  opacity: 0.95
});

const FeaturesGridComponent = () => {
  const features = [
    { icon: '🎓', title: 'Авторская методика', description: 'Уникальная система обучения химии и биологии' },
    { icon: '💻', title: 'Онлайн-платформа', description: 'Доступ к материалам 24/7 из любой точки мира' },
    { icon: '👥', title: 'Малые группы', description: 'Индивидуальный подход до 10 человек в группе' },
    { icon: '📊', title: 'Реальные результаты', description: 'Регулярное тестирование и контроль прогресса' },
    { icon: '🏆', title: 'Проверенная программа', description: 'Полное соответствие требованиям ОРТ, ЕГЭ, ЕНТ' },
    { icon: '💡', title: 'Поддержка 24/7', description: 'Постоянная связь с преподавателями' }
  ];

  return (
    <FeaturesContainer>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

export default FeaturesGridComponent;