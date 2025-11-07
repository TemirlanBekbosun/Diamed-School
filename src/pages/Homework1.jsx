import React from "react";
import HomeworkCard from "../components/HomeworkCard";
import SubmitHomework from "../components/SubmitHomework";

export default function Homework1() {
  const homework = {
    description:
      "Зависимость между объемом газа, давлением и температурой можно выразить общим уравнением...",
    comment:
      "Зависимость между объемом газа, давлением и температурой можно выразить общим уравнением...",
  };

  const isSubmitted = true;

  const handleFileAttach = () => {
    alert("Файл тандоо ачылды");
  };

  const handleSubmit = () => {
    alert("Отправлено!");
  };

  return (
    <>
      <HomeworkCard
        description={homework.description}
        comment={homework.comment}
        isSubmitted={isSubmitted}
        onFileAttach={handleFileAttach}
      />
      {!isSubmitted && <SubmitHomework onSubmit={handleSubmit} />}
    </>
  );
}
