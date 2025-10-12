import { Box, styled, Typography } from "@mui/material";
import plajka from "../../assets/Plajka.svg";
import logo from "../../assets/Diamelogo.svg";
import rigth from "../../assets/RigthButton.svg";
import PhtotDiana from "../../assets/DianaKaluman.png";
import reacts from "../../assets/reactive.svg";
import kletka from "../../assets/kletka.svg";

const Intro = () => {
  return (
    <BoxIntro>
      <Divide>
        <div className="agenda">
          <Restling>
            <img src={plajka} alt="photo" />
            <h1>Подготовься </h1>
            <h1>к экзаменам и поступи </h1>
            <h1> в вуз мечты!</h1>
          </Restling>
          <div className="cards">
            <FirstBox>
              <h2>Diamed School</h2>
              <p>Мы обучаем химии и биологии по авторской методике</p>
              <h3>Дианы Койчумановны</h3>
              <div className="icons">
                <img src={logo} alt="photo" />
                <img src={rigth} alt="photo" />
              </div>
            </FirstBox>

            <SecondBox>
              <h2>ОРТ & ЕГЭ & ЕНТ</h2>
              <p>
                Удобная онлайн-платформа позволяет учиться в комфортных условиях
                из любой точки мира. Также доступны офлайн-занятия для тех, кто
                ценит личное присутствие
              </p>

              <div className="icons">
                <img src={rigth} alt="photo" />
              </div>
            </SecondBox>
          </div>
        </div>

        <Twoboxing>
          <img src={PhtotDiana} alt="" />

          <div className="textandbutton">
            <div className="textmass">
              <Massagetext>
                Вместе с <span>Diamed_School</span> ты сможешь поступить в КГМА
                и лучшие медицинские университеты. Опытные преподаватели,
                авторская методика, реальные результаты.
              </Massagetext>
              <img src={reacts} alt="" />
            </div>

            <div className="textma">
              <img src={kletka} alt="" />
              <button className="Buttoncours">Записаться на курс</button>
            </div>
          </div>
        </Twoboxing>
      </Divide>
    </BoxIntro>
  );
};

export default Intro;

const Restling = styled("div")(() => ({
  width: "893px",
  display: "flex",
  flexDirection: "column",

  gap: "30px",
  "& img": {
    position: "absolute",
    zIndex: -33,
    bottom: "500px",
  },
  "& h1": {
    fontWeight: 500,
    fontStyle: "medium",
    fontSize: "78px",
    fontFamily: "Moderustic",
    color: "#121A25",
    lineHeight: "100%",
    letterSpacing: "0.5%",
  },
}));

const Divide = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& .cards": {
    display: "flex",
    gap: "60px",
  },
  "& .agenda": {
    display: "flex",
    flexDirection: "column",
    gap: "60px",
  },
}));

const FirstBox = styled("div")(() => ({
  width: "315px",
  height: "325px",
  backgroundColor: "#F5F2F9",
  borderRadius: "16px",
  border: "1px solid #FF8FA3",
  padding: "20px 22px 23px 21px",
  transition:
    "transform 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.5s cubic-bezier(0.4,0,0.2,1), border-color 0.5s cubic-bezier(0.4,0,0.2,1)",
  boxShadow: "0 4px 24px 0 rgba(58,134,255,0.08)",
  willChange: "transform",

  "&:hover": {
    transform: "translate(18px, -8px) rotateZ(2.5deg) scale(1.03)",
    boxShadow: "0 16px 40px 0 rgba(58,134,255,0.18)",
    borderColor: "#3A86FF",
  },
  "& h2": {
    fontWeight: 500,
    fontStyle: "medium",
    fontSize: "44px",
    fontFamily: "Moderustic",
    color: "#1D3452",
    lineHeight: "100%",
    letterSpacing: "0.5%",
    width: "272px",
    height: "110px",
  },

  "& p": {
    fontWeight: 400,
    fontStyle: "regular",
    fontSize: "18px",
    fontFamily: "Roboto",
    color: "#1D3452",
    lineHeight: "25px",
    letterSpacing: "0%",

    opacity: "50%",
  },

  "& h3": {
    fontWeight: 700,
    fontStyle: "bolt",
    fontSize: "24px",
    fontFamily: "Roboto",
    color: "#3A86FF",
    lineHeight: "30px",
    letterSpacing: "0%",
    width: "272px",
    height: "80px",
  },

  "& .icons": {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const SecondBox = styled("div")(() => ({
  width: "423px",
  height: "325px",
  backgroundColor: "#F5F2F9",
  borderRadius: "16px",
  border: "1px solid #FF8FA3",
  padding: "20px 22px 23px 21px",
  transition:
    "transform 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.5s cubic-bezier(0.4,0,0.2,1), border-color 0.5s cubic-bezier(0.4,0,0.2,1)",
  boxShadow: "0 4px 24px 0 rgba(58,134,255,0.08)",
  willChange: "transform",

  "&:hover": {
    transform: "translate(18px, -8px) rotateZ(2.5deg) scale(1.03)",
    boxShadow: "0 16px 40px 0 rgba(58,134,255,0.18)",
    borderColor: "#3A86FF",
  },
  "& h2": {
    fontWeight: 500,
    fontStyle: "medium",
    fontSize: "44px",
    fontFamily: "Moderustic",
    color: "#1D3452",
    lineHeight: "100%",
    letterSpacing: "0.5%",
    width: "379px",
    height: "60px",
  },

  "& p": {
    fontWeight: 400,
    fontStyle: "regular",
    fontSize: "18px",
    fontFamily: "Roboto",
    color: "#1D3452",
    lineHeight: "25px",
    letterSpacing: "0%",
    opacity: "50%",
  },

  "& .icons": {
    padding: "60px 0px 0 340px",
  },
}));

const Twoboxing = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "40px",

  "& .textmass": {
    display: "flex",
    alignItems: "start",
    gap: "27px",
  },

  "& .textma": {
    display: "flex",
    alignItems: "end",
    gap: "22px",
    padding: "0px 0 0 10px",
  },

  " & .Buttoncours": {
    width: "323px",
    height: "57px",
    background: "#3A86FF",
    borderRadius: "8px",
    color: "#F5F5F5",
    boxShadow: "3px 3px 0px #FF8FA3",
    transition:
      "transform 0.08s cubic-bezier(0.4,0,0.2,1), box-shadow 0.08s cubic-bezier(0.4,0,0.2,1)",
    border: "1px #F5F2F9 solid",
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
  },
  " & .textandbutton": {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
}));

const Massagetext = styled(Typography)(() => ({
  fontWeight: 400,
  fontStyle: "regular",
  fontSize: "18px",
  fontFamily: "Roboto",
  color: "#1D3452",
  lineHeight: "25px",
  letterSpacing: "0%",
  width: "360px",
  height: "113px",
  padding: "0px 0 0 10px",

  "& span": {
    fontWeight: 400,
    fontStyle: "regular",
    fontSize: "18px",
    fontFamily: "Roboto",
    color: "#FF8FA3",
    lineHeight: "25px",
    letterSpacing: "0%",
  },
}));
const BoxIntro = styled(Box)(() => ({
  height: "100vh",
}));
