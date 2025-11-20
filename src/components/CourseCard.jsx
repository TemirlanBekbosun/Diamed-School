import React from "react";
import { Card, CardContent, Typography, styled, Box } from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
  width: 224,
  height: 192,
  borderRadius: 8,
  border: "2px solid #ec2366",
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
  justifyContent: "space-between",
  height: "100%",
  padding: 16,
});

const TitleTypography = styled(Typography)({
  fontWeight: 600,
  fontSize: "1.3rem",
  color: "#000000",
});

const LessonsTypography = styled(Typography)({
  fontWeight: 500,
  fontSize: "2.5rem",
  color: "#3A86FF",
  textAlign: "center",
});

export const CourseCard = ({ title, lessons }) => {
  return (
    <StyledCard>
      <StyledCardContent>
        <TitleTypography variant="subtitle1">{title}</TitleTypography>
        <Box /> 
        <LessonsTypography variant="h5">{lessons} уроков</LessonsTypography>
      </StyledCardContent>
    </StyledCard>
  );
};
