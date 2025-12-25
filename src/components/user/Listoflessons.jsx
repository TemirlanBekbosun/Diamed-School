import { styled } from "@mui/material";
import Button from "../UI/Button";
import LessonsFolderComponent from "../UI/user/LessonsFolderComponent";

const Listoflessons = () => {
  return (
    <>
      <Maincontainer>
        <div style={{ display: "flex", alignItems: "center", gap: "103px" }}>
          <Button variant="fourth">Мои уроки</Button>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Button width="319px" height="81px">
              Химия
            </Button>
            <Button width="319px" height="81px">
              Биология
            </Button>
            <Button width="319px" height="81px">
              Тесты
            </Button>
          </div>
        </div>

        <div>
          <LessonsFolderComponent />
        </div>
      </Maincontainer>
    </>
  );
};

export default Listoflessons;

const Maincontainer = styled("div")(() => ({
  padding: "50px 60px",
  display: "flex",
  flexDirection: "column",
  gap: "50px",
}));
