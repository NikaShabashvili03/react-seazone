import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BoatPage from "./pages/Boatpage";

function App() {
  return (
    <Routes>
      <Route exact path={'/'} element={<Home/>}/>
      <Route exact path={'/yacht/:id'} element={<BoatPage/>}/>
    </Routes>
  );
}

export default App;
