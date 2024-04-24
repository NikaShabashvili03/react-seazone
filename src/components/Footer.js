
export default function Footer() {
    return (
    <div className="flex flex-col w-[90%]">
        <div className=" py-5 lg:h-[354px] mt-[100px] flex flex-col justify-center items-center bg-[#ecfeff] rounded-3xl border border-[#000000]">
            <img alt="logo"  src="/oceanlogo.png" className="w-[100px] lg:w-[121px] aspect-square object-fit mb-[40px]"/>
            <div className="flex gap-4 lg:gap-7 flex-col lg:flex-row border-t items-center border-white w-full justify-center py-5">
                <p className="font-bold text-lg">კლუბის შესახებ</p>
                <p className="font-bold text-lg">ივენთები</p>
                <p className="font-bold text-lg">იახტები</p>
                <p className="font-bold text-lg">აქტივობები</p>
            </div>
        </div>
        <p className="self-center mt-[20px] mb-[20px]">ყველა უფლება დაცულია</p>
    </div>
    );
  }
  