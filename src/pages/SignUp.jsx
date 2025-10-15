import styled from "styled-components";
import Input from "../components/UI/Input";
import Header from "../layout/Header";
import Button from "../components/UI/Button";
import { Checkbox } from "@mui/material";
import Footer from "../layout/Footer";

const SignUp = () => {
  return (
    <div>
      <Header />
      <MainContainer>
        <h1>Регистрация</h1>
        <MainInputContainer>
          <Input type="text" placeholder="ФИО" />
          <Input type="email" placeholder="E-mail" />
          <Input type="tel" placeholder="Телефон" />
          <Input.Password placeholder="Пароль" />
          <Input.Password placeholder="Повторите пароль" />
          <CheckboxContainer>
            <Checkbox />
            <p>
              Я подтверждаю ознакомление с Политикой
              <br /> обработки персональных данных и даю
              <br /> согласие на обработку персональных данных в порядке и на
              условиях,
              <br /> указанных в Политике.
            </p>
          </CheckboxContainer>
        </MainInputContainer>

        <Button>Регистрация</Button>
      </MainContainer>
      <Footer />
    </div>
  );
};

export default SignUp;

const MainContainer = styled("div")(() => ({
  background: "linear-gradient(180deg, #F2F7FB 20%, #629eff 80%)",
  marginLeft: "40px",
  marginRight: "40px",
  textAlign: "center",
  borderRadius: "30px",

  padding: "60px 0",
  h1: {
    fontSize: "78px",
    fontWeight: 500,
    marginBottom: "40px",
  },
}));

const MainInputContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  margin: "0 auto",
  width: "400px",
  textAlign: "center",
}));
const CheckboxContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",

  p: {
    paddingRight: "10px",
    textAlign: "start",
    fontSize: "18px",
    fontWeight: 400,
    color: "#1D3452",
  },
}));


