import styled from "styled-components";
import Input from "../components/UI/Input";
import Footer from "../layout/Footer";
import Checkbox from "../components/UI/Checkbox";

const SignUp = () => {
  return (
    <div>
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
            <p style={{ marginTop: "5px", marginBottom: "30px" }}>
              Я подтверждаю ознакомление с Политикой
              <br /> обработки персональных данных и даю
              <br /> согласие на обработку персональных данных в порядке и на
              условиях,
              <br /> указанных в Политике.
            </p>
          </CheckboxContainer>
        </MainInputContainer>

        <Button variant="outlined">Регистрация</Button>
      </MainContainer>
      <Footer />
    </div>
  );
};

export default SignUp;

const MainContainer = styled("div")(() => ({
  background:
    "linear-gradient(180deg, #F2F7FB 20%, hsl(217.07006369426753, 100%, 69.2156862745098%) 80%)",
  margin: "0 60px 0 60px",
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
  alignItems: "flex-start",
  gap: "0px",
  p: {
    margin: 0,
    textAlign: "start",
    fontSize: "18px",
    fontWeight: 400,
    color: "#1D3452",
  },
}));

const Button = styled("button")(() => ({
  width: "323px",
  height: "57px",
  background: "#3A86FF",
  borderRadius: "8px",
  color: "#F5F5F5",
  boxShadow: "3px 3px 0px  #FF8FA3",
  transition:
    "transform 0.08s cubic-bezier(0.4,0,0.2,1), box-shadow 0.08s cubic-bezier(0.4,0,0.2,1)",
  border: "1px  #F5F2F9 solid",
  fontWeight: 400,
  fontStyle: "regular",
  fontSize: "18px",
  fontFamily: "Moderustic",
  cursor: "pointer",
  outline: "none",
  "&:active": {
    transform: "scale(0.96)",
    boxShadow: "1px 1px 0px #3A86FF",
  },
}));
