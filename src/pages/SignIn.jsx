import styled from "styled-components";
import Input from "../components/UI/Input";
import Header from "../layout/Header";
import Button from "../components/UI/Button";
import Footer from "../layout/Footer";

const SignIn = () => {
  return (
    <div>
      <MainContainer>
        <h1>Вход</h1>
        <MainInputContainer>
          <Input type="email" placeholder="E-mail" />
          <Input.Password placeholder="Пароль" />
        </MainInputContainer>

        <StyledButton variant="outlined">Войти</StyledButton>
      </MainContainer>
      <Footer />
    </div>
  );
};

export default SignIn;

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
  marginBottom: "70px",
}));

const StyledButton = styled(Button)(() => ({
  width: "24%",
}));
