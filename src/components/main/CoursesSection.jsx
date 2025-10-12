
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography } from '@mui/material';

const SectionWrapper = styled(Box)({

});

const SectionContainer = styled(Stack)({
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 16px',
  gap: '80px',
});

const TitleContainer = styled(Stack)({
  alignItems: 'center',
  gap: '16px',
});

const TitleWrapper = styled(Box)({
  position: 'relative',
  textAlign: 'center',
});

const MainTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Moderustic', Helvetica",
  fontWeight: 500,
  fontSize: '78px',
  lineHeight: '100%',
  letterSpacing: '0px',
  color: '#1D3452',
}));

const UnderlineImage = styled('img')({
  width: '203px',
  height: '28px',
  marginTop: '8px',
  display: 'block',
  margin: '8px 0 0 33%',
});

const Subtitle = styled(Typography)({
  fontFamily: "Moderustic",
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '100%',
  letterSpacing: '0.5%',
  textAlign: 'center',
  color: '#1D3352',
  maxWidth: '600px',
});

const CardsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));
const CardWrapper = styled(Box)(({ isRotated }) => ({
  position: "relative",
  borderRadius: "20px",
  transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1), box-shadow 0.45s cubic-bezier(0.4,0,0.2,1)",
  willChange: "transform, box-shadow",
  zIndex: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    top: "36px",
    left: "36px",
    width: "100%",
    height: "100%",
    background: "#3A86FF",
    borderRadius: "20px",
    zIndex: 0,
    opacity: 0,
    transition: "opacity 0.45s cubic-bezier(0.4,0,0.2,1)",
    filter: "blur(1.5px)",
    pointerEvents: "none",
  },
  "&:hover": {
    transform: "translate(-24px, -12px) rotateZ(-3deg) scale(1.03)", // смещение влево и поворот влево
    boxShadow: "0 16px 40px 0 rgba(58,134,255,0.18)",
    zIndex: 2,
  },
  "&:hover::before": {
    opacity: 1, // только появляется, но не двигается
  },
  "& > *": {
    position: "relative",
    zIndex: 1,
  },
}));

const StyledCard = styled(Box)(({ borderColor }) => ({
  height: '290px',
  backgroundColor: '#FFFFFF',
  borderRadius: '16px',
  border: `1px solid ${borderColor}`,
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'visible',
}));

const CardContent = styled(Stack)({
  gap: '16px',
  flex: 1,
});

