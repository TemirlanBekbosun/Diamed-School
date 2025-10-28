import { useState, useEffect } from "react";
import styled from "styled-components";
import { ArrowForward, Science, Biotech, Search } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router";
import titleUnderlinee from "../../assets/icons/Vector8.svg";
import titleUnderlineer from "../../assets/icons/Vector9.svg";
import atomIcon from "../../assets/icons/AtomContainer.svg";
import sotyicon from "../../assets/icons/SotyIcon.svg";
import bioIcon from "../../assets/icons/Bioicon.svg";

const Ourcourses = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [selectedCourse, setSelectedCourse] = useState(courseId || "chemistry");

  useEffect(() => {
    if (courseId) {
      setSelectedCourse(courseId);
    }
  }, [courseId]);

  const courses = [
    { id: "chemistry", number: "01", title: "Химия", color: "#1D3452" },
    { id: "biology", number: "02", title: "Биология", color: "#1D3452" },
    { id: "tests", number: "03", title: "Тесты", color: "#1D3452" },
    { id: "books", number: "04", title: "Книги", color: "#1D3452" },
    { id: "cheatsheets", number: "05", title: "Шпоры", color: "#1D3452" },
  ];

  const courseDetails = {
    chemistry: {
      title: "Химия",
      titleColor: "#FF8FA3",
      subtitle: "для поступления",
      description:
        "Базовая и углубленная подготовка по химии для сдачи ОРТ, ЕГЭ, ЕНТ. Разбор заданий, практика экзаменационных тестов.",
      price: "5000",
      currency: "сом месяц",
      icons: [
        { Icon: Science, color: "#60A5FA" },
        { Icon: Search, color: "#60A5FA" },
        { Icon: Biotech, color: "#60A5FA" },
      ],
    },
    biology: {
      title: "Биология",
      titleColor: "#3A86FF",
      subtitle: "с нуля до экзамена",
      description:
        "Полная программа подготовки по биологии: теория, задания, тренажёры и проверка знаний.",
      price: "5000",
      currency: "сом месяц",
      icons: [
        { Icon: Biotech, color: "#60A5FA" },
        { Icon: Search, color: "#60A5FA" },
        { Icon: Science, color: "#60A5FA" },
      ],
    },
    tests: {
      title: "Тесты",
      titleColor: "#FF8FA3",
      subtitle: "онлайн практика",
      description:
        "Большая база тематических и экзаменационных тестов с моментальной проверкой и разбором.",
      price: "бесплатно",
      currency: "",
      icons: [{ Icon: Search, color: "#60A5FA" }],
    },
    books: {
      title: "Книги",
      titleColor: "#3A86FF",
      subtitle: "лучшие материалы",
      description:
        "Подборка книг и конспектов для самостоятельной подготовки по химии и биологии.",
      price: "бесплатно",
      currency: "",
      icons: [{ Icon: Science, color: "#60A5FA" }],
    },
    cheatsheets: {
      title: "Шпоры",
      titleColor: "#1D3452",
      subtitle: "выжимки формул",
      description:
        "Краткие шпаргалки по ключевым темам: формулы, определения, схемы.",
      price: "бесплатно",
      currency: "",
      icons: [{ Icon: Science, color: "#60A5FA" }],
    },
  };

  const details = courseDetails[selectedCourse] || courseDetails.chemistry;

  const handleCourseClick = (courseId) => {
    setSelectedCourse(courseId);
    navigate(`/courses/${courseId}`, { replace: true });
  };

  return (
    <MainContainer>
      <Container>
        <HeaderSection>
          <Title>
            Наши курсы
            <TitleUnderline src={titleUnderlinee} alt="title underline" />
          </Title>
        </HeaderSection>

        <MainGrid>
          <CoursesList>
            {courses.map((course, index) => (
              <CourseCard
                key={course.id}
                onClick={() => handleCourseClick(course.id)}
                isSelected={course.id === selectedCourse}
              >
                <CourseCardContent>
                  <CourseInfo>
                    <CourseNumber>{course.number}</CourseNumber>
                    <CourseTitle color={course.color}>
                      {course.title}
                    </CourseTitle>
                  </CourseInfo>
                  <ArrowIcon
                    fontSize="80px"
                    isSelected={course.id === selectedCourse}
                  />
                </CourseCardContent>
              </CourseCard>
            ))}
          </CoursesList>

          <DetailsCard>
            <DetailsCardContent>
              <TopIcon>
                <ScienceIcon src={atomIcon} />
              </TopIcon>

              <TitleSection>
                <CourseTitleMain titleColor={details.titleColor}>
                  {details.title}
                  <CourseTitleUnderline
                    src={titleUnderlineer}
                    alt="title underline"
                  />
                </CourseTitleMain>
                <CourseSubtitle>{details.subtitle}</CourseSubtitle>
              </TitleSection>

              <Description>{details.description}</Description>

              <PriceSection>
                {details.price && (
                  <>
                    <Price>{details.price}</Price>
                    {details.currency && (
                      <Currency>{details.currency}</Currency>
                    )}
                  </>
                )}
                <Iconstyled src={sotyicon} />
              </PriceSection>
              <div className="bottom-icons">
                <BiotechIcon src={bioIcon} />

                <CTAButton>Записаться на курс</CTAButton>
              </div>
            </DetailsCardContent>
          </DetailsCard>
        </MainGrid>

        <BottomSection>
          <BottomButton>Пробные уроки</BottomButton>
        </BottomSection>
      </Container>
    </MainContainer>
  );
};

