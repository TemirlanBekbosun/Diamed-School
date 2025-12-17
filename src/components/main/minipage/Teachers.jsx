import { styled } from "@mui/material";

const PageWrapper = styled("div")({
  minHeight: "100vh",
  background: "linear-gradient(180deg, #F2F7FB 0%, #E8F3FF 100%)",
  padding: "80px 60px",
});

const HeaderSection = styled("div")({
  textAlign: "center",
  marginBottom: "80px",

  "& h1": {
    fontSize: "78px",
    fontWeight: 500,
    fontFamily: "Moderustic, sans-serif",
    color: "#121A25",
    lineHeight: "100%",
    letterSpacing: "0.5%",
    marginBottom: "20px",
  },

  "& p": {
    fontSize: "24px",
    fontWeight: 400,
    fontFamily: "Roboto, sans-serif",
    color: "#1D3452",
    opacity: 0.7,
  },
});

const TeachersGrid = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
  gap: "40px",
  maxWidth: "1400px",
  margin: "0 auto",
});

const TeacherCard = styled("div")({
  backgroundColor: "#F5F2F9",
  borderRadius: "16px",
  border: "1px solid #FF8FA3",
  padding: "32px 28px",
  transition:
    "transform 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.5s cubic-bezier(0.4,0,0.2,1), border-color 0.5s cubic-bezier(0.4,0,0.2,1)",
  boxShadow: "0 4px 24px 0 rgba(58,134,255,0.08)",
  willChange: "transform",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",

  "&:hover": {
    transform: "translate(12px, -6px) rotateZ(1.5deg) scale(1.02)",
    boxShadow: "0 16px 40px 0 rgba(58,134,255,0.18)",
    borderColor: "#3A86FF",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    width: "100px",
    height: "100px",
    background:
      "radial-gradient(circle, rgba(58,134,255,0.1) 0%, transparent 70%)",
    borderRadius: "50%",
    transform: "translate(30%, -30%)",
    transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
  },

  "&:hover::before": {
    transform: "translate(20%, -20%) scale(1.5)",
  },
});

const TeacherAvatar = styled("div")({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #3A86FF 0%, #FF8FA3 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "42px",
  fontWeight: 600,
  color: "#F5F5F5",
  marginBottom: "24px",
  boxShadow: "0 8px 20px rgba(58,134,255,0.25)",
});

const TeacherName = styled("div")({
  fontSize: "32px",
  fontWeight: 500,
  fontFamily: "Moderustic, sans-serif",
  color: "#1D3452",
  lineHeight: "120%",
  marginBottom: "12px",
});

const TeacherRole = styled("div")({
  fontSize: "20px",
  fontWeight: 500,
  fontFamily: "Roboto, sans-serif",
  color: "#3A86FF",
  marginBottom: "16px",
});

const TeacherDescription = styled("div")({
  fontSize: "16px",
  fontWeight: 400,
  fontFamily: "Roboto, sans-serif",
  color: "#1D3452",
  opacity: 0.7,
  lineHeight: "24px",
  marginBottom: "20px",
});

const SkillsContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginBottom: "24px",
});

const SkillTag = styled("span")({
  padding: "6px 14px",
  backgroundColor: "rgba(58,134,255,0.1)",
  borderRadius: "20px",
  fontSize: "14px",
  fontWeight: 500,
  fontFamily: "Roboto, sans-serif",
  color: "#3A86FF",
  border: "1px solid rgba(58,134,255,0.2)",
});

const ContactButton = styled("button")({
  width: "100%",
  height: "48px",
  background: "#3A86FF",
  borderRadius: "8px",
  color: "#F5F5F5",
  boxShadow: "3px 3px 0px #FF8FA3",
  transition:
    "transform 0.08s cubic-bezier(0.4,0,0.2,1), box-shadow 0.08s cubic-bezier(0.4,0,0.2,1)",
  border: "1px #F5F2F9 solid",
  fontWeight: 500,
  fontSize: "16px",
  fontFamily: "Moderustic, sans-serif",
  cursor: "pointer",
  outline: "none",

  "&:active": {
    transform: "scale(0.96)",
    boxShadow: "1px 1px 0px #3A86FF",
  },
});

