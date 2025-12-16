import { Container, Typography, Stack } from "@mui/material";
import { Breadcrumb } from "./Breadcrumb";
import { CourseCard } from "./CourseCard";
import { TestSection } from "./TestSection";
import UserHeaders from "../layout/user/userHeaders";
import Footer from "../layout/Footer";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "../configs/theme";

const courses = [
  { title: "Цитология", lessons: 20 },
  { title: "Ботаника", lessons: 40 },
  { title: "Зоология", lessons: 30 },
  { title: "Анатомия", lessons: 30 },
  { title: "Общая биология", lessons: 30 },
];

export const MainBiologyContent = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserHeaders />
      <Breadcrumb />
      <Container maxWidth="100%" sx={{ bgcolor: "#F2F7FB", minHeight: "100vh" }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ mb: 5, fontWeight: 700, color: "#1a1a1a", fontSize: "2.2rem" }}
        >
          Уроки по биологии
        </Typography>

        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          sx={{ mb: 4, flexWrap: "wrap", gap: 3 }}
        >
          {courses.map((c, i) => (
            <CourseCard key={i} title={c.title} lessons={c.lessons} />
          ))}
        </Stack>

        <TestSection />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};