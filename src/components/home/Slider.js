
export default function Slider() {
    return (
    <div className="self-center mt-[10px] h-[273px] md:w-[90%] lg:h-[60vh] xl:h-[85vh] relative  ">
        <img src="/womanyacht.png" className=" w-[348px] w-full md:w-full h-full "/>
        <p className="text-xl sm:text-2xl md:text-4xl xl:text-6xl absolute top-[50%] md:top-[40%] right-[100px] md:right-[60px] -translate-y-[50%] text-white font-bold">საუკეთესო ადგილი <br/> დაუვიწყარი <br/> გამოცდილებისკენ</p>
        <div className="hidden lg:flex gap-1 absolute bg-[#F8FEFF] absolute left-[30px] bottom-[30px] rounded-full p-2">
            <button className="bg-[#E0FDFF] rounded-full h-[60px] w-[60px] xl:h-[90px] xl:w-[90px]"></button>
            <button className="bg-[#E0FDFF] rounded-full h-[60px] w-[60px] xl:h-[90px] xl:w-[90px]"></button>
        </div>
    </div>
    );
  }
  