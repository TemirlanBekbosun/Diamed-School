
import React from 'react';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import HeroStats from '../components/HeroStats';
import FeaturesGrid from '../components/FeatureGrid';
import MissionValues from '../components/MissionValues';
import OurHistory from '../components/OurHistory';
import Achievements from '../components/Achievements';

const AppContainer = styled(Box)({
  background: '#ffffff',
  minHeight: '100vh',
  padding: '40px 20px'
});

const AboutCenter = () => {
  return (
    <AppContainer>
      <Container maxWidth="lg">
        <HeroStats />
        <FeaturesGrid />
        <MissionValues />
        <OurHistory />
        <Achievements />
      </Container>
    </AppContainer>
  );
};

export default AboutCenter;