const IconWrapper = styled(Box)({
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const CardTitle = styled(Typography)({
  fontFamily: "Roboto",
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '30px',
  letterSpacing: '0px',
  color: '#1D3352',
});

const CardDescription = styled(Typography)(({ isRotated }) => ({
  fontFamily: "Roboto",
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '22.5px',
  letterSpacing: isRotated ? '0px' : '-0.54px',
  color: '#1D3352',
  opacity: 0.8,
}));

const DecorativeIcon = styled('img')({
  width: '40px',
  height: '40px',
  alignSelf: 'flex-end',
  marginTop: 'auto',
});

const TrendingUpIconSVG = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.33333 28.3333L16.6667 20L23.3333 26.6667L31.6667 18.3333M31.6667 18.3333H25M31.6667 18.3333V25" stroke="#3A86FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SchoolIconSVG = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 8.33333L5 15L20 21.6667L35 15L20 8.33333Z" stroke="#FF8FA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 15V25L20 31.6667L35 25V15" stroke="#FF8FA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const NoteAddIconSVG = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.3333 5H10C8.15905 5 6.66667 6.49238 6.66667 8.33333V31.6667C6.66667 33.5076 8.15905 35 10 35H30C31.841 35 33.3333 33.5076 33.3333 31.6667V15L23.3333 5Z" stroke="#FF8FA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 18.3333V26.6667M15.8333 22.5H24.1667" stroke="#FF8FA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FavoriteIconSVG = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 35L17.5 32.75C10 26 5 21.5 5 15.8333C5 11.3333 8.5 7.83333 13 7.83333C15.5 7.83333 18 9 20 10.8333C22 9 24.5 7.83333 27 7.83333C31.5 7.83333 35 11.3333 35 15.8333C35 21.5 30 26 22.5 32.75L20 35Z" stroke="#FF8FA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DevicesIconSVG = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.6667 8.33333H8.33333C6.49238 8.33333 5 9.82572 5 11.6667V25C5 26.841 6.49238 28.3333 8.33333 28.3333H31.6667C33.5076 28.3333 35 26.841 35 25V11.6667C35 9.82572 33.5076 8.33333 31.6667 8.33333Z" stroke="#FF8FA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.3333 31.6667H26.6667" stroke="#FF8FA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BookmarkIconSVG = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.3333 5H11.6667C10.7462 5 10 5.74619 10 6.66667V35L20 28.3333L30 35V6.66667C30 5.74619 29.2538 5 28.3333 5Z" stroke="#3A86FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WorkspacePremiumIconSVG = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 25C25.5228 25 30 20.5228 30 15C30 9.47715 25.5228 5 20 5C14.4772 5 10 9.47715 10 15C10 20.5228 14.4772 25 20 25Z" stroke="#FF8FA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.75 23.75L12.5 35L20 30L27.5 35L26.25 23.75" stroke="#FF8FA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SupportAgentIconSVG = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="#3A86FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z" stroke="#3A86FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const topRowCards = [
  {
    icon: <TrendingUpIconSVG />,
    title: 'Старт с любого уровня',
    description: 'Программа адаптирована как для начинающих, так и для учеников с опытом.',
    borderColor: '#3A86FF',
    isRotated: false,
  },
  {
    icon: <SchoolIconSVG />,
    title: 'Опытные наставники',
    description: 'Вас обучают практикующие специалисты с многолетним стажем и реальными успехами учеников.',
    borderColor: '#FF8FA3',
    isRotated: false,
  },
  {
    icon: <NoteAddIconSVG />,
    title: 'Упор на практику',
    description: 'Задания, лабораторные работы и реальные экзаменационные задачи на каждом занятии.',
    borderColor: '#FF8FA3',
    isRotated: true,
  },
  {
    icon: <FavoriteIconSVG />,
    title: 'Индивидуальный подход',
    description: 'Маленькие группы и индивидуальные рекомендации для достижения максимального результата.',
    borderColor: '#FF8FA3',
    isRotated: false,
  },
];

const bottomRowCards = [
  {
    icon: <DevicesIconSVG />,
    title: 'Онлайн и офлайн форматы',
    description: 'Выберите удобный способ обучения: в центре или дистанционно из любой точки мира.',
    borderColor: '#FF8FA3',
    isRotated: false,
  },
  {
    icon: <BookmarkIconSVG />,
    title: 'Доступ к материалам 24/7',
    description: 'Все материалы курса доступны в любое время на нашей платформе.',
    borderColor: '#3A86FF',
    isRotated: false,
  },
  {
    icon: <WorkspacePremiumIconSVG />,
    title: 'Поддержка в обучении',
    description: 'Специализированные курсы для успешной сдачи ОРТ, ЕГЭ, ЕНТ и поступления в топовые вузы.',
    borderColor: '#FF8FA3',
    isRotated: false,
  },
  {
    icon: <SupportAgentIconSVG />,
    title: 'Подготовка к поступлению',
    description: 'Постоянная обратная связь, помощь кураторов, ответы на вопросы и мотивация на каждом этапе.',
    borderColor: '#3A86FF',
    isRotated: false,
  },
];

export const CoursesSection = () => {
  const renderCard = (card, index) => {
    return (
      <CardWrapper key={index} isRotated={card.isRotated}>
        <StyledCard borderColor={card.borderColor}>
          <CardContent>
            <IconWrapper>{card.icon}</IconWrapper>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription isRotated={card.isRotated}>
              {card.description}
            </CardDescription>
          </CardContent>
          <DecorativeIcon
            src={
              card.isRotated
                ? 'https://c.animaapp.com/mgk0sw44uMOLmD/img/frame-2147225368-1.svg'
                : 'https://c.animaapp.com/mgk0sw44uMOLmD/img/frame-2147225346.svg'
            }
            alt="Decorative element"
          />
        </StyledCard>
      </CardWrapper>
    );
  };

  return (
    <SectionWrapper component="section">
      <SectionContainer>
        <TitleContainer>
          <TitleWrapper>
            <MainTitle>Почему мы!</MainTitle>
            <UnderlineImage
              src="https://c.animaapp.com/mgk0sw44uMOLmD/img/frame-2147226846.svg"
              alt="Decorative underline"
            />
          </TitleWrapper>

          <Subtitle>
            Авторская методика обучения помогут вам добиться высоких результатов в химии и биологии
          </Subtitle>
        </TitleContainer>

        <Stack sx={{ gap: '40px' }}>
          <CardsGrid sx={{ gap: '40px' }}>{topRowCards.map(renderCard)}</CardsGrid>
          <CardsGrid sx={{ gap: '40px' }}>{bottomRowCards.map(renderCard)}</CardsGrid>
        </Stack>
      </SectionContainer>
    </SectionWrapper>
  );
};
