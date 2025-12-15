import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
  styled,
} from "@mui/material";
import { BookmarkBorder } from "@mui/icons-material";
import Button from "../UI/Button";

const NewsAndArticles = () => {
  const articles = [
    {
      id: 1,
      type: "top",
      title: "Топ-5",
      subtitle: "Ошибок при изучении биологии",
      content:
        "1. Зубрёжка без понимания\nМногие пытаются выучить определения и термины наизусть, не вникая в суть процессов. Это приводит к тому, что знания быстро забываются и не помогают на практике. Важно понимать, как и зачем происходят биологические процессы.",
    },
    {
      id: 2,
      type: "score",
      title: "140",
      subtitle: "Совет от Элнура - 140 баллов по химии на ОРТ 2024",
      content:
        "Готовьтесь заранее! Не откладывайте подготовку на последний момент. Начинать с 9–10 класса — идеальный вариант. Записывайтесь на курсы, берите качественные книги и регулярно проходите пробные тесты, чтобы понимать, на каком уровне вы находитесь.",
    },
    {
      id: 3,
      type: "top",
      title: "Топ-5",
      subtitle: "Ошибок при изучении биологии",
      content:
        "1. Зубрёжка без понимания\nМногие пытаются выучить определения и термины наизусть, не вникая в суть процессов. Это приводит к тому, что знания быстро забываются и не помогают на практике. Важно понимать, как и зачем происходят биологические процессы.",
    },
    {
      id: 4,
      type: "score",
      title: "140",
      subtitle: "Совет от Элнура - 140 баллов по химии на ОРТ 2024",
      content:
        "Готовьтесь заранее! Не откладывайте подготовку на последний момент. Начинать с 9–10 класса — идеальный вариант. Записывайтесь на курсы, берите качественные книги и регулярно проходите пробные тесты, чтобы понимать, на каком уровне вы находитесь.",
    },
  ];

  return (
    <PageContainer>
      <Container maxWidth="lg">
        <HeaderContainer>
          <BookmarkIcon position="left" />
          <Title variant="h1">
            Новости и полезные <HighlightedText>статьи</HighlightedText>
          </Title>
          <BookmarkIcon position="right" />
        </HeaderContainer>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              {articles.slice(0, 2).map((article) => (
                <Grid item xs={12} md={6} key={article.id}>
                  <StyledCard cardtype={article.type}>
                    {article.type === "top" ? (
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            minWidth: "150px",
                            backgroundColor: "rgba(255, 255, 255, 0.15)",
                            p: 3,
                          }}
                        >
                          <CardTitle variant="h2" cardtype={article.type}>
                            {article.title}
                          </CardTitle>
                        </Box>

                        <CardContent
                          sx={{
                            p: 3,
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Subtitle variant="h3" cardtype={article.type}>
                            {article.subtitle}
                          </Subtitle>

                          <ContentText variant="body1" cardtype={article.type}>
                            {article.content}
                          </ContentText>
                        </CardContent>
                      </>
                    ) : (
                      <CardContent
                        sx={{
                          p: 4,
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <CardTitle variant="h2" cardtype={article.type}>
                          {article.title}
                        </CardTitle>

                        {article.type === "score" && (
                          <BallsText>баллов</BallsText>
                        )}

                        <Subtitle variant="h3" cardtype={article.type}>
                          {article.subtitle}
                        </Subtitle>

                        <ContentText variant="body1" cardtype={article.type}>
                          {article.content}
                        </ContentText>
                      </CardContent>
                    )}
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              {articles.slice(2, 4).map((article) => (
                <Grid item xs={12} md={6} key={article.id}>
                  <StyledCard cardtype={article.type}>
                    {article.type === "top" ? (
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            minWidth: "150px",
                            backgroundColor: "rgba(255, 255, 255, 0.15)",
                            p: 3,
                          }}
                        >
                          <CardTitle variant="h2" cardtype={article.type}>
                            {article.title}
                          </CardTitle>
                        </Box>

                        <CardContent
                          sx={{
                            p: 3,
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Subtitle variant="h3" cardtype={article.type}>
                            {article.subtitle}
                          </Subtitle>

                          <ContentText variant="body1" cardtype={article.type}>
                            {article.content}
                          </ContentText>
                        </CardContent>
                      </>
                    ) : (
                      <CardContent
                        sx={{
                          p: 4,
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <CardTitle variant="h2" cardtype={article.type}>
                          {article.title}
                        </CardTitle>

                        {article.type === "score" && (
                          <BallsText>баллов</BallsText>
                        )}

                        <Subtitle variant="h3" cardtype={article.type}>
                          {article.subtitle}
                        </Subtitle>

                        <ContentText variant="body1" cardtype={article.type}>
                          {article.content}
                        </ContentText>
                      </CardContent>
                    )}
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Button variant="contained">Смотреть все статьи</Button>
        </Box>
      </Container>
    </PageContainer>
  );
};

export default NewsAndArticles;

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const HeaderContainer = styled(Box)({
  position: "relative",
  marginBottom: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const BookmarkIcon = styled(BookmarkBorder)(({ position }) => ({
  position: "absolute",
  left: position === "left" ? "10%" : "auto",
  right: position === "right" ? "10%" : "auto",
  color: "#FF93A2",
  fontSize: "2rem",
  transform: position === "left" ? "rotate(-15deg)" : "rotate(15deg)",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  textAlign: "center",
  color: "#1A1A1A",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
}));

const HighlightedText = styled("span")({
  color: "#FF93A2",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-4px",
    left: 0,
    right: 0,
    height: "3px",
    background: "#FF93A2",
    borderRadius: "2px",
  },
});

const StyledCard = styled(Card)(({ cardtype }) => ({
  height: "100%",
  borderRadius: "20px",
  background:
    cardtype === "top"
      ? "linear-gradient(135deg, #5B9FED 0%, #4A8DD9 100%)"
      : "linear-gradient(135deg, #FFFFFF 0%, #F5F8FF 100%)",
  boxShadow: "0px 4px 20px rgba(74, 144, 226, 0.15)",
  border: cardtype === "score" ? "2px solid #E8F0FE" : "2px solid transparent",
  position: "relative",
  overflow: "visible",
  transition: "all 0.3s ease",
  display: "flex",
  flexDirection: cardtype === "top" ? "row" : "column",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0px 8px 30px rgba(74, 144, 226, 0.25)",
  },
}));

const CardTitle = styled(Typography)(({ cardtype }) => ({
  fontSize: cardtype === "score" ? "4rem" : "3rem",
  fontWeight: 800,
  marginBottom: "8px",
  color: cardtype === "top" ? "#FFFFFF" : "#4A8DD9",
  lineHeight: 1,
  textShadow:
    cardtype === "score" ? "0px 2px 4px rgba(74, 141, 217, 0.1)" : "none",
}));

const BallsText = styled(Typography)({
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "#4A8DD9",
  marginBottom: "16px",
});

const Subtitle = styled(Typography)(({ cardtype }) => ({
  fontSize: "1.125rem",
  fontWeight: 700,
  marginBottom: "16px",
  color: cardtype === "top" ? "#FFFFFF" : "#1A1A1A",
  lineHeight: 1.4,
}));

const ContentText = styled(Typography)(({ cardtype }) => ({
  whiteSpace: "pre-line",
  lineHeight: 1.7,
  color: cardtype === "top" ? "#FFFFFF" : "#4A4A4A",
  fontSize: "0.95rem",
  flex: 1,
}));
