import HomeworkCard from "../components/HomeworkCard";
import SubmitHomework from "../components/SubmitHomework";

export default function Homework1() {
  const homework = {
    description:
      "Зависимость между объемом газа, давлением и температурой можно выразить общим уравнением...",
    comment:
      "Зависимость между объемом газа, давлением и температурой можно выразить общим уравнением...",
  };

  const isSubmitted = false;

  const handleSubmit = () => {
    alert("Отправлено!");
  };

  return (
    <>
      <HomeworkCard
        description={homework.description}
        comment={homework.comment}
        isSubmitted={isSubmitted}
      />

      {!isSubmitted && <SubmitHomework onSubmit={handleSubmit} />}
    </>
  );
}
