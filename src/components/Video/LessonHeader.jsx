import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CheckCircle } from "lucide-react";

const HeaderWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
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

      {/* 🔄 Жаңы Breadcrumb + Назад */}
      <Box sx={{ paddingLeft: 0 }}>
        <Box
          sx={{
            fontSize: "0.95rem",
            color: "#666",
          }}
        >
          <Link href="/" underline="hover" sx={{ color: "#666", fontWeight: 500 }}>
            курсы
          </Link>
          <Typography component="span" sx={{ mx: 0.5 }}>
            /
          </Typography>
          <Typography component="span" sx={{ fontWeight: 600 }}>
            биология
          </Typography>
        </Box>

        <Link
          href="/"
          underline="none"
          sx={{
            mt: 2,
            display: "flex",
            alignItems: "center",
            fontWeight: 600,
            fontSize: "1rem",
            color: "black",
            "&:hover": { color: "#333" },
          }}
        >
          <ArrowBackIcon
            fontSize="small"
            sx={{ mr: 0.5, color: "#1976d2" }}
          />
          Назад
        </Link>
      </Box>

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
