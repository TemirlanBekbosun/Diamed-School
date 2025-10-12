import Header from "../layout/Header";
import Intro from "../components/main/Intro";
import { CoursesSection } from "../components/main/CoursesSection";
import Ourcourses from "../components/main/Ourcourses";
import ReviewsSection from "../components/main/ReviewsSection";
import NewsAndArticles from "../components/main/NewsAndArticles";
import ConsultationForm from "../components/main/ConsultationForm";
import Questions from "../components/main/Questions";
import Footer from "../layout/Footer";

const Mainpage = () => {
  return (
    <>
      <Header />
      <Intro />
      <CoursesSection />
      
      <Ourcourses />
      <ReviewsSection />
      <NewsAndArticles />
      <ConsultationForm />
      <Questions />
      <Footer />
    </>
  );
};

export default Mainpage;
