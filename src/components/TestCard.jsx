import { Card, CardMedia, CardContent, Typography, Box, styled } from "@mui/material";
import girlImg from "../assets/images/Catalog.png";

const StyledCard = styled(Card)({
  width: 200, 
  borderRadius: 24,
  overflow: "hidden",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  transition: "all 0.3s ease",
  backgroundColor: "white",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 12px 32px rgba(58,134,255,0.15)",
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: 140,
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px 20px 0 0",
  },
});

const ContentBox = styled(CardContent)({
  padding: "20px 20px 24px",
  textAlign: "center",
  backgroundColor: "white",
  borderRadius: "0 0 20px 20px",
});

const Title = styled(Typography)({
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "#3A86FF",
  marginBottom: 24, 
  lineHeight: 1.2,
});

const InfoRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 16, 
});

const Label = styled(Typography)({
  fontSize: "1.2rem",
  fontWeight: 400,
  color: "#1a1a1a",
});

const ScoreContainer = styled(Box)({
  display: "flex",
  alignItems: "baseline",
  gap: 3,
});

const ScoreZero = styled(Typography)({
  fontSize: "1.2rem",
  fontWeight: 400,
  color: "#3A86FF",
});

const ScoreRest = styled(Typography)({
  fontSize: "1.2rem",
  fontWeight: 400,
  color: "#e91e63",
});

export const TestCard = ({ title }) => (
  <StyledCard>
    <StyledCardMedia>
      <img src={girlImg} alt={title} />
    </StyledCardMedia>
    <ContentBox>
      <Title>{title}</Title>
      <InfoRow>
        <Label>Тест</Label>
        <ScoreContainer>
          <ScoreZero>0</ScoreZero>
          <ScoreRest>/100</ScoreRest>
        </ScoreContainer>
      </InfoRow>
    </ContentBox>
  </StyledCard>
);