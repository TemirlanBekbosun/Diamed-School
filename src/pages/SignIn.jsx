import styled from "styled-components";
import { useNavigate } from "react-router";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import Footer from "../layout/Footer";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainContainer>
        <h1>Вход</h1>

        <Inputs>
          <Input type="email" placeholder="E-mail" />
          <Input.Password placeholder="Пароль" />

          <Forgot onClick={() => navigate("/reset-password")}>
            Сбросить пароль?
          </Forgot>
        </Inputs>

        <StyledButton>Войти</StyledButton>
      </MainContainer>
      <Footer />
    </>
  );
};

export default SignIn;

const MainContainer = styled.div`
  background: linear-gradient(180deg, #f2f7fb 20%, #629eff 80%);
  margin: 40px;
  padding: 60px 0;
  text-align: center;
  border-radius: 30px;
`;

const Inputs = styled.div`
  width: 400px;
  margin: 0 auto 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledButton = styled(Button)`
  width: 24%;
`;

const Forgot = styled.button`
  background: none;
  border: none;
  color: #2f5acf;
  cursor: pointer;
  text-align: right;
`;
