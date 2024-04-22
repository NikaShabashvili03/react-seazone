
export default function Header() {
    return (
    <div className="flex justify-between items-center w-[85%] mt-[20px]">
        <img src="/rename.png" className="w-[101px] h-[101px] object-fit"/>
        <div className="flex gap-5">
            <p className="font-bold">კლუბის შესახებ</p>
            <p className="font-bold">ივენთები</p>
            <p className="font-bold">იახტები</p>
            <p className="font-bold">აქტივობები</p>
        </div>

        <div className="rounded-bl-3xl
        rounded-tr-3xl
        rounded-br-lg 
        rounded-tl-lg
        bg-[#B5D7FF] w-[81px] h-[49px] 
        flex items-center justify-center gap-1">
            <p className="text-sm">GE</p>
            <img src="/arrow.png"/>
        </div>
    </div>
    );
  }
  