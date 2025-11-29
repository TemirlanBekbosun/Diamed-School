import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const testimonials = [
  {
    id: 1,
    name: "Алина Каримова",
    role: "Frontend разработчик",
    course: "React.js Pro",
    text: "Курс превзошел все мои ожидания! Преподаватели объясняют сложные вещи простым языком. За 3 месяца я прошла путь от новичка до уверенного Junior разработчика.",
    avatar: "АК",
    color: "blue",
  },
  {
    id: 2,
    name: "Тимур Жумабаев",
    role: "Fullstack разработчик",
    course: "JavaScript Advanced",
    text: "Отличная структура программы и реальные проекты в портфолио. Сейчас работаю в IT-компании благодаря знаниям, полученным на курсе. Рекомендую всем!",
    avatar: "ТЖ",
    color: "pink",
  },
  {
    id: 3,
    name: "Динара Сатыбалдиева",
    role: "UI/UX Designer",
    course: "Web Design Fundamentals",
    text: "Невероятно крутой курс! Научилась создавать современные интерфейсы и работать с Figma на профессиональном уровне. Преподаватели всегда на связи и помогают.",
    avatar: "ДС",
    color: "blue",
  },
  {
    id: 4,
    name: "Азамат Токтогулов",
    role: "Backend разработчик",
    course: "Node.js & MongoDB",
    text: "Практический подход к обучению — это то, что мне больше всего понравилось. Каждая тема закрепляется реальными задачами. Теперь уверенно разрабатываю API.",
    avatar: "АТ",
    color: "pink",
  },
  {
    id: 5,
    name: "Айгерим Бекмурзаева",
    role: "Frontend разработчик",
    course: "HTML/CSS Bootcamp",
    text: "Начинала с нуля, а сейчас создаю адаптивные сайты! Курс построен логично, от простого к сложному. Очень благодарна за поддержку и мотивацию от команды!",
    avatar: "АБ",
    color: "blue",
  },
  {
    id: 6,
    name: "Эрлан Асанов",
    role: "Mobile разработчик",
    course: "React Native",
    text: "Лучшие инвестиции в свое будущее! Качество материала на высоте, а практические задания помогли собрать сильное портфолио. Уже через месяц после курса нашел работу.",
    avatar: "ЭА",
    color: "pink",
  },
];

const TestimonialsWrapper = styled(Box)(() => ({
  background: "linear-gradient(180deg, #F2F7FB 0%, #E8F3FF 100%)",
}));

const ContentWrapper = styled(Box)(() => ({
  background: "linear-gradient(180deg, #F2F7FB 0%, #E8F3FF 100%)",
  maxWidth: "1400px",
  margin: "0 auto",
  boxSizing: "border-box",
  paddingBottom: "40px", // <-- добавить контролируемый паддинг вместо больших margin у внутренних блоков
}));

const TitleSection = styled(Box)(() => ({
  textAlign: "center",
  marginBottom: "80px",
}));

const Badge = styled(Box)(() => ({
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  padding: "12px 24px",
  background: "#F5F2F9",
  border: "1px solid #FF8FA3",
  borderRadius: "50px",
  marginBottom: "32px",
  transition: "all 0.3s ease",
  "&:hover": {
    borderColor: "#3A86FF",
    transform: "translateY(-2px)",
  },
}));

const BadgeIcon = styled(Box)(() => ({
  width: "8px",
  height: "8px",
  background: "#3A86FF",
  borderRadius: "50%",
  animation: "pulse 2s ease infinite",
  "@keyframes pulse": {
    "0%, 100%": { transform: "scale(1)", opacity: 1 },
    "50%": { transform: "scale(1.3)", opacity: 0.7 },
  },
}));

const BadgeText = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: 500,
  color: "#3A86FF",
  fontFamily: "Roboto",
  letterSpacing: "1px",
  textTransform: "uppercase",
}));

const MainTitle = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: "78px",
  fontFamily: "Moderustic",
  color: "#121A25",
  lineHeight: "100%",
  letterSpacing: "0.5%",
  marginBottom: "24px",
  "@media (max-width: 768px)": {
    fontSize: "48px",
  },
}));

