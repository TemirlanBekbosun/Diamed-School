import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import UserHeaders from "../../layout/user/userHeaders";
import Footer from "../../layout/Footer";
import { fetchLessons } from "../../store/inorganicThunk";
import LessonsInor from "../../components/user/LassonInor";

const Breadcrumbs = styled(Box)(({ theme }) => ({
  color: "#5b7aa0",
  fontSize: 14,
  marginLeft: 62,
}));

const BackButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: "#0a0a0a",
  fontSize: 18,
  fontWeight: 700,
  textTransform: "none",
  "&:hover": { background: "transparent", opacity: 0.8 },
}));

const LoadingContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "50vh",
});

export default function InorganicChemistry() {
  const navigate = useNavigate();
  const { sectionId } = useParams(); 
  const dispatch = useDispatch();

  const {
    lessons = [],
    loading,
    error,
  } = useSelector((state) => state.inorganic);

  useEffect(() => {
    const id = sectionId ? Number(sectionId) : 1;
    dispatch(fetchLessons(id));
  }, [sectionId, dispatch]);

  const formattedLessons = lessons.map((lesson) => {
    let dateStr = "20.07.25";
    let timeStr = "19:00";

    if (lesson.date) {
      const [datePart, timePartWithMillis] = lesson.date.split("T");
      dateStr = datePart.replace(/-/g, "."); 

      if (timePartWithMillis) {
        timeStr = timePartWithMillis.substring(0, 5); 
      }
    }

    return {
      id: String(lesson.id),
      subtitle: lesson.name || "Вводная лекция",
      date: dateStr,
      time: timeStr,
    };
  });

  return (
    <>
      <UserHeaders />

      <Breadcrumbs>
        <Typography variant="subtitle1">курсы / Неорганическая химия</Typography>
        <BackButton
          startIcon={
            <ArrowBackIosNewIcon fontSize="small" sx={{ color: "#007BFF" }} />
          }
          onClick={() => navigate(-1)}
          disableRipple
        >
          Назад
        </BackButton>
      </Breadcrumbs>

      {loading && (
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      )}

      {error && (
        <Box sx={{ px: 0, mt: 2 }}>
          <Alert severity="error">
            Ката:{" "}
            {typeof error === "string"
              ? error
              : error?.message || "Маалымат жүктөлбөдү"}
          </Alert>
        </Box>
      )}

      {!loading && !error && formattedLessons.length === 0 && (
        <Box sx={{ px: 0, mt: 4, textAlign: "center" }}>
          <Typography>Бул бөлүмдө уроктор жок</Typography>
        </Box>
      )}

      {!loading && !error && formattedLessons.length > 0 && (
        <LessonsInor
          lessons={formattedLessons}
          itemsPerPage={8}
          stripeColors={["#12A84A", "#8C1A1A", "#D56B1A", "#2A1B6E", "#0C1220"]}
          showPagination={true}
        />
      )}

      <Footer />
    </>
  );
}
