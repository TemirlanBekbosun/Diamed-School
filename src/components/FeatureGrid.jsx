import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 100px 20px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  text-align: center;
  background: linear-gradient(135deg, #1a56db 0%, #0d8de3 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: linear-gradient(90deg, #1a56db, #0d8de3);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.4rem;
  text-align: center;
  color: #4b5563;
  max-width: 900px;
  margin: 40px auto 80px;
  line-height: 1.8;
  font-weight: 400;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  max-width: 1300px;
  margin: 0 auto 80px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 30px;
  padding: 45px 35px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(26, 86, 219, 0.1);
  box-shadow: 0 15px 50px rgba(26, 86, 219, 0.08);
  height: 100%;

  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 30px 70px rgba(26, 86, 219, 0.15);
    border-color: rgba(26, 86, 219, 0.2);

    .feature-icon {
      transform: scale(1.15) rotate(5deg);
      box-shadow: 0 15px 35px ${(props) => `${props.$gradientColor}40`};
    }

    .feature-button {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: ${(props) => props.$gradient};
    border-radius: 30px 30px 0 0;
  }
`;

const FeatureIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 25px;
  background: ${(props) => props.$gradient};
  color: white;
  font-size: 42px;
  margin-bottom: 30px;
  transition: all 0.4s ease;
  box-shadow: 0 10px 30px ${(props) => `${props.$gradientColor}30`};
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 20px;
  color: #1f2937;
  line-height: 1.3;
`;

const FeatureDescription = styled.p`
  color: #6b7280;
  line-height: 1.8;
  font-size: 1.15rem;
  margin-bottom: 30px;
  min-height: 100px;
`;

const FeatureBenefits = styled.ul`
  list-style: none;
  padding: 0;
  margin: 25px 0;
`;

const BenefitItem = styled.li`
  color: #4b5563;
  margin-bottom: 12px;
  padding-left: 28px;
  position: relative;
  line-height: 1.6;
  font-size: 1.05rem;

  &::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: ${(props) => props.$color};
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

const GradientLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: ${(props) => props.$gradient};
  border-radius: 0 0 30px 30px;
  opacity: 0.5;
`;

const SpecializationSection = styled.div`
  background: linear-gradient(
    135deg,
    rgba(26, 86, 219, 0.03) 0%,
    rgba(13, 148, 136, 0.03) 100%
  );
  border-radius: 32px;
  padding: 70px 50px;
  margin: 80px auto;
  max-width: 1300px;
  border: 1px solid rgba(26, 86, 219, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: radial-gradient(
      circle,
      rgba(26, 86, 219, 0.05) 0%,
      transparent 70%
    );
    z-index: 0;
  }
`;

const SpecializationContent = styled.div`
  position: relative;
  z-index: 1;
`;

const SpecializationTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  color: #1f2937;
  margin-bottom: 50px;
  background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SpecializationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const SpecializationItem = styled.div`
  background: white;
  padding: 25px 20px;
  border-radius: 20px;
  text-align: center;
  font-weight: 700;
  color: #1a56db;
  border: 2px solid rgba(26, 86, 219, 0.15);
  transition: all 0.3s ease;
  font-size: 1.1rem;
  position: relative;
  overflow: hidden;

  &:hover {
    background: linear-gradient(135deg, #1a56db 0%, #0d8de3 100%);
    color: white;
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 15px 40px rgba(26, 86, 219, 0.2);
    border-color: transparent;

    &::after {
      content: "→";
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.2rem;
    }
  }

  &:nth-child(2n):hover {
    background: linear-gradient(135deg, #0d9488 0%, #10b981 100%);
  }

  &:nth-child(3n):hover {
    background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%);
  }

  &:nth-child(4n):hover {
    background: linear-gradient(135deg, #ec4899 0%, #f472b6 100%);
  }
`;

const SpecializationDescription = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 1.2rem;
  line-height: 1.7;
  max-width: 900px;
  margin: 0 auto;
  font-weight: 400;
`;

const features = [
  {
    icon: "💻",
    title: "Интеллектуальная онлайн-платформа",
    description:
      "Умная система адаптируется под ваш темп обучения, отслеживает прогресс и предлагает индивидуальные задания.",
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    gradientColor: "#6366f1",
    benefits: [
      "Интерактивные 3D-модели органов",
      "Автоматическая проверка заданий",
      "Персональная аналитика прогресса",
      "Мобильное приложение для учебы",
    ],
  },
  {
    icon: "👨‍🏫",
    title: "Экспертные преподаватели",
    description:
      "Занятия ведут действующие врачи и преподаватели медицинских вузов с опытом от 10 лет.",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)",
    gradientColor: "#0ea5e9",
    benefits: [
      "Кандидаты медицинских наук",
      "Практикующие хирурги и терапевты",
      "Авторы учебных пособий",
      "Члены приемных комиссий",
    ],
  },
  {
    icon: "📚",
    title: "Эксклюзивные учебные материалы",
    description:
      "Авторские сборники, основанные на реальных клинических случаях и последних научных исследованиях.",
    gradient: "linear-gradient(135deg, #10b981 0%, #0d9488 100%)",
    gradientColor: "#10b981",
    benefits: [
      "Атласы анатомии в 3D",
      "Сборники клинических задач",
      "Видеооперации и процедуры",
      "Актуальные протоколы лечения",
    ],
  },
  {
    icon: "🔬",
    title: "Виртуальные лаборатории",
    description:
      "Практикуйтесь в симуляциях медицинских процедур с использованием VR-технологий и 3D-моделирования.",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    gradientColor: "#f59e0b",
    benefits: [
      "VR-симуляция операций",
      "3D-анатомические атласы",
      "Виртуальные пациенты",
      "Диагностические симуляторы",
    ],
  },
  {
    icon: "🧘",
    title: "Психологическая подготовка",
    description:
      "Комплексная программа развития стрессоустойчивости, тайм-менеджмента и уверенности на экзаменах.",
    gradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
    gradientColor: "#ec4899",
    benefits: [
      "Тренинги по управлению стрессом",
      "Ментальные техники для запоминания",
      "Подготовка к собеседованиям",
      "Развитие врачебной эмпатии",
    ],
  },
  {
    icon: "🔄",
    title: "Постоянная поддержка",
    description:
      "Круглосуточная помощь кураторов, менторов-врачей и психологов на всех этапах подготовки.",
    gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    gradientColor: "#f97316",
    benefits: [
      "Персональный куратор 24/7",
      "Telegram-чат с преподавателями",
      "Регулярные консультации",
      "Поддержка выпускников",
    ],
  },
];

const specializations = [
  "Хирургия",
  "Терапия",
  "Педиатрия",
  "Неврология",
  "Кардиология",
  "Онкология",
  "Стоматология",
  "Психиатрия",
  "Гинекология",
  "Урология",
  "Офтальмология",
  "Дерматология",
  "Эндокринология",
  "Гастроэнтерология",
  "Пульмонология",
  "Ортопедия",
];

const FeatureGrid = () => {
  return (
    <Section>
      <Container>
        <Title>Почему 9 из 10 студентов выбирают Diamed School?</Title>
        <Description>
          Мы создали экосистему медицинского образования, которая сочетает
          фундаментальные знания с практическими навыками и психологической
          подготовкой будущего врача.
        </Description>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              $gradient={feature.gradient}
              $gradientColor={feature.gradientColor}
            >
              <FeatureIcon
                className="feature-icon"
                $gradient={feature.gradient}
                $gradientColor={feature.gradientColor}
              >
                {feature.icon}
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>

              <FeatureBenefits>
                {feature.benefits.map((benefit, idx) => (
                  <BenefitItem key={idx} $color={feature.gradientColor}>
                    {benefit}
                  </BenefitItem>
                ))}
              </FeatureBenefits>

              <GradientLine $gradient={feature.gradient} />
            </FeatureCard>
          ))}
        </FeaturesGrid>

        <SpecializationSection>
          <SpecializationContent>
            <SpecializationTitle>
              Специализации, к которым мы готовим
            </SpecializationTitle>

            <SpecializationGrid>
              {specializations.map((spec, idx) => (
                <SpecializationItem key={idx}>{spec}</SpecializationItem>
              ))}
            </SpecializationGrid>

            <SpecializationDescription>
              Выбирайте свою специализацию с первого дня подготовки — наши
              программы адаптированы под разные направления медицины. Мы поможем
              определиться с выбором и построить индивидуальную траекторию
              обучения.
            </SpecializationDescription>
          </SpecializationContent>
        </SpecializationSection>
      </Container>
    </Section>
  );
};

export default FeatureGrid;
