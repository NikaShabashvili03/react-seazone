
export default function Footer() {
    return (
    <div className="flex flex-col w-[90%] ">
        <div className=" h-[354px] mt-[100px] flex flex-col justify-center items-center bg-[#ecfeff] rounded-3xl border border-[#000000]">
            <img  src="/oceanlogo.png" className="w-[121px] h-[148px] object-fit mb-[40px]"/>
            <div className="flex gap-7 border-t border-white w-full justify-center py-5">
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
  