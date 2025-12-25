import { useState } from "react";
import { Book, ChevronDown, ChevronUp } from "lucide-react";
import styled from "@emotion/styled";
import iconFiles from "../../../assets/icons/IconFiles.svg";
import iconbook from "../../../assets/icons/BookIcon.svg";
const Container = styled("div")({
  backgroundColor: "##F5F2F9    ",
  height: "120px",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  cursor: "pointer",
  transition: "all 0.05s ease",
});

const Header = styled("div")(({ expanded }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: expanded ? "20px 20px 0 0 " : "20px",
  marginBottom: "0",
  border: "1px solid #3A86FF",
  transition: "all 0.3s ease",
  borderBottom: expanded && "none",
}));

const HeaderLeft = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

const IconBox = styled("div")({
  width: "125px",
  height: "80px",
  backgroundColor: "#3A86FF",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
});

const Title = styled("h1")({
  fontSize: "24px",
  fontWeight: "700",
  color: "#1D3452",
  margin: 0,
  fontFamily: "Roboto",
  letterSpacing: "0%",
  lineHeight: "30px",
});

const ToggleButton = styled("button")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  color: "#4a90e2",
  background: "none",
  border: "none",
  padding: "8px 12px",
  borderRadius: "8px",
  transition: "all 0.1s ease",
  "&:hover": {
    backgroundColor: "#f0f4f8",
  },
});

const ContentWrapper = styled("div")(({ expanded }) => ({
  backgroundColor: "#ffffff",
  borderRadius: expanded ? "0 0 20px 20px" : "0",
  border: expanded ? "1px solid #3A86FF" : "none",
  borderTop: "none",
  maxHeight: expanded ? "2000px" : "0",
  overflow: "hidden",
  transition: "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), padding 0.5s ease",
  padding: expanded ? "0" : "0",
}));

const ContentArea = styled("div")({
  backgroundColor: "#3A86FF",
  height: "355px",
  borderRadius: "16px",
  padding: "30px",
  margin: "16px",
});

const CardsContainer = styled("div")({
  display: "flex",
  gap: "24px",
  flexWrap: "wrap",
});

const LessonCard = styled("div")({
  width: "260px",
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
  },
});

const CardImageWrapper = styled("div")({
  height: "160px",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "#f5f6f8",
});

const CardImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const ProgressBox = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "14px 18px",
  borderBottom: "1px solid #f0f2f5",
  backgroundColor: "#fafbfc",
});

const ProgressText = styled("span")({
  fontSize: "15px",
  fontWeight: "500",
  color: "#657786",
  minWidth: "38px",
});

const ProgressBar = styled("div")({
  height: "5px",
  backgroundColor: "#e8ecef",
  borderRadius: "10px",
  flex: 1,
  position: "relative",
  overflow: "hidden",
});

const ProgressFill = styled("div")(({ progress }) => ({
  position: "absolute",
  left: 0,
  top: 0,
  height: "100%",
  width: `${progress}%`,
  backgroundColor: "#4a90e2",
  borderRadius: "10px",
  transition: "width 0.6s ease",
}));

const CardContent = styled("div")({
  padding: "18px 18px 22px 18px",
});

const SubjectTitle = styled("h3")({
  fontSize: "20px",
  fontWeight: "600",
  color: "#4a90e2",
  marginBottom: "6px",
  margin: "0 0 6px 0",
  letterSpacing: "-0.01em",
});

const SubjectSubtitle = styled("p")({
  fontSize: "14px",
  color: "#8899a6",
  margin: 0,
  fontWeight: "400",
});

const lessons = [
  {
    id: 1,
    title: "Химия",
    subtitle: "Пробные уроки",
    progress: 0,
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Биология",
    subtitle: "Пробные уроки",
    progress: 25,
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&h=300&fit=crop",
  },
];

export default function LessonsFolderComponent() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Container>
      <Header onClick={() => setExpanded(!expanded)} expanded={expanded}>
        <HeaderLeft>
          <IconBox>
            <img src={iconFiles} />
          </IconBox>
          <Title>Папка доступных уроков</Title>
        </HeaderLeft>
        <ToggleButton>
          <img src={iconbook} />
          {expanded ? (
            <ChevronUp size={22} style={{ color: "#3A86FF" }} />
          ) : (
            <ChevronDown size={22} />
          )}
        </ToggleButton>
      </Header>

      <ContentWrapper expanded={expanded}>
        <ContentArea>
          <CardsContainer>
            {lessons.map((lesson) => (
              <LessonCard key={lesson.id}>
                <CardImageWrapper>
                  <CardImage src={lesson.image} alt={lesson.title} />
                </CardImageWrapper>

                <ProgressBox>
                  <Book size={20} color="#657786" strokeWidth={2} />
                  <ProgressText>{lesson.progress}%</ProgressText>
                  <ProgressBar>
                    <ProgressFill progress={lesson.progress} />
                  </ProgressBar>
                </ProgressBox>

                <CardContent>
                  <SubjectTitle>{lesson.title}</SubjectTitle>
                  <SubjectSubtitle>{lesson.subtitle}</SubjectSubtitle>
                </CardContent>
              </LessonCard>
            ))}
          </CardsContainer>
        </ContentArea>
      </ContentWrapper>
    </Container>
  );
}
