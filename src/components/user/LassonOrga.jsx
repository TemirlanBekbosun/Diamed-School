import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Card = styled(Paper)(({ theme }) => ({
  borderRadius: 16,
  border: "2px solid rgba(236,95,136,0.15)",
  overflow: "wrap",
  display: "flex",
  flexDirection: "column",
  width: "232px",
  height: 191,
  marginRight: 40,
  background: "linear-gradient(135deg, #fefbfc 0%, #fdf8fa 100%)",
  boxShadow: "0 2px 8px rgba(236,95,136,0.08)",
  transition: "all 0.6s",
  cursor: "default",
  ":hover": {
    transform: "translateY(-9px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
  },
}));

const CardTop = styled("div")(({ color }) => ({
  width: "100%",
  height: 14,
  flexShrink: 0,
  background: color,
  borderRadius: "14px 14px 0 0",
}));

const CardBody = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5, 2.5, 2),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
  flex: 1,
  cursor: "pointer",
}));

const Title = styled(Typography)({
  fontSize: 18,
  fontWeight: 700,
  color: "#10203b",
  lineHeight: 1.3,
});
const Subtitle = styled(Typography)({
  color: "#3A86FF",
  fontSize: 17,
  fontWeight: 500,
});

const FooterRow = styled(Box)({
  marginTop: "auto",
  display: "flex",
  alignItems: "center",
  gap: 30,
  paddingTop: 8,
});

const DateLabel = styled(Typography)({
  fontWeight: 700,
  fontSize: 14,
  color: "#10203b",
});
const DateValue = styled(Typography)({
  fontWeight: 600,
  fontSize: 14,
  color: "#10203b",
});
const TimeSpan = styled("span")({
  color: "#5e88e6",
  fontWeight: 600,
  marginLeft: 6,
});

const PaginationWrap = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(3),
  marginTop: theme.spacing(6),
}));

const PageNumber = styled(Typography)({
  color: "#617191",
  fontWeight: 600,
  fontSize: 15,
  minWidth: 60,
  textAlign: "center",
});

export default function LessonsOrga({
  lessons = [],
  itemsPerPage = 8,
  stripeColors = ["#12A84A", "#8C1A1A", "#D56B1A", "#2A1B6E", "#0C1220"],
  showPagination = true,
}) {
  const [page, setPage] = React.useState(0);
  const totalPages = Math.max(1, Math.ceil(lessons.length / itemsPerPage));
  const start = page * itemsPerPage;
  const visible = lessons.slice(start, start + itemsPerPage);

  return (
    <Box sx={{ px: 4.5, pb: 6 }}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ maxWidth: 1200, mx: "auto" }}
      >
        {visible.map((lesson, i) => {
          const globalIndex = start + i;
          const stripeColor = stripeColors[globalIndex % stripeColors.length];

          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={2.4}
              key={lesson.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card elevation={0} sx={{ width: "100%", maxWidth: 230 }}>
                <CardTop color={stripeColor} />
                <CardBody>
                  <Title>{lesson.title}</Title>
                  <Subtitle variant="body2">{lesson.subtitle}</Subtitle>
                  <FooterRow>
                    <DateLabel>Дата:</DateLabel>
                    <DateValue>
                      {lesson.date}
                      <TimeSpan>{lesson.time}</TimeSpan>
                    </DateValue>
                  </FooterRow>
                </CardBody>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {showPagination && totalPages > 1 && (
        <PaginationWrap>
          <IconButton
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <PageNumber>
            {page + 1} / {totalPages}
          </PageNumber>
          <IconButton
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page >= totalPages - 1}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </PaginationWrap>
      )}
    </Box>
  );
}
