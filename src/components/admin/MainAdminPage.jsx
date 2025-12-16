import React, { useState } from "react";
import { ChevronDown, User } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

const DashboardContainer = styled(Box)({
  minHeight: "100vh",
  backgroundColor: "#F2F7FB",
padding: "20px 60px",
});

const SubjectButton = styled(Button)({
  width: "197px",
  height: "67px",
  background: "#F5F2F9",
  borderRadius: "16px",
  color: "#3A86FF",
  boxShadow: "3px 3px 0px #3A86FF",
  transition:
    "transform 0.08s cubic-bezier(0.4,0,0.2,1), box-shadow 0.08s cubic-bezier(0.4,0,0.2,1)",
  border: "1px #FF8FA3 solid",
  fontWeight: 700,
  fontStyle: "regular",
  fontSize: "24px",
  fontFamily: "Moderustic",
  display: "flex",
  alignItems: "center",

  cursor: "pointer",
  outline: "none",

  textTransform: "none",

  "&:active": {
    transform: "scale(0.96)",
    boxShadow: "1px 1px 0px #3A86FF",
  },
});

const StatisticsGrid = styled(Box)({
  display: "flex",
  gap: "203px",
});

const MetricContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export default function MainAdminPage() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <DashboardContainer>
      <Box >
        <Typography
          sx={{
            fontWeight: "400",
            color: "#1D3452",
            marginBottom: "28px",
            fontSize: "18px",
          }}
        >
          Админ
        </Typography>

        <Box sx={{ display: "flex", gap: "80px", marginBottom: "80px" }}>
          <SubjectButton onClick={() => toggleDropdown("chemistry")}>
            Химия
            <ChevronDown
              style={{
                width: "20px",
                height: "20px",
                transform:
                  activeDropdown === "chemistry" ? "rotate(180deg)" : "none",
                transition: "transform 0.2s",
              }}
            />
          </SubjectButton>

          <SubjectButton onClick={() => toggleDropdown("biology")}>
            Биология
            <ChevronDown
              style={{
                width: "20px",
                height: "20px",
                transform:
                  activeDropdown === "biology" ? "rotate(180deg)" : "none",
                transition: "transform 0.2s",
              }}
            />
          </SubjectButton>

          <SubjectButton onClick={() => toggleDropdown("tests")}>
            Тесты
            <ChevronDown
              style={{
                width: "20px",
                height: "20px",
                transform:
                  activeDropdown === "tests" ? "rotate(180deg)" : "none",
                transition: "transform 0.2s",
              }}
            />
          </SubjectButton>
        </Box>

        <StatisticsGrid>
          <MetricContainer>
            <Typography
              variant="caption"
              sx={{
                fontWeight: "400",
                color: "#1D3452",
                marginBottom: "8px",
                fontSize: "18px",
              }}
            >
              Статистика
            </Typography>
            <Typography
              variant="h2"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                fontWeight: "500",
                color: "#1D3452",
                fontSize: "44px",
                lineHeight: "100%",
                fontFamily: "Moderustic",
              }}
            >
              Качество уроков
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "500",
                  color: "#3A86FF",
                  fontSize: "44px",
                  lineHeight: "100%",
                }}
              >
                97%
              </Typography>
            </Typography>
          </MetricContainer>

          <MetricContainer>
            <Typography
              variant="caption"
              sx={{
                fontWeight: "400",
                color: "#1D3452",
                marginBottom: "8px",
                fontSize: "18px",
              }}
            >
              Студенты
            </Typography>
            <Box sx={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "500",
                  color: "#3A86FF",
                  fontSize: "44px",
                  lineHeight: "100%",
                }}
              >
                1456
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "300",
                  color: "#3A86FF",
                  fontSize: "44px",
                  lineHeight: "100%",
                }}
              >
                +
              </Typography>
            </Box>
          </MetricContainer>

          {/* Tests Metric */}
          <MetricContainer>
            <Typography
              variant="caption"
              sx={{
                fontWeight: "400",
                color: "#1D3452",
                marginBottom: "8px",
                fontSize: "18px",
              }}
            >
              Тесты
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "500",
                color: "#3A86FF",
                fontSize: "44px",
                lineHeight: "100%",
              }}
            >
              78%
            </Typography>
          </MetricContainer>
        </StatisticsGrid>
      </Box>
    </DashboardContainer>
  );
}
