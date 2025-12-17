import Intro from "../components/main/Intro";
import { CoursesSection } from "../components/main/CoursesSection";
import Ourcourses from "../components/main/Ourcourses";
import ReviewsSection from "../components/main/ReviewsSection";
import ConsultationForm from "../components/main/ConsultationForm";
import Questions from "../components/main/Questions";
import Footer from "../layout/Footer";

const MainPage = () => {
  return (
    <>
      <Intro />
      <CoursesSection />
      <Ourcourses />
      <ReviewsSection />
      <ConsultationForm />
      <Questions />
      <Footer />
    </>
  );
};

export default MainPage;
