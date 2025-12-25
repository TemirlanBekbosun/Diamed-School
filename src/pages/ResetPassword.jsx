import styled from "styled-components";
import Input from "../components/UI/Input";
import Header from "../layout/Header";
import Button from "../components/UI/Button";
import Footer from "../layout/Footer";

const ResetPassword = () => {
  return (
    <div>
      <Header />
      <MainContainer>
        <h1>Сброс пароля</h1>

        <MainInputContainer>
          <Input type="email" placeholder="Введите e-mail" />
        </MainInputContainer>

        <StyledButton variant="outlined">
          Отправить код
        </StyledButton>
      </MainContainer>
      <Footer />
    </div>
  );
};

export default ResetPassword;

const MainContainer = styled("div")(() => ({
  background: "linear-gradient(180deg, #F2F7FB 20%, #629eff 80%)",
  margin: "40px",
  textAlign: "center",
  borderRadius: "30px",
  padding: "60px 0",
  h1: {
    fontSize: "60px",
    fontWeight: 500,
    marginBottom: "40px",
  },
}));

const MainInputContainer = styled("div")(() => ({
  width: "400px",
  margin: "0 auto 50px",
}));

const StyledButton = styled(Button)(() => ({
  width: "24%",
}));
