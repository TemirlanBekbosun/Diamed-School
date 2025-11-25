
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const AchievementsSection = styled(Box)({
  background: '#f8f9fa',
  borderRadius: '30px',
  padding: '50px',
  marginBottom: '50px',
  '@media (max-width: 768px)': {
    padding: '30px 20px'
  }
});

const SectionTitle = styled(Typography)({
  fontSize: '36px',
  color: '#667eea',
  marginBottom: '40px',
  fontWeight: 600,
  textAlign: 'center'
});

const AchievementsGrid = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '25px',
  justifyContent: 'center'
});

const AchievementCard = styled(Box)({
  background: 'white',
  borderRadius: '15px',
  padding: '30px',
  textAlign: 'center',
  flex: '1 1 280px',
  maxWidth: '320px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)'
  }
});

const AchievementIcon = styled(Box)({
  fontSize: '48px',
  marginBottom: '15px'
});

const AchievementTitle = styled(Typography)({
  fontSize: '20px',
  fontWeight: 600,
  color: '#333',
  marginBottom: '10px'
});

const AchievementDescription = styled(Typography)({
  fontSize: '14px',
  lineHeight: 1.5,
  color: '#666'
});

const Achievements = () => {
  const achievements = [
    { icon: '🏆', title: 'Лучший центр 2023', description: 'Награда Министерства образования' },
    { icon: '⭐', title: '95% поступление', description: 'В желаемые медицинские ВУЗы' },
    { icon: '📜', title: 'Лицензированы', description: 'Официальная образовательная лицензия' },
    { icon: '🎓', title: '500+ выпускников', description: 'Успешно поступили за 10 лет' },
    { icon: '💯', title: 'Высокие баллы', description: 'Средний балл ОРТ: 180+' },
    { icon: '🤝', title: 'Партнерства', description: 'С ведущими медицинскими ВУЗами' }
  ];

  return (
    <AchievementsSection>
      <SectionTitle>Наши достижения</SectionTitle>
      <AchievementsGrid>
        {achievements.map((achievement, index) => (
          <AchievementCard key={index}>
            <AchievementIcon>{achievement.icon}</AchievementIcon>
            <AchievementTitle>{achievement.title}</AchievementTitle>
            <AchievementDescription>{achievement.description}</AchievementDescription>
          </AchievementCard>
        ))}
      </AchievementsGrid>
    </AchievementsSection>
  );
};

export default Achievements;