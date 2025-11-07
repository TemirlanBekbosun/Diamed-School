import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ChevronLeft, CheckCircle } from "lucide-react";

const HeaderWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
}));

const Breadcrumbs = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  fontSize: 14,
  "& a": {
    color: theme.palette.text.secondary,
    textDecoration: "none",
    "&:hover": { color: theme.palette.primary.main },
  },
}));

const StatusBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  backgroundColor: "#e8f8ee",
  color: "#1c6c3f",
  padding: "8px 16px",
  borderRadius: 8,
  border: "1px solid #b6e2c0",
  height: "fit-content",
}));

export default function LessonHeader() {
  return (
    <HeaderWrapper>
      <Breadcrumbs>
        <a href="#">курсы</a>
        <span>/</span>
        <a href="#">Органическая химия</a>
        <span>/</span>
        <span style={{ color: "#0a1929" }}>Урок 1</span>
      </Breadcrumbs>

      <Button
        startIcon={<ChevronLeft size={18} />}
        sx={{
          color: "#1e293b",
          textTransform: "none",
          fontSize: 14,
          p: 0,
          "&:hover": { bgcolor: "transparent", color: "#000" },
          alignSelf: "flex-start",
        }}
      >
        Назад
      </Button>

      <Typography variant="body2" color="text.secondary">
        Урок № 1
      </Typography>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        flexWrap="wrap"
        gap={2}
      >
        <Typography
          variant="h5"
          fontWeight={600}
          sx={{ color: "#0a1929", flex: 1, lineHeight: 1.4 }}
        >
          Предмет органической химии. Особенности органических веществ
        </Typography>

        <StatusBox>
          <CheckCircle size={18} />
          <Typography variant="body2" fontWeight={500}>
            Проверено 5/10 баллов
          </Typography>
        </StatusBox>
      </Box>
    </HeaderWrapper>
  );
}
