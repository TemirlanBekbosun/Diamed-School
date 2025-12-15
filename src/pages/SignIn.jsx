import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Input from "../components/UI/Input";
import Footer from "../layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_THUNK } from "../store/features/auth/authThunk";
import { useNavigate } from "react-router";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((s) => s.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(AUTH_THUNK.signIn({ email, password })).unwrap();
      navigate("/user");
    } catch (err) {
      // err — payload или message
      console.warn("SignIn error:", err);
    }
  };

  return (
    <>
      <div style={{ padding: "0 60px" }}>
        <MainContainer>
          <h1>Вход</h1>
          <MainInputContainer as="form" onSubmit={handleSubmit}>
            <Input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input.Password placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && <ErrorText>{error}</ErrorText>}
          <StyledButton type="submit" disabled={isLoading} variant="outlined" >Войти</StyledButton>
          </MainInputContainer>

         
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
  h1: { fontSize: "78px", fontWeight: 500, marginBottom: "40px" },
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
  "&:disabled": { opacity: 0.6, cursor: "not-allowed" },
}));

const ErrorText = styled("div")(() => ({ color: "#FF4D4F", marginTop: "8px" }));
