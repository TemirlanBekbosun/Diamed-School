import { Box, Typography, styled } from "@mui/material";
import Button from "./UI/Button";
import Input from "./UI/Input";

const Profile = () => {
  return (
    <Container>
      <PhotoBox>
        <AddPhoto>+</AddPhoto>
        <span>Фото</span>
      </PhotoBox>

      <FormBox>
        <Label>ФИО</Label>
        <StyledInput type="text" placeholder="Фамилия Имя Отчевство" />
        <Label>E Mail</Label>
        <StyledInput type="text" placeholder="Email" />
        <Label>Пароль</Label>
        <StyledInputPassword type="password" placeholder="Пароль" />
        <Label>Повторите пароль</Label>
        <StyledInputPassword type="password" placeholder="Повторите пароль" />
        <ButtonsBox>
          <SaveButton variant="outlined">Сохранить</SaveButton>
          <EditButton variant="contained">Редактировать</EditButton>
        </ButtonsBox>
      </FormBox>
    </Container>
  );
};

export default Profile;

const Container = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "40px",
  backgroundColor: "#f6fbff",
  minHeight: "100vh",
  padding: "60px",
}));
const StyledInput = styled(Input)({
  width: "677px",
  height: "57px",
  fontFamily: "'Cygre-Regular', Helvetica",
  fontWeight: 400,
  fontSize: "24px",
  fontStyle: "Regular",
  color: "#1D3452",
});
const StyledInputPassword = styled(Input.Password)({
  width: "677px",
  height: "57px",
  fontFamily: " 'Cygre-Regular', Helvetica",
  fontWeight: 400,
  fontSize: "24px",
  fontStyle: "Regular",
  color: "#1D3452",
});

const PhotoBox = styled(Box)(() => ({
  width: "250px",
  height: "250px",
  border: "1px solid #628aff",
  borderRadius: "10px",
  backgroundColor: "#f5cff33b",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "20px",
  span: {
    fontSize: "20px",
    fontWeight: 400,
    color: "#FF8FA3",
  },
}));

const AddPhoto = styled("div")(() => ({
  width: "70px",
  height: "70px",
  color: "#628aff",
  fontSize: "50px",
  fontWeight: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#f0f5ff",
  },
}));

const FormBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
}));

const Label = styled("h3")(() => ({
  fontSize: "24px",
  fontWeight: 700,
  color: "#1D3452",
  marginTop: "13px",
  fontFamily: "'Cygre-Regular', Helvetica",
}));

const ButtonsBox = styled("div")(() => ({
  display: "flex",
  gap: "14px",
  marginTop: "20px",
}));

const SaveButton = styled(Button)(() => ({
  width: "330px",
}));

const EditButton = styled(Button)(() => ({
  width: "330px",
}));
