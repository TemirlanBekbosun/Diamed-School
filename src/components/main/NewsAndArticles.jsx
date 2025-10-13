import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid,
  Container
} from '@mui/material';

const NewsAndArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Топ-5",
      subtitle: "Ошибок при изучении биологии",
      content: "1. Зубрёжка без понимания\nМногие пытаются выучить определения и термины наизусть, не вникая в суть процессов. Это приводит к тому, что знания быстро забываются и не помогают на практике. Важно понимать, как и зачем происходят биологические процессы."
    },
    {
      id: 2,
      title: "Топ-5",
      subtitle: "Совет от Элнура - 140 баллов по химии на ОРТ 2024",
      content: "Готовьтесь заранее! Не откладывайте подготовку на последний момент. Начинать с 9–10 класса — идеальный вариант. Записывайтесь на курсы, берите качественные книги и регулярно проходите пробные тесты, чтобы понимать, на каком уровне вы находитесь."
    },
    {
      id: 3,
      title: "Топ-5",
      subtitle: "Ошибок при изучении биологии",
      content: "1. Зубрёжка без понимания\nМногие пытаются выучить определения и термины наизусть, не вникая в суть процессов. Это приводит к тому, что знания быстро забываются и не помогают на практике. Важно понимать, как и зачем происходят биологические процессы."
    },
    {
      id: 4,
      title: "Топ-5",
      subtitle: "Совет от Элнура - 140 баллов по химии на ОРТ 2024",
      content: "Готовьтесь заранее! Не откладывайте подготовку на последний момент. Начинать с 9–10 класса — идеальный вариант. Записывайтесь на курсы, берите качественные книги и регулярно проходите пробные тесты, чтобы понимать, на каком уровне вы находитесь."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography 
        variant="h1" 
        component="h1"
        sx={{ 
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 4
        }}
      >
        Новости и полезные статьи
      </Typography>

      <Grid container spacing={3}>
        {articles.map((article) => (
          <Grid item xs={12} md={6} key={article.id}>
            <Card 
              sx={{ 
                height: '100%',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                borderRadius: '8px',
                transition: 'box-shadow 0.3s',
                '&:hover': {
                  boxShadow: '0px 4px 16px rgba(0,0,0,0.15)'
                }
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography 
                  variant="h2"
                  sx={{ 
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    mb: 1
                  }}
                >
                  {article.title}
                </Typography>
                
                <Typography 
                  variant="h3"
                  sx={{ 
                    fontSize: '1.125rem',
                    fontWeight: 'bold',
                    mb: 2
                  }}
                >
                  {article.subtitle}
                </Typography>

                <Typography 
                  variant="body1"
                  sx={{ 
                    whiteSpace: 'pre-line',
                    lineHeight: 1.6
                  }}
                >
                  {article.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewsAndArticles;