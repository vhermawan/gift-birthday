import DessyImage from "@/assets/images/dessy.png"
import { LIST_WISH } from "@/common/constant"


const WishList = () => {
  return (
    <section id="wish" className="font-jakarta w-full p-4 md:px-32">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-center font-bold text-2xl md:text-4xl underline">Wish from Every Person</h1>
        <p className="text-center font-thin">Let's make the wish happen in the future</p>
      </div>
      <div className="flex gap-y-2 flex-col md:flex-row justify-between mt-6">
        <div className="flex justify-center align-middle items-center w-full md:w-5/12">
          <img loading="lazy" alt="dessy" className="w-full m-auto"  src={DessyImage} />
        </div>
        <div className="w-full md:w-5/12 flex flex-col gap-y-5 max-h-[300px] md:max-h-[500px] overflow-y-auto">
          <h1 className="font-semidbold text-base md:text-xl mb-2">Read every wish from your friend's.</h1>
          
          {LIST_WISH.map((wish)=> {
            return (
              <div className=" border-l-[1px] flex flex-col gap-y-2 px-2 border-black">
                <p className="font-light text-justify">{wish.wish}</p>
                <p className="font-bold">-{wish.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export {WishList}