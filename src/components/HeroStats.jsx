import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 20px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: -1;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(135deg, #1a56db 0%, #0d8de3 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 24px;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #4b5563;
  max-width: 900px;
  margin: 0 auto 70px;
  line-height: 1.8;
  font-weight: 400;
`;

const Highlight = styled.span`
  color: #1a56db;
  font-weight: 600;
  background: linear-gradient(120deg, rgba(26, 86, 219, 0.1) 0%, rgba(26, 86, 219, 0.05) 100%);
  padding: 0 8px;
  border-radius: 6px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: white;
  border-radius: 28px;
  padding: 40px 30px;
  box-shadow: 0 10px 40px rgba(26, 86, 219, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(26, 86, 219, 0.1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 25px 60px rgba(26, 86, 219, 0.15);
    border-color: rgba(26, 86, 219, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #1a56db, #0d8de3);
    border-radius: 28px 28px 0 0;
  }
`;

const IconWrapper = styled.div`
  font-size: 48px;
  margin-bottom: 24px;
  display: inline-block;
  padding: 16px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(26, 86, 219, 0.1) 0%, rgba(13, 141, 227, 0.1) 100%);
`;

const StatValue = styled.h2`
  font-size: 3.2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #1a56db 0%, #0d8de3 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 12px;
  line-height: 1;
`;

const StatLabel = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 8px;
`;

const StatDescription = styled.p`
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.6;
`;

const MedicalBadge = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, #10b981 0%, #0d9488 100%);
  color: white;
  padding: 8px 20px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: 20px;
  letter-spacing: 0.5px;
`;

const stats = [
  { 
    icon: '🏥', 
    value: '96.7%', 
    label: 'Поступаемость', 
    suffix: 'в медицинские вузы',
    badge: 'Топ результат'
  },
  { 
    icon: '👨‍⚕️', 
    value: '2,150+', 
    label: 'Будущих врачей', 
    suffix: 'подготовлено за 6 лет',
    badge: 'Лидер рынка'
  },
  { 
    icon: '📊', 
    value: '247', 
    label: 'Средний балл ЕГЭ', 
    suffix: 'по биологии и химии',
    badge: 'Выше среднего'
  },
  { 
    icon: '⏳', 
    value: '98%', 
    label: 'Студентов', 
    suffix: 'рекомендуют нас друзьям',
    badge: 'Высший рейтинг'
  },
];

const HeroStats = () => {
  return (
    <Section>
      <Background />
      <Title>Diamed School — Ваш путь в медицину</Title>
      <Subtitle>
        Ведущая школа подготовки к <Highlight>медицинским вузам</Highlight> с 
        авторской методикой <Highlight>Дианы Койчумановны</Highlight>. 
        Мы не просто готовим к экзаменам — мы воспитываем <Highlight>будущих врачей</Highlight>.
      </Subtitle>

      <StatsGrid>
        {stats.map((stat, index) => (
          <StatCard key={index}>
            <IconWrapper>{stat.icon}</IconWrapper>
            <StatValue>{stat.value}</StatValue>
            <StatLabel>{stat.label}</StatLabel>
            <StatDescription>{stat.suffix}</StatDescription>
            <MedicalBadge>{stat.badge}</MedicalBadge>
          </StatCard>
        ))}
      </StatsGrid>
    </Section>
  );
};

export default HeroStats;