import React from "react";
import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Questions = () => {
  const faqData = [
    {
      question: "Как записаться на курс?",
      answer:
        "Для записи на курс вы можете связаться с нами по телефону или заполнить форму на сайте. Наш менеджер свяжется с вами в течение дня для уточнения деталей и оформления документов.",
    },
    {
      question: "Есть ли у вас онлайн-обучение?",
      answer:
        "Да, у нас есть как очные, так и онлайн форматы обучения. Онлайн занятия проходят в интерактивном режиме с использованием современных платформ для видеосвязи.",
    },
    {
      question: "Можно ли сначала пройти пробное занятие?",
      answer:
        "Конечно! Мы предоставляем возможность посетить пробное занятие бесплатно. Это поможет вам познакомиться с преподавателем и методикой обучения.",
    },
    {
      question: "Какие материалы я получу после записи на курс?",
      answer:
        "После записи на курс вы получите доступ к учебным материалам, включая конспекты, практические задания, тесты и дополнительные ресурсы для самостоятельного изучения.",
    },
    {
      question: "Можно ли оплатить курс частями?",
      answer:
        "Да, мы предоставляем гибкие условия оплаты. Вы можете оплатить курс частями по согласованному графику. Подробности уточняйте у наших менеджеров.",
    },
    {
      question: "Кто будет моим преподавателем?",
      answer:
        "Вас будут обучать опытные преподаватели центра Diamed_School, специалисты по химии и биологии с многолетним стажем подготовки к экзаменам ОРТ, ЕГЭ, ЕНТ. Все наши наставники прошли строгий отбор и имеют успешные результаты учеников. Основную программу разрабатывает и курирует Диана Койчумановна — автор уникальной методики обучения.",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#F8F8F8",
        minHeight: "100vh",
        py: 0,
      }}
    >
      <Box
        sx={{
          maxWidth: "900px",
          mx: "auto",
          px: 2,
        }}
      >
        {/* Заголовок */}
        <Typography
          sx={{
            fontSize: "52px",
            fontWeight: 700,
            color: "#333333",
            textAlign: "center",
            mb: "60px",
            mt: "80px",
            fontFamily: "Roboto, sans-serif",
            lineHeight: 1.1,
          }}
        >
          Часто задаваемые вопросы
        </Typography>

        {/* FAQ Grid */}
        <Grid container spacing={6}>
          {/* Левая колонка */}
          <Grid item xs={12} md={6}>
            {faqData.slice(0, 3).map((item, index) => (
              <Box key={index}>
                <Accordion
                  sx={{
                    boxShadow: "none",
                    backgroundColor: "transparent",
                    "&:before": {
                      display: "none",
                    },
                    "&.Mui-expanded": {
                      margin: 0,
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <AddIcon
                        sx={{
                          color: "#3366CC",
                          fontSize: "20px",
                        }}
                      />
                    }
                    sx={{
                      px: 0,
                      py: "20px",
                      minHeight: "auto",
                      "& .MuiAccordionSummary-content": {
                        margin: 0,
                      },
                      "& .MuiAccordionSummary-expandIconWrapper": {
                        marginLeft: "auto",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: 400,
                        color: "#3366CC",
                        fontFamily: "Roboto, sans-serif",
                        lineHeight: 1.2,
                      }}
                    >
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      px: 0,
                      py: "20px",
                      pb: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#555555",
                        fontFamily: "Roboto, sans-serif",
                        lineHeight: 1.5,
                        "& .highlight": {
                          color: "#FF0000",
                        },
                      }}
                      dangerouslySetInnerHTML={{
                        __html: item.answer.replace(
                          "Diamed_School",
                          '<span class="highlight">Diamed_School</span>'
                        ),
                      }}
                    />
                  </AccordionDetails>
                </Accordion>
                <Box
                  sx={{
                    height: "1px",
                    backgroundColor: "#D0E0F0",
                    width: "100%",
                  }}
                />
              </Box>
            ))}
          </Grid>

          {/* Правая колонка */}
          <Grid item xs={12} md={6}>
            {faqData.slice(3, 6).map((item, index) => (
              <Box key={index + 3}>
                <Accordion
                  defaultExpanded={index === 2}
                  sx={{
                    boxShadow: "none",
                    backgroundColor: "transparent",
                    "&:before": {
                      display: "none",
                    },
                    "&.Mui-expanded": {
                      margin: 0,
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <AddIcon
                        sx={{
                          color: "#3366CC",
                          fontSize: "20px",
                        }}
                      />
                    }
                    sx={{
                      px: 0,
                      py: "20px",
                      minHeight: "auto",
                      "& .MuiAccordionSummary-content": {
                        margin: 0,
                      },
                      "& .MuiAccordionSummary-expandIconWrapper": {
                        marginLeft: "auto",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: 400,
                        color: "#3366CC",
                        fontFamily: "Roboto, sans-serif",
                        lineHeight: 1.2,
                      }}
                    >
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      px: 0,
                      py: "20px",
                      pb: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#555555",
                        fontFamily: "Roboto, sans-serif",
                        lineHeight: 1.5,
                        "& .highlight": {
                          color: "#FF0000",
                        },
                      }}
                      dangerouslySetInnerHTML={{
                        __html: item.answer.replace(
                          "Diamed_School",
                          '<span class="highlight">Diamed_School</span>'
                        ),
                      }}
                    />
                  </AccordionDetails>
                </Accordion>
                <Box
                  sx={{
                    height: "1px",
                    backgroundColor: "#D0E0F0",
                    width: "100%",
                  }}
                />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Questions;
