import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  position: relative;
  overflow: hidden;
`;

const DecorativeElement = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(26, 86, 219, 0.03) 0%, transparent 70%);
  top: -200px;
  right: -200px;
  z-index: 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #1a56db 0%, #0d9488 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #1a56db, #0d9488);
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
  color: #4b5563;
  max-width: 800px;
  margin: 40px auto 0;
  line-height: 1.8;
  font-weight: 400;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: white;
  border-radius: 28px;
  padding: 40px;
  box-shadow: 0 15px 50px rgba(26, 86, 219, 0.08);
  transition: all 0.4s ease;
  border: 1px solid rgba(26, 86, 219, 0.1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 70px rgba(26, 86, 219, 0.15);
    
    .value-icon {
      transform: scale(1.1) rotate(10deg);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, ${props => props.$color}, ${props => `${props.$color}80`});
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  gap: 24px;
`;

const IconWrapper = styled.div`
  padding: 20px;
  border-radius: 20px;
  background: ${props => `${props.$color}15`};
  color: ${props => props.$color};
  font-size: 48px;
  transition: transform 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 16px;
  line-height: 1.3;
`;

const CardText = styled.p`
  color: #6b7280;
  line-height: 1.8;
  font-size: 1.15rem;
  margin-bottom: 20px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 25px;
`;

const FeatureItem = styled.li`
  color: #4b5563;
  margin-bottom: 12px;
  padding-left: 28px;
  position: relative;
  line-height: 1.6;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${props => props.$color};
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const MedicalTag = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, rgba(26, 86, 219, 0.1) 0%, rgba(13, 141, 227, 0.1) 100%);
  color: #1a56db;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const values = [
  {
    icon: '🎯',
    title: 'Миссия: Врачи нового поколения',
    description: 'Мы готовим не просто абитуриентов, а будущих медицинских лидеров с глубокими знаниями и гуманистическими ценностями.',
    color: '#1a56db',
    features: [
      'Формирование клинического мышления',
      'Развитие медицинской этики',
      'Подготовка к реальной практике'
    ],
    tags: ['Медицинская этика', 'Профессионализм', 'Ответственность']
  },
  {
    icon: '🧬',
    title: 'Научный подход к обучению',
    description: 'Основа нашей методики — доказательная медицина и современные педагогические технологии.',
    color: '#0d9488',
    features: [
      'Изучение на основе клинических случаев',
      'VR-симуляции медицинских процедур',
      'Работа с реальными историями болезней'
    ],
    tags: ['Доказательная медицина', 'Практика', 'Инновации']
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Сообщество будущих врачей',
    description: 'Мы создаем среду для обмена опытом, поддержки и профессионального роста.',
    color: '#8b5cf6',
    features: [
      'Клубы по медицинским специальностям',
      'Встречи с практикующими врачами',
      'Поддержка выпускников'
    ],
    tags: ['Нетворкинг', 'Менторство', 'Сообщество']
  },
  {
    icon: '💡',
    title: 'Инновации в медицинском образовании',
    description: 'Внедряем передовые технологии для максимальной эффективности подготовки.',
    color: '#ec4899',
    features: [
      'Искусственный интеллект в диагностике',
      '3D-анатомические атласы',
      'Цифровые медицинские симуляторы'
    ],
    tags: ['Технологии', 'Цифровизация', 'Будущее медицины']
  },
];

const MissionValues = () => {
  return (
    <Section>
      <DecorativeElement />
      <Container>
        <Header>
          <Title>Философия медицинского образования</Title>
          <Subtitle>
            Мы верим, что хороший врач начинается с глубоких фундаментальных знаний, 
            развитого клинического мышления и искреннего желания помогать людям.
          </Subtitle>
        </Header>

        <ValuesGrid>
          {values.map((value, index) => (
            <ValueCard key={index} $color={value.color}>
              <IconContainer>
                <IconWrapper className="value-icon" $color={value.color}>
                  {value.icon}
                </IconWrapper>
                <CardTitle>{value.title}</CardTitle>
              </IconContainer>
              
              <CardText>{value.description}</CardText>
              
              <div>
                {value.tags.map((tag, idx) => (
                  <MedicalTag key={idx}>{tag}</MedicalTag>
                ))}
              </div>
              
              <FeatureList>
                {value.features.map((feature, idx) => (
                  <FeatureItem key={idx} $color={value.color}>
                    {feature}
                  </FeatureItem>
                ))}
              </FeatureList>
            </ValueCard>
          ))}
        </ValuesGrid>
      </Container>
    </Section>
  );
};

export default MissionValues;