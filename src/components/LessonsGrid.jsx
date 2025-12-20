import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 80px 20px;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  background: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto 60px;
  line-height: 1.6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto 60px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(37, 99, 235, 0.1);
  border-radius: 24px;
  padding: 32px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0 25px 50px rgba(37, 99, 235, 0.15);
    transform: translateY(-8px);
  }
`;

const FeatureIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 20px;
  background: ${props => props.$gradient};
  color: white;
  font-size: 32px;
  margin-bottom: 24px;
  transition: transform 0.3s;

  ${FeatureCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #1e293b;
`;

const FeatureDescription = styled.p`
  color: #64748b;
  margin-bottom: 16px;
  line-height: 1.6;
`;

const GradientLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${props => props.$gradient};
  border-radius: 0 0 24px 24px;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%);
  color: white;
  border: none;
  padding: 16px 48px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  margin: 0 auto;

  &:hover {
    box-shadow: 0 15px 40px rgba(37, 99, 235, 0.4);
    transform: translateY(-2px);
  }
`;

const features = [
  {
    icon: '💻',
    title: 'Онлайн-платформа',
    description: 'Интерактивная система с видеоуроками, тестами и симуляторами экзаменов',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Малые группы',
    description: 'Занятия в группах 5-8 человек для максимального внимания каждому студенту',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
  },
  {
    icon: '📖',
    title: 'Авторские материалы',
    description: 'Учебники, сборники задач и чек-листы, разработанные специально для ОРТ/ЕГЭ',
    gradient: 'linear-gradient(135deg, #10b981 0%, #0d9488 100%)',
  },
  {
    icon: '🔬',
    title: 'Лабораторные практикумы',
    description: 'VR-лаборатории и офлайн-практикумы для отработки медицинских навыков',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
  },
  {
    icon: '🧠',
    title: 'Психологическая подготовка',
    description: 'Тренинги по стрессоустойчивости и тайм-менеджменту перед экзаменами',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
  },
  {
    icon: '🆘',
    title: 'Поддержка 24/7',
    description: 'Кураторы отвечают на вопросы в любое время через Telegram-чат',
    gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
  },
];

const FeatureGrid = () => {
  return (
    <Section>
      <Title>Почему выбирают именно нас</Title>
      <Description>
        Комплексный подход к подготовке, охватывающий все аспекты успешной сдачи экзаменов
      </Description>

      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon $gradient={feature.gradient}>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
            <GradientLine $gradient={feature.gradient} />
          </FeatureCard>
        ))}
      </FeaturesGrid>

      <Button>Начать обучение бесплатно</Button>
    </Section>
  );
};

export default FeatureGrid;