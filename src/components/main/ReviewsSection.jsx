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
  const scrollRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <SectionContainer>
      <Title>Отзывы наших учеников</Title>

      <SliderWrapper>
        <ArrowButton direction="left" onClick={() => scroll("left")}>
          <ArrowBackIosNewRoundedIcon fontSize="medium" />
        </ArrowButton>

        <ScrollWrapper ref={scrollRef}>
          {reviews.map((item, index) => (
            <CardShadowWrapper key={index}>
              <BlueShadow style={{ top: 14, right: 12, rotate: "-3deg" }} />

              <ReviewCard>
                <AvatarWrapper>
                  <Avatar
                    src={item.avatar}
                    alt={item.name}
                    style={{
                      width: 70,
                      height: 70,
                      border: "3px solid #fff",
                    }}
                  />
                </AvatarWrapper>

                <Name>{item.name}</Name>
                <Grade>{item.grade}</Grade>
                <Text>{item.text}</Text>

                <BigRating value={item.rating} readOnly size="medium" />
              </ReviewCard>
            </CardShadowWrapper>
          ))}
        </ScrollWrapper>

        <ArrowButton direction="right" onClick={() => scroll("right")}>
          <ArrowForwardIosRoundedIcon fontSize="medium" />
        </ArrowButton>
      </SliderWrapper>
    </SectionContainer>
  );
};

export default ReviewsSection;

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: "80px 0",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "40px 0",
  },
}));
const BigRating = styled(Rating)({
  marginTop: "20px",
  "& .MuiRating-icon": {
    fontSize: "40px",
    margin: "0 4px",
  },
});

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "56px",
  fontWeight: 700,
  color: "#0C2340",
  marginBottom: "60px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px",
  },
}));

const SliderWrapper = styled(Box)({
  maxWidth: "1300px",
  maxHeight: "700px",
  margin: "0 auto",
  position: "relative",
});

const ScrollWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "40px",
  overflowX: "auto",
  padding: "20px",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

const CardShadowWrapper = styled(Box)({
  position: "relative",
  width: "520px",
  height: "500px",
  paddingTop: "25px",

  display: "flex",
  justifyContent: "center",

  "&:hover": {
    transform: "scale(1.05)",
    transition: "transform 0.4s ease",
  },
});

const BlueShadow = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  borderRadius: "24px",
  background: "#346BFF",
});

const ReviewCard = styled(Card)({
  position: "relative",
  borderRadius: "24px",
  padding: "80px 28px 36px",
  width: "100%",
  backgroundColor: "#f1eded",
  border: "1px solid #FF8FA3",
  textAlign: "center",
  zIndex: 2,
  boxShadow: "0px 4px 14px rgba(0,0,0,0.06)",
});

const AvatarWrapper = styled(Box)({
  position: "absolute",
  top: "5px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "90px",
  height: "90px",
  borderRadius: "50%",
  backgroundColor: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Name = styled(Typography)({
  marginTop: "20px",
  fontWeight: 700,
  fontSize: "24px",
  color: "#0C2340",
});

const Grade = styled(Typography)({
  fontSize: "19px",
  fontWeight: 400,
  color: "#000",
  opacity: 0.8,
  marginBottom: "16px",
});

const Text = styled(Typography)({
  fontSize: "19px",
  padding: "0 20px",
  fontqWeight: 400,
  color: "#929292",
  marginBottom: "24px",
  textAlign: "start",
});

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
  ...(direction === "left" ? { left: "-90px" } : { right: "-90px" }),
  zIndex: 3,
  "&:hover": { backgroundColor: "#F6FBFF" },
}));
