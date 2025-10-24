import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import diameSchoollogo from "../assets/icons/DiameSchool.svg";
import Button from "../components/UI/Button";
import { useNavigate, NavLink as RouterNavLink } from "react-router";
const Header = () => {
  const navigate = useNavigate();

  const handleNavigateToSignUp = () => {
    navigate("/sign-up");
  };
  const handleNavigateToSignIn = () => {
    navigate("/sign-in");
  };

  return (
    <Headers>
      <img src={diameSchoollogo} alt="logo" />
      <Nav>
        <StyledNavLink to="/">Главная</StyledNavLink>
        <StyledNavLink to="/about">О центре</StyledNavLink>
        <StyledNavLink to="/courses">Курсы</StyledNavLink>
        <StyledNavLink to="/teachers">Преподаватели</StyledNavLink>
        <StyledNavLink to="/reviews">Отзывы</StyledNavLink>
        <StyledNavLink to="/contacts">Контакты</StyledNavLink>
      </Nav>

      <ButtonBlock>
        <Signin onClick={handleNavigateToSignIn}>Вход</Signin>
        <Button onClick={handleNavigateToSignUp}>Регистрация</Button>
      </ButtonBlock>
    </Headers>
  );
};

export default Header;

const Headers = styled("header")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "13.5px 60px",
}));
const Nav = styled("nav")(() => ({
  display: "flex",
  gap: "45px",
}));

const ButtonBlock = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "40px",
}));

const Signin = styled(Typography)(() => ({
  fontWeight: 700,

  fontStyle: "Bold",
  fontSize: "18px",
  color: "#1D3452",
  cursor: "pointer",
}));

const StyledNavLink = styled(RouterNavLink)(() => ({
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "18px",
  color: "#1D3452",
  textDecoration: "none",
  cursor: "pointer",
  "&.active": {
    color: "#3A86FF",
  },
}));
