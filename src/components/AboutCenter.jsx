import React from 'react';
import styled from 'styled-components';
import HeroStats from '../components/HeroStats';
import FeatureGrid from '../components/FeatureGrid';
import MissionValues from '../components/MissionValues';
import OurHistory from '../components/OurHistory';
import Achievements from '../components/Achievements';
import WhyMedicine from '../components/WhyMedicine'; 

const Container = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%);
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 800px;
    background: 
      radial-gradient(circle at 20% 20%, rgba(26, 86, 219, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 30%, rgba(13, 148, 136, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 40% 70%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
    z-index: 0;
  }
`;

const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding: 0 20px;
`;

const AboutCenter = () => {
  return (
    <Container>
      <Content>
        <HeroStats />
        <MissionValues />
        <WhyMedicine /> {/* Добавляем новый раздел */}
        <FeatureGrid />
        <Achievements />
        <OurHistory />
      </Content>
    </Container>
  );
};

export default AboutCenter;