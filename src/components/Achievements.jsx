import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 80px 20px;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto 80px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(37, 99, 235, 0.1);
  border-radius: 24px;
  padding: 32px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(37, 99, 235, 0.15);
  }
`;

const StatIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.$color};
  color: white;
  margin: 0 auto 20px;
  font-size: 24px;
  position: relative;
  z-index: 1;
`;

const StatBackground = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.$color}15;
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, ${props => props.$color}, ${props => `${props.$color}80`});
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
`;

const StatTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
`;

const StatDescription = styled.p`
  color: #64748b;
  font-size: 0.875rem;
`;

const TestimonialsTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #1e293b;
  margin-bottom: 40px;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(14, 165, 233, 0.05) 100%);
  border: 1px solid rgba(37, 99, 235, 0.1);
  border-radius: 24px;
  padding: 32px;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(37, 99, 235, 0.1);
  }
`;

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
  margin-right: 20px;
`;

const TestimonialInfo = styled.div``;

const TestimonialName = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
`;

const TestimonialScore = styled.span`
  background: rgba(37, 99, 235, 0.1);
  color: #2563eb;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.875rem;
`;

const TestimonialText = styled.p`
  color: #475569;
  font-style: italic;
  line-height: 1.6;
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: rgba(37, 99, 235, 0.2);
  font-size: 40px;
`;

const achievements = [
  {
    number: '15',
    title: 'Лучших вузов',
    description: 'Наши студенты поступают в топ-медицинские университеты',
    icon: '🏛️',
    color: '#2563eb',
  },
  {
    number: '98%',
    title: 'Довольных студентов',
    description: 'Рейтинг удовлетворенности по итогам 2024 года',
    icon: '⭐',
    color: '#0ea5e9',
  },
  {
    number: '230+',
    title: 'Баллов в среднем',
    description: 'Средний балл на ЕГЭ по биологии среди выпускников',
    icon: '📈',
    color: '#0d9488',
  },
  {
    number: '50+',
    title: 'Победителей олимпиад',
    description: 'Призеры и победители медицинских олимпиад',
    icon: '🏅',
    color: '#8b5cf6',
  },
];

const testimonials = [
  {
    name: 'Айгерим Т.',
    score: '245 баллов',
    text: 'Поступила в КГМА с первого раза! Благодаря Diamed School поняла химию на глубоком уровне.',
    avatar: 'АТ',
  },
  {
    name: 'Данияр С.',
    score: '238 баллов',
    text: 'Авторская методика Дианы Койчумановны — это волшебство. С нуля до 238 баллов за 8 месяцев!',
    avatar: 'ДС',
  },
  {
    name: 'Амина К.',
    score: 'КГМУ',
    text: 'Поддержка кураторов 24/7 помогла не сдаться в самые сложные моменты подготовки. Спасибо!',
    avatar: 'АК',
  },
];

const Achievements = () => {
  return (
    <Section>
      <Title>Наши достижения и отзывы</Title>

      <StatsGrid>
        {achievements.map((item, index) => (
          <StatCard key={index}>
            <StatBackground $color={item.color} />
            <StatIcon $color={item.color}>{item.icon}</StatIcon>
            <StatNumber $color={item.color}>{item.number}</StatNumber>
            <StatTitle>{item.title}</StatTitle>
            <StatDescription>{item.description}</StatDescription>
          </StatCard>
        ))}
      </StatsGrid>

      <TestimonialsTitle>Истории успеха</TestimonialsTitle>
      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <AvatarWrapper>
              <Avatar>{testimonial.avatar}</Avatar>
              <TestimonialInfo>
                <TestimonialName>{testimonial.name}</TestimonialName>
                <TestimonialScore>{testimonial.score}</TestimonialScore>
              </TestimonialInfo>
            </AvatarWrapper>
            <TestimonialText>"{testimonial.text}"</TestimonialText>
            <QuoteIcon>❝</QuoteIcon>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </Section>
  );
};

export default Achievements;