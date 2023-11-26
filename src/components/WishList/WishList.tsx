import DessyImage from "@/assets/images/dessy.png"


const WishList = () => {
  return (
    <section id="wish" className="font-jakarta w-full p-4 md:px-32">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-center font-bold text-2xl md:text-4xl underline">Wish from Every Person</h1>
        <p className="text-center font-thin">Let's make the wish happen in the future</p>
      </div>
      <div className="flex gap-y-2 flex-col md:flex-row justify-between mt-6">
        <img loading="lazy" alt="dessy" className="w-full md:w-5/12" src={DessyImage} />
        <div className="w-full md:w-5/12 flex flex-col gap-y-5 max-h-[300px] md:max-h-[500px] overflow-y-auto">
          <h1 className="font-semidbold text-base md:text-xl mb-2">Read every wish from your friend's.</h1>
          
          <div className=" border-l-[1px] flex flex-col gap-y-2 px-2 border-black">
            <p className="italic font-light">Happy birthday on your birthday</p>
            <p className="font-thin">-Sasha</p>
          </div>
           <div className=" border-l-[1px] flex flex-col gap-y-2 px-2 border-black">
            <p className="italic font-light">Happy birthday on your birthday</p>
            <p className="font-thin">-Sasha</p>
          </div>
           <div className=" border-l-[1px] flex flex-col gap-y-2 px-2 border-black">
            <p className="italic font-light">Happy birthday on your birthday</p>
            <p className="font-thin">-Sasha</p>
          </div>
          <div className=" border-l-[1px] flex flex-col gap-y-2 px-2 border-black">
            <p className="italic font-light">Happy birthday on your birthday</p>
            <p className="font-thin">-Sasha</p>
          </div>
          <div className=" border-l-[1px] flex flex-col gap-y-2 px-2 border-black">
            <p className="italic font-light">Happy birthday on your birthday</p>
            <p className="font-thin">-Sasha</p>
          </div>
          <div className=" border-l-[1px] flex flex-col gap-y-2 px-2 border-black">
            <p className="italic font-light">Happy birthday on your birthday</p>
            <p className="font-thin">-Sasha</p>
          </div>
          <div className=" border-l-[1px] flex flex-col gap-y-2 px-2 border-black">
            <p className="italic font-light">Happy birthday on your birthday</p>
            <p className="font-thin">-Sasha</p>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export {WishList}