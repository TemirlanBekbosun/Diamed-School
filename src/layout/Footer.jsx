import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";
import { LocationOn as LocationIcon } from "@mui/icons-material";
import WhatsApp from "../assets/icons/whatapp.svg";
import Instagram from "../assets/icons/instagram.svg";
import Telegram from "../assets/icons/telegram.svg";
import Email from "../assets/icons/Email.svg";
import Call from "../assets/icons/Call.svg";
import Button from "../components/UI/Button";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Block>
          <ContactTitle>Контакты</ContactTitle>
          <Box>
            <ContactLabel>Email</ContactLabel>
            <ContactRow>
              <img
                src={Email}
                alt=""
                width={25}
                style={{ marginBottom: "5px" }}
              />
              <ContactValue>info@diamed-school.kg</ContactValue>
            </ContactRow>
          </Box>
          <Box>
            <ContactLabel>Телефон</ContactLabel>
            <ContactRow>
              <img src={Call} alt="" />
              <ContactValue>+996 (555) 808 - 001</ContactValue>
            </ContactRow>
            <ContactRow>
              <img src={Call} alt="" />
              <ContactValue>+996 (505) 888 - 080</ContactValue>
            </ContactRow>
            <Box>
              <ContactLabel sx={{ marginTop: "30px" }}>Адрес</ContactLabel>
              <ContactRow>
                <LocationIcon sx={{ fontSize: "20px", color: "#212B36" }} />
                <ContactValue>г. Бишкек, ул. Науки, 5</ContactValue>
              </ContactRow>
            </Box>
          </Box>
        </Block>
        <Block2>
          <MessengerTitle>Мессенджеры</MessengerTitle>
          <MessengerIcons>
            <Box>
              <img src={WhatsApp} alt="" />
            </Box>
            <Box>
              <img src={Instagram} alt="" />
            </Box>
            <Box>
              <img src={Telegram} alt="" />
            </Box>
          </MessengerIcons>
          <Box>
            <ContactLabel>Наши рабочие дни:</ContactLabel>
            <ContactValue sx={{ marginBottom: "8px" }}>
              <span style={{ color: "#FF8FA3" }}>Пн - Чт, Сб - Вс:</span> 11:00
              - 18:00
            </ContactValue>
            <ContactValue>Пт: выходной</ContactValue>
          </Box>
        </Block2>
        <Block3>
          <StyledTextField placeholder="Имя" fullWidth />
          <StyledTextField placeholder="Email" fullWidth />
          <StyledTextField placeholder="Номер" fullWidth />
          <FormLabelBlock>
            <FormControlLabel
              control={<StyledCheckbox />}
              label={
                <ConsentTypography>
                  Я подтверждаю ознакомление с
                  <StyledLink href="#">Политикой</StyledLink> обработки
                  персональных данных и даю согласие на обработку персональных
                  данных в порядке и на условиях, указанных в Политике.
                </ConsentTypography>
              }
            />
          </FormLabelBlock>
          <Button>Отправить заявку</Button>
        </Block3>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
const FooterWrapper = styled(Box)({
  paddingBottom: "80px",
  height: "80%",
  display: "flex",
  justifyContent: "center",
});

const FooterContainer = styled(Box)({
  width: "100%",
  display: "flex",
  gap: "40px",
  justifyContent: "center",
});

const Block = styled(Box)({
  borderRadius: "30px",
  padding: "60px 0px 60px 40px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const Block2 = styled(Box)({
  borderRadius: "30px",
  padding: "180px 0px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const Block3 = styled(Box)({
  marginTop: "50px",
  borderRadius: "30px",
  padding: "60px 40px 60px 0px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const ContactTitle = styled(Typography)({
  fontSize: "78px",
  fontWeight: 500,
  color: "#212B36",
  marginBottom: "33px",
});

const ContactLabel = styled(Typography)({
  fontSize: "24px",
  fontWeight: 500,
  color: "#212B36",
  marginBottom: "15px",
});

const ContactValue = styled(Typography)({
  fontSize: "23px",
  fontWeight: 400,
  color: "#3366CC",
  marginBottom: "8px",
});

const MessengerTitle = styled(Typography)({
  fontSize: "24px",
  fontWeight: 500,
  color: "#212B36",
  marginTop: "50px",
});

const MessengerIcons = styled(Box)({
  display: "flex",
  gap: "16px",
  marginBottom: "100px",
});

const ContactRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fdebf1",
    width: "652px",
    height: "60px",
    border: " 1px solid#FF8FA3",
    borderRadius: "13px",
    height: "50px",
    "& fieldset": {
      borderColor: "#FCE4EC",
      borderWidth: "1px",
    },
    "&:hover fieldset": {
      borderColor: "#FCE4EC",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FCE4EC",
    },
  },
  "& .MuiInputBase-input": {
    fontSize: "16px",
    color: "#212B36",
    "&::placeholder": {
      color: "#919EAB",
      opacity: 1,
    },
  },
}));

const StyledCheckbox = styled(Checkbox)({
  color: "#FCE4EC",
  "&.Mui-checked": {
    color: "#3366CC",
  },
});

const ConsentTypography = styled(Typography)({
  fontSize: "14px",
  fontWeight: 400,
  color: "#555555",
  fontFamily: "Roboto, sans-serif",
  lineHeight: 1.4,
});

const StyledLink = styled(Link)({
  color: "#555555",
  textDecoration: "underline",
  "&:hover": {
    color: "#3366CC",
  },
});

const FormLabelBlock = styled(Box)({
  alignItems: "flex-start",
  marginBottom: "24px",
  display: "flex",
});
