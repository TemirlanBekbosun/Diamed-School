import React, { useState } from "react";
import { Box, Typography, IconButton, Collapse } from "@mui/material";
import { styled } from "@mui/material/styles";
import RemoveIcon from "@mui/icons-material/Remove";
import Plus from "../../assets/icons/Plus.svg";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const data = [
    {
      q: "Как записаться на курс?",
      a: "Вы можете оставить заявку на сайте или написать нашему менеджеру. Мы свяжемся с вами, уточним детали и подберём удобное расписание.",
    },
    {
      q: "Есть ли у вас онлайн-обучение?",
      a: "Да, все курсы доступны в онлайн-формате. Занятия проходят в Zoom с преподавателем, а материалы выдаются в личном кабинете.",
    },
    {
      q: "Можно ли сначала пройти пробное занятие?",
      a: "Да, вы можете пройти бесплатное пробное занятие, чтобы оценить качество обучения и познакомиться с преподавателем.",
    },
    {
      q: "Какие материалы я получу после записи на курс?",
      a: "Вы получите доступ к презентациям, конспектам, домашним заданиям, тестам и дополнительным материалам для подготовки.",
    },
    {
      q: "Можно ли оплатить курс частями?",
      a: "Да, мы предоставляем удобную рассрочку без переплаты. Оплата делится на несколько равных частей.",
    },
    {
      q: "Кто будет моим преподавателем?",
      a: `Вас будут обучать опытные преподаватели центра Diamed_School
       специалисты по химии и биологии с многолетним стажем подготовки к экзаменам ОРТ, ЕГЭ и ЕНТ. Все наставники прошли строгий отбор и имеют успешные результаты учеников.`,
    },
  ];

  return (
    <Wrapper>
      <Title>Часто задаваемые вопросы</Title>

      <Grid>
        {data.map((item, idx) => (
          <Item key={idx} onClick={() => setOpen(open === idx ? null : idx)}>
            <QuestionRow>
              <QuestionText>{item.q}</QuestionText>

              <IconButton size="small">
                {open === idx ? (
                  <RemoveIcon style={{ color: "#2563eb" }} />
                ) : (
                  <img src={Plus} alt="" />
                )}
              </IconButton>
            </QuestionRow>

            <Collapse in={open === idx}>
              {item.a && <Answer>{item.a}</Answer>}
            </Collapse>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => ({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
}));

const Title = styled(Typography)(() => ({
  textAlign: "center",
  fontSize: "78px",
  fontWeight: 500,
  marginBottom: "40px",
}));

const Grid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  columnGap: "60px",
  rowGap: "20px",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

const Item = styled(Box)(() => ({
  paddingBottom: "12px",
  borderBottom: "1px solid #dcdcdc",
  cursor: "pointer",
}));

const QuestionRow = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const QuestionText = styled(Typography)(() => ({
  fontSize: "20px",
  color: "#2563eb",
  fontWeight: 500,
}));

const Answer = styled(Typography)(() => ({
  marginTop: "10px",
  fontSize: "17px",
  fontWeight: 600,
  lineHeight: "1.6",
  color: "#333",
}));
