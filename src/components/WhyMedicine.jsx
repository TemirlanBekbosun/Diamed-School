import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  text-align: center;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 40px 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(59, 130, 246, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    
    .card-icon {
      transform: scale(1.2);
      background: rgba(59, 130, 246, 0.2);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background: rgba(59, 130, 246, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-bottom: 25px;
  transition: all 0.4s ease;
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #f8fafc;
`;

const CardText = styled.p`
  color: #cbd5e1;
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: 25px;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Stat = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #60a5fa;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #94a3b8;
`;

const WhyMedicine = () => {
  const reasons = [
    {
      icon: '💉',
      title: 'Клиническая практика с 1 курса',
      text: 'Наши студенты начинают практиковаться в симуляционных центрах уже во время подготовки, что дает им преимущество в вузе.',
      stats: [
        { number: '300+', label: 'часов практики' },
        { number: '95%', label: 'успешность' }
      ]
    },
    {
      icon: '🧠',
      title: 'Глубокое понимание медицины',
      text: 'Мы учим не просто запоминать, а понимать процессы организма на молекулярном и системном уровнях.',
      stats: [
        { number: '100+', label: 'клинических кейсов' },
        { number: '24/7', label: 'доступ к материалам' }
      ]
    },
    {
      icon: '🏛️',
      title: 'Прямое сотрудничество с вузами',
      text: 'Партнерские программы с ведущими медицинскими университетами обеспечивают льготы при поступлении.',
      stats: [
        { number: '15', label: 'вузов-партнеров' },
        { number: '30%', label: 'скидка на обучение' }
      ]
    },
    {
      icon: '👨‍⚕️',
      title: 'Наставничество от практиков',
      text: 'Каждого студента курирует практикующий врач, который делится реальным опытом и знаниями.',
      stats: [
        { number: '50+', label: 'практикующих врачей' },
        { number: '1:5', label: 'соотношение' }
      ]
    },
    {
      icon: '📈',
      title: 'Гарантированный рост',
      text: 'Поэтапная программа развития от основ до углубленной специализации с гарантией результата.',
      stats: [
        { number: '6', label: 'уровней подготовки' },
        { number: '100%', label: 'довольных' }
      ]
    },
    {
      icon: '🌍',
      title: 'Международные перспективы',
      text: 'Подготовка к поступлению не только в локальные, но и в зарубежные медицинские университеты.',
      stats: [
        { number: '7', label: 'стран' },
        { number: 'IELTS', label: 'подготовка' }
      ]
    }
  ];

  return (
    <Section>
      <Container>
        <Title>Почему именно медицинское образование?</Title>
        <Grid>
          {reasons.map((reason, index) => (
            <Card key={index}>
              <IconWrapper className="card-icon">
                {reason.icon}
              </IconWrapper>
              <CardTitle>{reason.title}</CardTitle>
              <CardText>{reason.text}</CardText>
              <Stats>
                {reason.stats.map((stat, idx) => (
                  <Stat key={idx}>
                    <StatNumber>{stat.number}</StatNumber>
                    <StatLabel>{stat.label}</StatLabel>
                  </Stat>
                ))}
              </Stats>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default WhyMedicine;