const StatsRow = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  padding: "16px 0",
  borderTop: "1px solid rgba(58,134,255,0.15)",
  marginTop: "16px",
});

const StatItem = styled("div")({
  textAlign: "center",

  "& .stat-number": {
    fontSize: "24px",
    fontWeight: 600,
    fontFamily: "Moderustic, sans-serif",
    color: "#3A86FF",
  },

  "& .stat-label": {
    fontSize: "12px",
    fontWeight: 400,
    fontFamily: "Roboto, sans-serif",
    color: "#1D3452",
    opacity: 0.6,
    marginTop: "4px",
  },
});

const teachers = [
  {
    name: "Анна Иванова",
    role: "Frontend Developer",
    description:
      "Эксперт в React и современных веб-технологиях с опытом работы более 8 лет",
    skills: ["React", "TypeScript", "Next.js", "CSS"],
    students: 156,
    courses: 12,
    rating: 4.9,
    avatar: "АИ",
  },
  {
    name: "Дмитрий Петров",
    role: "Backend Developer",
    description:
      "Специалист по Node.js и архитектуре микросервисов, автор популярных курсов",
    skills: ["Node.js", "Python", "PostgreSQL", "Docker"],
    students: 203,
    courses: 8,
    rating: 4.8,
    avatar: "ДП",
  },
  {
    name: "Мария Сидорова",
    role: "UX/UI Designer",
    description: "Создаю интуитивные интерфейсы и обучаю дизайн-мышлению",
    skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
    students: 189,
    courses: 10,
    rating: 5.0,
    avatar: "МС",
  },
  {
    name: "Алексей Козлов",
    role: "DevOps Engineer",
    description:
      "Практик автоматизации и CI/CD процессов с международным опытом",
    skills: ["Kubernetes", "AWS", "Jenkins", "Terraform"],
    students: 134,
    courses: 6,
    rating: 4.7,
    avatar: "АК",
  },
  {
    name: "Елена Новикова",
    role: "Mobile Developer",
    description: "Разработчик кроссплатформенных мобильных приложений",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    students: 167,
    courses: 9,
    rating: 4.9,
    avatar: "ЕН",
  },
  {
    name: "Игорь Смирнов",
    role: "Data Scientist",
    description: "Специалист по машинному обучению и анализу данных",
    skills: ["Python", "TensorFlow", "ML", "Data Analysis"],
    students: 145,
    courses: 7,
    rating: 4.8,
    avatar: "ИС",
  },
];

export default function TeachersPage() {
  return (
    <PageWrapper>
      <HeaderSection>
        <h1>Наши преподаватели</h1>
        <p>Учитесь у лучших специалистов индустрии</p>
      </HeaderSection>

      <TeachersGrid>
        {teachers.map((teacher, index) => (
          <TeacherCard key={index}>
            <TeacherAvatar>{teacher.avatar}</TeacherAvatar>

            <TeacherName>{teacher.name}</TeacherName>
            <TeacherRole>{teacher.role}</TeacherRole>

            <TeacherDescription>{teacher.description}</TeacherDescription>

            <SkillsContainer>
              {teacher.skills.map((skill, idx) => (
                <SkillTag key={idx}>{skill}</SkillTag>
              ))}
            </SkillsContainer>

            <ContactButton>Связаться с преподавателем</ContactButton>

            <StatsRow>
              <StatItem>
                <div className="stat-number">{teacher.students}</div>
                <div className="stat-label">Студентов</div>
              </StatItem>
              <StatItem>
                <div className="stat-number">{teacher.courses}</div>
                <div className="stat-label">Курсов</div>
              </StatItem>
              <StatItem>
                <div className="stat-number">{teacher.rating}</div>
                <div className="stat-label">Рейтинг</div>
              </StatItem>
            </StatsRow>
          </TeacherCard>
        ))}
      </TeachersGrid>
    </PageWrapper>
  );
}
