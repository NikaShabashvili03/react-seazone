import DescriptionPage from "../components/boatpage/DescriptionPage";
import Header from "../components/Header";
import Wave from "../components/Wave";

export default function BoatPage() {
    return (
      <main className="flex flex-col items-center ">
        <Header/>
        <DescriptionPage/>
        <Wave/>
      </main>
    );
  }
  