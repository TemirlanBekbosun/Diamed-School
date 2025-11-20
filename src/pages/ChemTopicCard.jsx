import { Card, CardContent, Typography, styled, Box } from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
  width: 400,
  height: 200,
  borderRadius: 16,
  border: "2px solid #FF8FA3",
  backgroundColor: "#f8f4f5",
  transition: "all 0.3s ease",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    borderColor: "#ff4081",
    backgroundColor: "#f6f4f5",
    transform: "translateY(-4px)",
    boxShadow: "0 6px 16px rgba(255,64,129,0.15)",
  },
  "&:active": {
    transform: "translateY(-1px)",
  },
}));

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "100%",
  padding: 16,
});

const TitleTypography = styled(Typography)({
  fontWeight: 700,
  fontSize: "1.5rem",
  color: "#1D3452",
});

const LessonsTypography = styled(Typography)({
  fontWeight: 500,
  fontSize: "2.5rem",
  color: "#3A86FF",
});

export const ChemTopicCard = ({ title, lessons }) => {
  return (
    <StyledCard>
      <StyledCardContent>
        <TitleTypography variant="subtitle1">{title}</TitleTypography>
        <Box /> 
        <LessonsTypography variant="h2">{lessons} уроков</LessonsTypography>
      </StyledCardContent>
    </StyledCard>
  );
};
