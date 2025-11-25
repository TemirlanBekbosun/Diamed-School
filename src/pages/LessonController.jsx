import { useState } from "react";
import { Box } from "@mui/material";
import LessonHeader from "../components/LessonHeader";
import Tabs from "../components/Tabs";
import Lesson1 from "./Lesson1";
import Homework1 from "./Homework1";
import UserHeaders from "../layout/user/userHeaders";

export default function LessonController() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
    <UserHeaders />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "40px",
          width: "95%",
          minHeight: "100vh",
          alignItems: "stretch",
          p: { xs: 2, md: 4 },
        }}
      >
        <LessonHeader />
        <Tabs value={activeTab} onChange={setActiveTab} />
        <Box width="100%" mt={2}>
          {activeTab === 0 && <Lesson1 />}
          {activeTab === 1 && <Homework1 />}
        </Box>
      </Box>
    </>
  );
}