export default Ourcourses;

const Iconstyled = styled.img`
  display: inline;
  position: relative;
  left: 250px;
  top: 4px;
`;

const MainContainer = styled.div`
  min-height: 100vh;
  padding: 64px 16px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderSection = styled.div`
  margin-bottom: 48px;
  text-align: center;
`;

const Title = styled.h1`
  font-family: "Moderustic";
  font-weight: 500;
  font-size: 78px;
  color: #1d3452;
  position: relative;
  display: inline-block;
  margin-bottom: 16px;
  font-style: medium;
  line-height: 100%;
`;

const TitleUnderline = styled.img`
  position: absolute;
  top: 88px;
  right: 9px;
  z-index: -1;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: start;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1.2fr;
  }
`;

const CoursesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CourseCard = styled.div`
  width: 600px;
  height: 87px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "#EFF6FF" : "#fff")};
  border: ${(props) =>
    props.isSelected ? "2px solid #60A5FA" : "0px solid transparent"};
  border-radius: 16px;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.isSelected
      ? "0 4px 12px rgba(96, 165, 250, 0.15)"
      : "0 0px 0px rgba(0,0,0,0.04)"};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  }
`;

const CourseCardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 24px;
`;

const CourseInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const CourseNumber = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #ff8fa3;
  min-width: 32px;
  font-style: Bold;
  line-height: 30px;
  letter-spacing: 0%;
  font-family: "Roboto";
  padding: 0 0 35px 0;
`;

const CourseTitle = styled("h1").withConfig({
  shouldForwardProp: (prop) => prop !== "titleColor",
})`
  font-size: 44px;
  font-weight: 600;
  color: ${(props) => props.titleColor};
  font-family: "Moderustic";
`;

const ArrowIcon = styled(ArrowForward, {
  shouldForwardProp: (prop) => prop !== "isSelected",
})(({ isSelected }) => ({
  fontSize: "45px",
  color: isSelected ? "#60A5FA" : "#1D3452",
}));

const DetailsCard = styled.div`
  width: 600px;
  height: 531px;
  background-color: #f5f2f9;
  border: 1px solid #ff8fa3;
  border-radius: 16px;
  position: relative;
  overflow: visible;
`;

const DetailsCardContent = styled.div`
  padding: 40px;
  position: relative;
  .bottom-icons {
    display: flex;
    gap: 79px;
    justify-content: center;
    padding: 10px 100px 0 0;
  }
`;

const TopIcon = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
`;

const ScienceIcon = styled.img`
  padding: 30px 0 0 0;
`;

const TitleSection = styled.div`
  margin-bottom: 24px;
`;

const CourseTitleMain = styled.h1.withConfig({
  shouldForwardProp: (prop) => prop !== "titleColor",
})`
  font-size: 44px;
  font-weight: 600;
  color: ${(props) => props.titleColor};
  position: relative;
  display: inline-block;
  margin-bottom: 8px;
  margin-top: 0;
  font-family: "Moderustic";
`;

const CourseTitleUnderline = styled.img`
  position: absolute;
  bottom: 0;
  left: 10px;
  top: 52px;
`;

const CourseSubtitle = styled.span`
  font-size: 44px;
  font-weight: 600;
  color: #1d3452;
  font-family: "Moderustic";
  display: block;
`;

const Description = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #1d3452;
  width: 500px;
  height: 107px;
  margin-top: 0;
`;

const PriceSection = styled.div`
  padding: 17px 0 25px 0;
`;

const Price = styled.h2`
  font-size: 44px;
  font-weight: 500;
  color: #3a86ff;
  line-height: 100%;
  font-family: "Moderustic";
  letter-spacing: 0.5%;
  font-style: Medium;
`;

const Currency = styled.h2`
  font-size: 44px;
  font-weight: 500;
  color: #1d3452;
  line-height: 100%;
  font-family: "Moderustic";
  letter-spacing: 0.5%;
  font-style: Medium;
  display: inline-block;
`;

const BiotechIcon = styled.img``;

const CTAButton = styled.button`
  width: 323px;
  height: 57px;
  background: #3a86ff;
  border-radius: 8px;
  color: #f5f5f5;
  box-shadow: 3px 3px 0px #ff8fa3;
  transition: transform 0.08s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.08s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px #f5f2f9 solid;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  font-family: "Moderustic";
  cursor: pointer;
  outline: none;
  &:active {
    transform: scale(0.96);
    box-shadow: 1px 1px 0px #3a86ff;
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
`;

const BottomButton = styled.button`
  width: 317px;
  height: 57px;
  background: #3a86ff;
  border-radius: 8px;
  color: #f5f5f5;
  box-shadow: 3px 3px 0px #ff8fa3;
  transition: transform 0.08s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.08s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px #f5f2f9 solid;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  font-family: "Moderustic";
  cursor: pointer;
  outline: none;
  &:active {
    transform: scale(0.96);
    box-shadow: 1px 1px 0px #3a86ff;
  }
`;