const Subtitle = styled(Typography)(() => ({
  fontWeight: 400,
  fontSize: "22px",
  fontFamily: "Roboto",
  color: "#1D3452",
  opacity: 0.7,
  lineHeight: "160%",
  maxWidth: "800px",
  margin: "0 auto",
  "@media (max-width: 768px)": {
    fontSize: "18px",
  },
}));

const TestimonialsMasonry = styled(Box)(() => ({
  columnCount: 3,
  columnGap: "40px",
  marginBottom: "40px", // <-- уменьшено
  "@media (max-width: 1200px)": {
    columnCount: 2,
  },
  "@media (max-width: 768px)": {
    columnCount: 1,
  },
}));

const TestimonialCard = styled(Box)(() => ({
  breakInside: "avoid",
  marginBottom: "40px",
  width: "100%",
  backgroundColor: "#F5F2F9",
  borderRadius: "16px",
  border: "1px solid #FF8FA3",
  padding: "28px 26px",
  transition:
    "transform 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.5s cubic-bezier(0.4,0,0.2,1), border-color 0.5s cubic-bezier(0.4,0,0.2,1)",
  boxShadow: "0 4px 24px 0 rgba(58,134,255,0.08)",
  willChange: "transform",
  cursor: "pointer",
  position: "relative",
  overflow: "visible",
  "&:hover": {
    transform: "translate(18px, -8px) rotateZ(2.5deg) scale(1.03)",
    boxShadow: "0 16px 40px 0 rgba(58,134,255,0.18)",
    borderColor: "#3A86FF",
  },
}));

const CardHeader = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginBottom: "20px",
}));

const Avatar = styled(Box)(({ color }) => ({
  width: "64px",
  height: "64px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 600,
  fontSize: "22px",
  fontFamily: "Moderustic",
  color: "#FFFFFF",
  flexShrink: 0,
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
  background: color === "blue" ? "#3A86FF" : "#FF8FA3",
}));

const UserInfo = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  flex: 1,
}));

const UserName = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: "24px",
  fontFamily: "Moderustic",
  color: "#1D3452",
  lineHeight: "120%",
}));

const UserRole = styled(Typography)(() => ({
  fontWeight: 400,
  fontSize: "16px",
  fontFamily: "Roboto",
  color: "#1D3452",
  opacity: 0.5,
  lineHeight: "140%",
}));

const RatingContainer = styled(Box)(() => ({
  display: "flex",
  gap: "3px",
  marginTop: "4px",
}));

const Star = styled("span")(() => ({
  fontSize: "16px",
  color: "#FFD700",
}));

const CourseTag = styled(Box)(() => ({
  display: "inline-flex",
  padding: "8px 16px",
  background: "rgba(58, 134, 255, 0.1)",
  border: "1px solid rgba(58, 134, 255, 0.3)",
  borderRadius: "8px",
  marginBottom: "16px",
}));

const CourseText = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: "13px",
  fontFamily: "Roboto",
  color: "#3A86FF",
  letterSpacing: "0.5px",
}));

const TestimonialText = styled(Typography)(() => ({
  fontWeight: 400,
  fontSize: "18px",
  fontFamily: "Roboto",
  color: "#1D3452",
  lineHeight: "25px",
  letterSpacing: "0%",
}));

const QuoteMark = styled("div")(() => ({
  position: "absolute",
  top: "20px",
  right: "24px",
  fontSize: "72px",
  fontFamily: "Georgia, serif",
  color: "#FF8FA3",
  opacity: 0.15,
  lineHeight: 1,
  pointerEvents: "none",
}));

const StatsSection = styled(Box)(() => ({
  display: "flex",
  gap: "50px",
  justifyContent: "center",
  flexWrap: "wrap",
  marginTop: "40px", // <-- уменьшено
  "@media (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const StatCard = styled(Box)(() => ({
  width: "315px",
  height: "280px",
  backgroundColor: "#F5F2F9",
  borderRadius: "16px",
  border: "1px solid #FF8FA3",
  padding: "40px 30px",
  textAlign: "center",
  transition:
    "transform 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.5s cubic-bezier(0.4,0,0.2,1), border-color 0.5s cubic-bezier(0.4,0,0.2,1)",
  boxShadow: "0 4px 24px 0 rgba(58,134,255,0.08)",
  willChange: "transform",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
  "&:hover": {
    transform: "translate(18px, -8px) rotateZ(2.5deg) scale(1.03)",
    boxShadow: "0 16px 40px 0 rgba(58,134,255,0.18)",
    borderColor: "#3A86FF",
  },
  "@media (max-width: 768px)": {
    width: "100%",
    maxWidth: "350px",
  },
}));

