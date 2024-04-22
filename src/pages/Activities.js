import ActivitiesComp from "../components/activities/ActivitiesComp";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ActivitiesPage() {
    return (
      <main className="flex flex-col items-center ">
        <Header/>
        <ActivitiesComp />
        <Footer/>
      </main>
    );
  }
  