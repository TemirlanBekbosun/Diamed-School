import React, { useRef } from "react";
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

const ReviewsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const scrollRef = useRef(null);

  const reviews = [
    {
      name: "Сыймык",
      grade: "Ученик 10 класса",
      text: "Lorem ipsum dolor sit amet consectetur. Sit viverра cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna.",
      rating: 5,
      avatar: "/avatar1.png",
    },
    {
      name: "Санжар",
      grade: "Ученик 10 класса",
      text: "Lorem ipsum dolor sit amet consectetur. Sit viverра cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna.",
      rating: 4,
      avatar: "/avatar2.png",
    },
    {
      name: "Мирлан",
      grade: "Ученик 11 класса",
      text: "Lorem ipsum dolor sit amet consectetur. Sit viverра cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna.",
      rating: 5,
      avatar: "/avatar3.png",
    },
    {
      name: "Айдана",
      grade: "Ученик 9 класса",
      text: "Lorem ipsum dolor sit amet consectetur. Sit viverра cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna.",
      rating: 5,
      avatar: "/avatar2.png",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400; // px
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <SectionContainer>
      <Title>Отзывы наших учеников</Title>

      <Box position="relative" sx={{ maxWidth: "1200px", mx: "auto" }}>
        <ArrowButton direction="left" onClick={() => scroll("left")}>
          <ArrowBackIosNewRoundedIcon fontSize="medium" />
        </ArrowButton>

        <ScrollWrapper ref={scrollRef}>
          {reviews.map((review, index) => (
            <ReviewCard key={index}>
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
          ))}
        </ScrollWrapper>

        <ArrowButton direction="right" onClick={() => scroll("right")}>
          <ArrowForwardIosRoundedIcon fontSize="medium" />
        </ArrowButton>
      </Box>
    </SectionContainer>
  );
};

export default ReviewsSection;

const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#F6FBFF",
  padding: "80px 0",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "40px 0",
  },
}));

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

const ScrollWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "30px",
  overflowX: "auto",
  scrollBehavior: "smooth",
  padding: "10px",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

const ReviewCard = styled(Card)(({ theme }) => ({
  position: "relative",
  borderRadius: "24px",
  padding: "50px 28px 36px",
  minWidth: "280px",
  maxWidth: "320px",
  backgroundColor: "#fff",
  border: "1px solid #F2F2F2",
  boxShadow: "5px 5px 0px #346BFF",
  textAlign: "center",
  transition: "transform 0.3s ease",
  flexShrink: 0,
  "&:hover": {
    transform: "translateY(-5px)",
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: "240px",
    padding: "40px 20px 28px",
  },
}));

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
