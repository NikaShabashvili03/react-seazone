import { useState } from "react";
import Language from "./Language";
import clsx from "clsx";

export default function Header() {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="flex justify-between items-center w-[85%] mt-[20px]">
                <button onClick={() => setShow(!show)} className="flex w-1/3 lg:hidden">
                    ოპენ
                </button>
                <div className="w-1/3 lg:w-auto flex justify-start -ml-[10px] items-center">
                    <img alt="logo" src="/rename.png" className="w-[101px] h-[101px] object-fit"/>
                </div>
                <div className="hidden gap-5 lg:flex">
                    <p className="font-bold">კლუბის შესახებ</p>
                    <p className="font-bold">ივენთები</p>
                    <p className="font-bold">იახტები</p>
                    <p className="font-bold">აქტივობები</p>
                </div>

                <Language/>
            </div>
            <div className={clsx(
                "z-50 fixed w-full flex duration-500 justify-center items-start transition-all h-dvh bg-red-300",
                show ? 'translate-x-0' : '-translate-x-full'
            )}>

                    <button onClick={() => setShow(!show)} className="flex lg:hidden">
                        klose
                    </button>

            </div>
        </>
    );
  }
  