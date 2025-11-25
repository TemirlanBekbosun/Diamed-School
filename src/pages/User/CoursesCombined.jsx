import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router";
import LessonsGrid from "../../components/LessonsGrid";
import UserHeaders from "../../layout/user/userHeaders";
import Footer from "../../layout/Footer";

const allLessons = [
  {
    id: "G1",
    title: "Урок №1",
    subtitle: "Вводная лекция",
    date: "20.07.25",
    time: "19:00",
  },
  {
    id: "G2",
    title: "Урок №2",
    subtitle: "Вводная лекция",
    date: "20.07.25",
    time: "19:00",
  },
  {
    id: "G3",
    title: "Урок №2",
    subtitle: "Вводная лекция",
    date: "20.07.25",
    time: "19:00",
  },
  {
    id: "G4",
    title: "Урок №1",
    subtitle: "Вводная лекция",
    date: "20.07.25",
    time: "19:00",
  },
  {
    id: "G5",
    title: "Урок №1",
    subtitle: "Вводная лекция",
    date: "20.07.25",
    time: "19:00",
  },
  {
    id: "G6",
    title: "Урок №2",
    subtitle: "Вводная лекция",
    date: "20.07.25",
    time: "19:00",
  },
  {
    id: "G7",
    title: "Урок №1",
    subtitle: "Вводная лекция",
    date: "20.07.25",
    time: "19:00",
  },
  {
    id: "G8",
    title: "Урок №2",
    subtitle: "Вводная лекция",
    date: "20.07.25",
    time: "19:00",
  },
  {
    id: "G9",
    title: "Урок №2",
    subtitle: "Вводная лекция",
    date: "20.07.25",
    time: "19:00",
  },
  {
    id: "G10",
    title: "Урок №1",
    subtitle: "Вводная лекция",
    date: "20.07.25",
    time: "19:00",
  },
].concat(
  Array(20)
    .fill(null)
    .map((_, i) => ({
      id: `X${i + 1}`,
      title: `Урок №${(i % 2) + 1}`,
      subtitle: "Вводная лекция",
      date: "20.07.25",
      time: "19:00",
    }))
);

const Breadcrumbs = styled(Box)(({ theme }) => ({
  gap: theme.spacing(2),
  padding: theme.spacing(2, 8.0),
  color: "#5b7aa0",
  fontSize: 14,
}));

const BackButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: "#0a0a0a",
  fontSize: 18,
  fontWeight: 700,
  textTransform: "none",
  padding: theme.spacing(0.5, 0),
  minWidth: "auto",
  "&:hover": {
    background: "transparent",
    opacity: 0.8,
  },
     "&:active": {
    transform: "translateY(1px)",
  },
}));

export default function CoursesCombined() {
  const navigate = useNavigate();

  return (
    <>
      <UserHeaders />

      <Breadcrumbs>
        <Typography variant="subtitle1">курсы / Общая химия</Typography>

        <BackButton
          startIcon={
            <ArrowBackIosNewIcon
              fontSize="small"
              sx={{
                color: "#007BFF",
              }}
            />
          }
          onClick={() => navigate(-1)}
          disableRipple
        >
          Назад
        </BackButton>
      </Breadcrumbs>

      <LessonsGrid
        lessons={allLessons}
        itemsPerPage={10}
        stripeColors={["#12A84A", "#8C1A1A", "#D56B1A", "#2A1B6E", "#0C1220"]}
        showPagination={true}
      />

      <Footer />
    </>
  );
}
