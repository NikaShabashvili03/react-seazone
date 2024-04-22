
export default function AboutComp() {
    return (
    <div className=" mt-[10px] mt-[100px] flex justify-center gap-5">
        <img src="/womantriangle.png" className="object-fit hidden xl:block h-[793px] w-[40%]"/>
        <div className="flex flex-col justify-center w-[90%] md:w-[70%] lg:w-[40%]">
            <h2 className="text-3xl md:text-6xl mb-[20px] md:mb-[40px]"><mark className="outline-none text-[#3D4CBD] border-none bg-transparent font-bold">კლუბის</mark> შესახებ</h2>
            <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis totam asperiores enim, nihil inventore quae modi cum saepe molestias ipsum accusamus. Adipisci expedita dolorum repellendus aspernatur, dolorem aperiam neque omnis. Aliquam quae atque cumque veritatis porro ab blanditiis error, soluta cum autem in corporis quaerat, numquam officia ea illo animi.</p>
            <img src="/aboutyacht.png" className="h-[332px] object-fit mt-[50px] md:mt-[150px]"/>
        </div>
    </div>
    );
  }
  