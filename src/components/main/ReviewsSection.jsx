import React from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  Card,
  Avatar,
  Rating,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

// ===== Styled Components =====

// Контейнер всей секции
const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#F6FBFF",
  padding: "80px 0",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "40px 0",
  },
}));

// Заголовок
const Title = styled(Typography)(({ theme }) => ({
  fontSize: "56px",
  fontWeight: 700,
  color: "#0C2340",
  marginBottom: "60px",
  fontFamily: "'Inter', sans-serif",
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px",
  },
}));

// Карточка отзыва
const ReviewCard = styled(Card)(({ theme }) => ({
  position: "relative",
  borderRadius: "24px",
  padding: "60px 40px 40px",
  maxWidth: 380,
  margin: "0 auto",
  backgroundColor: "#fff",
  border: "1px solid #F2F2F2",
  boxShadow: "6px 6px 0px #346BFF",
  textAlign: "center",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: 300,
    padding: "50px 24px 32px",
  },
}));

// Аватар в кружке сверху карточки
const AvatarWrapper = styled(Box)(() => ({
  position: "absolute",
  top: "-40px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 0 0 4px #fff",
}));

// Стрелки навигации
const ArrowButton = styled(IconButton)(({ direction }) => ({
  width: 70,
  height: 70,
  border: "1.5px solid #FD6A6A",
  color: "#346BFF",
  backgroundColor: "#fff",
  borderRadius: "50%",
  boxShadow: "5px 5px 0px #346BFF",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  [direction === "left" ? "left" : "right"]: "-90px",
  zIndex: 2,
  "&:hover": {
    backgroundColor: "#F6FBFF",
  },
}));

// ===== Основной компонент =====

const ReviewsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const sliderRef = React.useRef(null);

  const reviews = [
    {
      name: "Сыймык",
      grade: "Ученик 10 класса",
      text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna.",
      rating: 5,
      avatar: "/avatar1.png", // TODO: заменить на реальный путь из проекта
    },
    {
      name: "Санжар",
      grade: "Ученик 10 класса",
      text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna.",
      rating: 4,
      avatar: "/avatar2.png", // TODO: заменить на реальный путь
    },
    {
      name: "Сыймык",
      grade: "Ученик 10 класса",
      text: "Lorem ipsum dolor sit amet consectetur. Sit viverра cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna.",
      rating: 5,
      avatar: "/avatar3.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    centerMode: false,
  };

  return (
    <SectionContainer>
      <Title>Отзывы наших учеников</Title>

      <Box position="relative" sx={{ maxWidth: "1200px", mx: "auto" }}>
        {/* Стрелка влево */}
        <ArrowButton direction="left" onClick={() => sliderRef.current?.slickPrev()}>
          <ArrowBackIosNewRoundedIcon fontSize="medium" />
        </ArrowButton>

        {/* Слайдер */}
        <Slider ref={sliderRef} {...settings}>
          {reviews.map((review, index) => (
            <Box key={index} px={2} >
              <ReviewCard>
                <AvatarWrapper>
                  <Avatar
                    src={review.avatar}
                    alt={review.name}
                    sx={{
                      width: 70,
                      height: 70,
                      border: "2px solid #fff",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                    }}
                  />
                </AvatarWrapper>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#0C2340",
                    fontFamily: "'Inter', sans-serif",
                    marginTop: "20px",
                  }}
                >
                  {review.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#333",
                    opacity: 0.8,
                    marginBottom: "16px",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {review.grade}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: "#555",
                    marginBottom: "24px",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {review.text}
                </Typography>

                <Rating value={review.rating} readOnly size="medium" />
              </ReviewCard>
            </Box>
          ))}
        </Slider>

        {/* Стрелка вправо */}
        <ArrowButton direction="right" onClick={() => sliderRef.current?.slickNext()}>
          <ArrowForwardIosRoundedIcon fontSize="medium" />
        </ArrowButton>
      </Box>
    </SectionContainer>
  );
};

export default ReviewsSection;