import { Container, Typography, Stack } from "@mui/material";
import { ChemBreadcrumb } from "../pages/ChemBreadcrumb";
import { ChemTopicCard } from "../pages/ChemTopicCard";
import { ChemTestSection } from "./ChemTestSection";
import UserHeaders from "../layout/user/userHeaders";
import Footer from "../layout/Footer";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "../configs/theme";

const courses = [
  { title: "Неорганическая химия", lessons: 50 },
  { title: "Общая химия", lessons: 30 },
  { title: "Органическая химия", lessons: 60 },
];

export const ChemistryPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserHeaders />
      <ChemBreadcrumb />
      <Container
        maxWidth="100%"
        sx={{ bgcolor: "#F2F7FB", minHeight: "100vh" }}
      >
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ mb: 4, fontWeight: 500, color: "#1D3452", fontSize: "2.9rem" }}
        >
          Уроки по химии
        </Typography>

        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          sx={{ mb: 4, flexWrap: "wrap", gap: 3 }}
        >
          {courses.map((c, i) => (
            <ChemTopicCard key={i} title={c.title} lessons={c.lessons} />
          ))}
        </Stack>

        <ChemTestSection />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};
