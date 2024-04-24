import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route exact path={'/'} element={<Home/>}/>
      <Route exact path={'/yacht/:id'} element={      
      <div className="flex flex-col items-center xl:flex-row justify-center mt-[100px] gap-5 w-[90%] md:w-full mb-[100px]">
            <div className="flex order-2 xl:order-1 flex-col mr-[5%] items-center justify-center">
                <img src="/boatpage.png"  className="h-[full] lg:h-[400px] xl:h-[441px] object-fit" />
                <div className=" hidden md:flex gap-3 flex-grow mt-[20px] w-full">
                    <img src="/romantic.png" className=" h-[100px] lg:h-[120px] flex-grow xl:h-[147px] rounded-lg object-fit"/>
                    <img src="/romantic.png" className=" h-[100px] lg:h-[120px] flex-grow xl:h-[147px] rounded-lg object-fit"/>
                    <img src="/romantic.png" className=" h-[100px] lg:h-[120px] flex-grow xl:h-[147px] rounded-lg object-fit"/>
                    <img src="/romantic.png" className="h-[100px] lg:h-[120px] flex-grow xl:h-[147px] rounded-lg object-fit"/>
                </div>
            </div>
            <div className="flex flex-col w-[90%] xl:order-2 xl:w-[40%]">
                <h2 className="text-xl md:text-4xl text-[#263774] font-bold md:order-1">Lorem ipsum dolor sit amet</h2>
                <div className="flex flex-col md:flex-row order-3 md:order-2 bg-[#FFFFFF] md:w-[50%] lg:w-full justify-center items-center border border-[#66ACFF] rounded-lg p-3 mt-[50px]">
                        <div className="flex flex-col border-b md:border-b-0 md:border-r border-[#E0E0E0] w-full justify-center items-center">
                            <p className="text-xl md:text-3xl text-[#263774] font-bold">150₾</p>
                            <p className="text-sm text-[#A9A9A9] mt-[5px]">1 persona</p>
                        </div>
                        <p className="text-lg text-[#8F8F8F] w-full text-center py-3 md:py-0">36 adgili</p>
                        <div className="flex gap-2 md:gap-5 border-t md:border-t-0 py-3 md:py-0 md:border-l border-[#E0E0E0] w-full h-full justify-center items-center">
                                <img className="h-[25px] w-[25px] object-fit" src="/whatsapp.png"/>
                                <img className="h-[30px] w-[30px] object-fit" src="/viber.png"/>
                        </div>
                </div>  
                <p className="text-lg mt-[50px] md:order-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore voluptatum, rem eum labore quod at enim itaque officia alias sit repudiandae esse porro veritatis non quia sint provident eligendi quos quidem a ullam tenetur? Error voluptatum itaque ipsam animi vero laudantium numquam obcaecati fuga quas, quo totam provident at. Optio.</p>
            </div>
      </div>}/>
    </Routes>
  );
}

export default App;
