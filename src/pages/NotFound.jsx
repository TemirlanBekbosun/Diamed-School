import { Box, Typography, styled, keyframes } from "@mui/material";
import { useNavigate } from "react-router";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const NotFoundContainer = styled(Box)(() => ({
  minHeight: "100vh",
  background: "linear-gradient(135deg, #F2F7FB 0%, #E8F1FA 50%, #D4E4F7 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px 20px",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-50%",
    right: "-20%",
    width: "600px",
    height: "600px",
    background:
      "radial-gradient(circle, rgba(58, 134, 255, 0.08) 0%, transparent 70%)",
    borderRadius: "50%",
    animation: `${float} 6s ease-in-out infinite`,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-30%",
    left: "-10%",
    width: "500px",
    height: "500px",
    background:
      "radial-gradient(circle, rgba(255, 143, 163, 0.06) 0%, transparent 70%)",
    borderRadius: "50%",
    animation: `${float} 8s ease-in-out infinite`,
    animationDelay: "1s",
  },
}));

const ContentWrapper = styled(Box)(() => ({
  textAlign: "center",
  position: "relative",
  zIndex: 1,
  maxWidth: "700px",
  animation: `${fadeIn} 0.8s ease-out`,
}));

const ErrorCode = styled(Typography)(() => ({
  fontSize: "120px",
  fontWeight: 500,
  color: "#3A86FF",
  marginBottom: "20px",
  textShadow: "4px 4px 0px #FF8FA3",
  lineHeight: 1,
}));

const Title = styled(Typography)(() => ({
  letterSpacing: "-0.01em",
  fontSize: "48px",
  fontWeight: 500,
  marginBottom: "24px",
}));

const Description = styled(Typography)(() => ({
  fontSize: "clamp(16px, 2.5vw, 20px)",
  fontWeight: 400,
  color: "#637381",
  marginBottom: "48px",
  lineHeight: 1.6,
  maxWidth: "500px",
  margin: "0 auto 48px",
}));

const ButtonsContainer = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
  justifyContent: "center",
  flexWrap: "wrap",
  marginTop: "40px",
}));

const StyledButton = styled("button")(() => ({
  width: "200px",
  height: "54px",
  background: "#3A86FF",
  borderRadius: "8px",
  color: "#F5F5F5",
  boxShadow: "3px 3px 0px #FF8FA3",
  transition:
    "transform 0.08s cubic-bezier(0.4,0,0.2,1), box-shadow 0.08s cubic-bezier(0.4,0,0.2,1)",
  border: "1px #F5F2F9 solid",
  fontWeight: 400,
  fontSize: "18px",
  fontFamily: "Moderustic, sans-serif",
  cursor: "pointer",
  outline: "none",
  "&:active": {
    transform: "scale(0.96)",
    boxShadow: "1px 1px 0px #3A86FF",
  },
  "&:hover": {
    opacity: 0.9,
  },
}));

const SecondaryButton = styled(StyledButton)(() => ({
  background: "#fdebf1",
  color: "#3A86FF",
  border: "1px solid #FF8FA3",
  boxShadow: "3px 3px 0px #3A86FF",
  "&:active": {
    boxShadow: "1px 1px 0px #FF8FA3",
  },
}));

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <NotFoundContainer>
      <ContentWrapper>
        <ErrorCode>404</ErrorCode>
        <Title>Страница не найдена</Title>
        <Description>
          Запрашиваемая страница недоступна. Возможно, она была перемещена или
          удалена.
        </Description>
        <ButtonsContainer>
          <StyledButton onClick={handleGoHome}>На главную</StyledButton>
          <SecondaryButton onClick={handleGoBack}>Назад</SecondaryButton>
        </ButtonsContainer>
      </ContentWrapper>
    </NotFoundContainer>
  );
};

export default NotFound;
