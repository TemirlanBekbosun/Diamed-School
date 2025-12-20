import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.2), transparent);
  z-index: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
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

const HistoryDesktop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HistoryMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const HistoryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.$align === 'left' ? 'flex-start' : 'flex-end'};
  gap: 40px;
  position: relative;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

const YearCircle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${props => props.$color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
  box-shadow: 0 0 40px ${props => `${props.$color}40`};
  position: relative;
  z-index: 2;
  flex-shrink: 0;
`;

const HistoryContent = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid ${props => `${props.$color}20`};
  border-radius: 24px;
  padding: 32px;
  max-width: 500px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px ${props => `${props.$color}20`};
  }
`;

const HistoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16px;
`;

const HistoryText = styled.p`
  color: #475569;
  line-height: 1.6;
`;

const MobileCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid ${props => `${props.$color}20`};
  border-radius: 24px;
  padding: 24px;
  margin-bottom: 24px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px ${props => `${props.$color}20`};
  }
`;

const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const MobileIcon = styled.div`
  padding: 12px;
  border-radius: 16px;
  background: ${props => `${props.$color}15`};
  color: ${props => props.$color};
  font-size: 24px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
`;

const MobileInfo = styled.div``;

const MobileYear = styled.h4`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${props => props.$color};
  margin-bottom: 4px;
`;

const MobileTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
`;

const FooterTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 80px auto 24px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FooterText = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;
`;

const history = [
  {
    year: '2019',
    title: 'Основание школы',
    description: 'Диана Койчуманова начинает преподавать химию и биологию для первых 15 студентов',
    icon: '🏫',
    color: '#2563eb',
  },
  {
    year: '2020',
    title: 'Запуск онлайн-платформы',
    description: 'Разработана первая версия интерактивной платформы для дистанционного обучения',
    icon: '🚀',
    color: '#0ea5e9',
  },
  {
    year: '2021',
    title: '1000+ выпускников',
    description: 'Преодолен рубеж в 1000 успешно поступивших студентов',
    icon: '👥',
    color: '#0d9488',
  },
  {
    year: '2023',
    title: 'Авторская методика',
    description: 'Зарегистрирована авторская методика подготовки к медицинским вузам',
    icon: '🎉',
    color: '#8b5cf6',
  },
  {
    year: '2024',
    title: 'Международное признание',
    description: 'Начало сотрудничества с вузами Казахстана, России и Европы',
    icon: '🌍',
    color: '#ec4899',
  },
];

const OurHistory = () => {
  return (
    <Section>
      <TimelineLine />
      <Content>
        <Title>Наша история</Title>
        <Description>
          От маленькой учебной группы до ведущей школы подготовки к медицинским вузам
        </Description>

        {/* Десктопная версия */}
        <HistoryDesktop>
          {history.map((item, index) => (
            <HistoryItem key={index} $align={index % 2 === 0 ? 'left' : 'right'}>
              <YearCircle $color={item.color}>
                {item.year}
              </YearCircle>
              <HistoryContent $color={item.color}>
                <HistoryTitle>{item.title}</HistoryTitle>
                <HistoryText>{item.description}</HistoryText>
              </HistoryContent>
            </HistoryItem>
          ))}
        </HistoryDesktop>

        {/* Мобильная версия */}
        <HistoryMobile>
          {history.map((item, index) => (
            <MobileCard key={index} $color={item.color}>
              <MobileHeader>
                <MobileIcon $color={item.color}>{item.icon}</MobileIcon>
                <MobileInfo>
                  <MobileYear $color={item.color}>{item.year}</MobileYear>
                  <MobileTitle>{item.title}</MobileTitle>
                </MobileInfo>
              </MobileHeader>
              <HistoryText>{item.description}</HistoryText>
            </MobileCard>
          ))}
        </HistoryMobile>

        <FooterTitle>Готовы начать свой путь в медицину?</FooterTitle>
        <FooterText>
          Присоединяйтесь к 2000+ студентов, которые уже поступили в вузы мечты с Diamed School
        </FooterText>
      </Content>
    </Section>
  );
};

export default OurHistory;