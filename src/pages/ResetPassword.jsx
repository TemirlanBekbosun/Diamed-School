import styled from "styled-components";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import Footer from "../layout/Footer";

const ResetPassword = () => {
  return (
    <>
      <MainContainer>
        <h1>Сброс пароля</h1>

        <InputWrapper>
          <Input type="email" placeholder="Введите e-mail" />
        </InputWrapper>

        <StyledButton>Отправить код</StyledButton>
      </MainContainer>
      <Footer />
    </>
  );
};

export default ResetPassword;

const MainContainer = styled.div`
  background: linear-gradient(180deg, #f2f7fb 20%, #629eff 80%);
  margin: 40px;
  padding: 60px 0;
  text-align: center;
  border-radius: 30px;
`;

const InputWrapper = styled.div`
  width: 400px;
  margin: 0 auto 40px;
`;

const StyledButton = styled(Button)`
  width: 24%;
`;
