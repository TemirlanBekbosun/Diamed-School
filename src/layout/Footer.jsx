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
              <img src={Call} alt="icon" />
              <ContactValue>+996 (555) 808 - 001</ContactValue>
            </ContactRow>
            <ContactRow>
              <img src={Call} alt="icon" />
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
                  Я подтверждаю ознакомление с {""}
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
  padding: "40px 60px 40px 60px",
  display: "flex",
  justifyContent: "center",
});

const FooterContainer = styled(Box)({
  width: "100%",
  display: "flex",
  gap: "0px",
  justifyContent: "center",
});

const Block = styled(Box)({
  borderRadius: "30px",

  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const Block2 = styled(Box)({
  borderRadius: "30px",
  padding: "123px 0px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
});

const Block3 = styled(Box)({
  marginTop: "50px",
  borderRadius: "30px",

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
  color: "#3A86FF",
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

    width: "clamp(10rem, 40vw, 40.75rem)",
    border: "1px solid #FF8FA3",
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
  padding: "0 0 49px 0",
  color: "#FCE4EC",
  "&.Mui-checked": {
    color: "#3A86FF",
  },
});

const ConsentTypography = styled(Typography)({
  fontSize: "18px",
  fontWeight: 400,
  color: "#1D3452",
  fontFamily: "Roboto, sans-serif",
  lineHeight: 1.4,
});

const StyledLink = styled(Link)({
  color: "#555555",
  textDecoration: "underline",
  "&:hover": {
    color: "#3A86FF",
  },
});

const FormLabelBlock = styled(Box)({
  alignItems: "flex-start",
  marginBottom: "24px",
  display: "flex",
});

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

  marginLeft: "130px",
}));
