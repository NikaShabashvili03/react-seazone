import Footer from "../components/Footer";
import AboutComp from "../components/home/AboutComp";
import Header from "../components/Header";

export default function AboutPage() {
    return (
      <main className="flex flex-col items-center ">
        <Header/>
        <AboutComp/>
        <Footer/>
      </main>
    );
  }
  