const StatNumber = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: "64px",
  fontFamily: "Moderustic",
  color: "#3A86FF",
  lineHeight: "100%",
}));

const StatLabel = styled(Typography)(() => ({
  fontWeight: 400,
  fontSize: "20px",
  fontFamily: "Roboto",
  color: "#1D3452",
  opacity: 0.7,
}));

const CtaSection = styled(Box)(() => ({
  marginTop: "60px", // <-- уменьшено
  textAlign: "center",
  padding: "40px 24px", // <-- уменьшено
  backgroundColor: "#F5F2F9",
  borderRadius: "16px",
  border: "1px solid #FF8FA3",
}));

const CtaTitle = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: "44px",
  fontFamily: "Moderustic",
  color: "#1D3452",
  lineHeight: "100%",
  marginBottom: "20px",
}));

const CtaText = styled(Typography)(() => ({
  fontWeight: 400,
  fontSize: "18px",
  fontFamily: "Roboto",
  color: "#1D3452",
  lineHeight: "25px",
  opacity: 0.5,
  marginBottom: "32px",
}));

const CtaButton = styled("button")(() => ({
  width: "323px",
  height: "57px",
  background: "#3A86FF",
  borderRadius: "8px",
  color: "#F5F5F5",
  boxShadow: "3px 3px 0px #FF8FA3",
  transition:
    "transform 0.08s cubic-bezier(0.4,0,0.2,1), box-shadow 0.08s cubic-bezier(0.4,0,0.2,1)",
  border: "1px #F5F2F9 solid",
  fontWeight: 400,
  fontSize: "18px",
  fontFamily: "Moderustic",
  cursor: "pointer",
  outline: "none",
  "&:active": {
    transform: "scale(0.96)",
    boxShadow: "1px 1px 0px #3A86FF",
  },
  "@media (max-width: 768px)": {
    width: "100%",
    maxWidth: "323px",
  },
}));

export default function TestimonialsPage() {
  return (
    <TestimonialsWrapper>
      <ContentWrapper>
        <TitleSection>
          <Badge>
            <BadgeIcon />
            <BadgeText>Истории успеха</BadgeText>
          </Badge>
          <MainTitle>Отзывы наших студентов</MainTitle>
          <Subtitle>
            Более 500 студентов уже изменили свою жизнь благодаря нашим курсам.
            Читайте реальные истории успеха от тех, кто прошел путь от новичка
            до профессионала!
          </Subtitle>
        </TitleSection>

        <TestimonialsMasonry>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <QuoteMark>"</QuoteMark>
              <CardHeader>
                <Avatar color={testimonial.color}>{testimonial.avatar}</Avatar>
                <UserInfo>
                  <UserName>{testimonial.name}</UserName>
                  <UserRole>{testimonial.role}</UserRole>
                  <RatingContainer>
                    <Star>★</Star>
                    <Star>★</Star>
                    <Star>★</Star>
                    <Star>★</Star>
                    <Star>★</Star>
                  </RatingContainer>
                </UserInfo>
              </CardHeader>
              <CourseTag>
                <CourseText>{testimonial.course}</CourseText>
              </CourseTag>
              <TestimonialText>{testimonial.text}</TestimonialText>
            </TestimonialCard>
          ))}
        </TestimonialsMasonry>

        <StatsSection>
          <StatCard>
            <StatNumber>500+</StatNumber>
            <StatLabel>Выпускников</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>4.9</StatNumber>
            <StatLabel>Средний рейтинг</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>95%</StatNumber>
            <StatLabel>Трудоустройство</StatLabel>
          </StatCard>
        </StatsSection>

        <CtaSection>
          <CtaTitle>Готовы начать свой путь?</CtaTitle>
          <CtaText>
            Присоединяйтесь к сотням успешных выпускников и измените свою
            карьеру уже сегодня
          </CtaText>
          <CtaButton>Записаться на курс</CtaButton>
        </CtaSection>
      </ContentWrapper>
    </TestimonialsWrapper>
  );
}
