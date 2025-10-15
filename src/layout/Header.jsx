import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import diameSchoollogo from "../assets/icons/DiameSchool.svg";
import Button from "../components/UI/Button";
const Header = () => {
  return (
    <Headers>
      <img src={diameSchoollogo} alt="logo" />
      <Nav>
        <NavLink href="">Главная</NavLink>
        <NavLink href="">О центре</NavLink>
        <NavLink href="">Курсы</NavLink>

        <NavLink href="">Преподаватели</NavLink>
        <NavLink href="">Отзывы</NavLink>
        <NavLink href="">Контакты</NavLink>
      </Nav>

      <ButtonBlock>
        <Signin>Вход</Signin>
        <Button>Регистрация</Button>
      </ButtonBlock>
    </Headers>
  );
};

export default Header;

const Headers = styled("header")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "17.5px 60px",
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

const NavLink = styled(Typography)(() => ({
  fontWeight: 400,

  fontStyle: "regular",
  fontSize: "18px",
  color: "#1D3452",
  cursor: "pointer",
}));
