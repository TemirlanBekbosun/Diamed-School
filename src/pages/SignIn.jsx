import styled from "styled-components";
import Input from "../components/UI/Input";
import Footer from "../layout/Footer";

const SignIn = () => {
  return (
    <>
      <div style={{ padding: "0 60px 0 60px" }}>
        <MainContainer>
          <h1>Вход</h1>
          <MainInputContainer>
            <Input type="email" placeholder="E-mail" />
            <Input.Password placeholder="Пароль" />
          </MainInputContainer>

          <StyledButton variant="outlined">Войти</StyledButton>
        </MainContainer>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;

const MainContainer = styled("div")(() => ({
  background: "linear-gradient(180deg, #F2F7FB 20%, #629eff 80%)",
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

const StyledButton = styled("button")(() => ({
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
