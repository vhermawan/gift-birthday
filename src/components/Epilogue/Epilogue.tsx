import SbyImage from "@/assets/images/sby.jpeg"
import DateImage from "@/assets/images/date.jpeg"
import MarugameImage from "@/assets/images/marugame.jpeg"
import DateMultipleImage from "@/assets/images/date_multiple.jpeg"
import FirstMetImage from "@/assets/images/first_met.jpeg"
import StudioImage from "@/assets/images/studio.jpeg"
import TamansariImage from "@/assets/images/tamansari.jpeg"
import BonbinImage from "@/assets/images/bonbin.jpeg"
import TamanImage from "@/assets/images/taman.jpeg"
import TimezoneImage from "@/assets/images/timezone.jpeg"
import KaliurangImage from "@/assets/images/kaliurang.jpeg"
import LastsImage from "@/assets/images/last.jpeg"

const Epilogue = () => {
  return (
    <section id="epilogue" className="font-jakarta w-full p-4 md:px-32">
      <div className="flex flex-col  text-center justify-center mt-10 items-center">
        <h1 className="text-center font-bold text-2xl md:text-4xl">Epilogue</h1>
        <p className="mt-4">
          In closing this website, I would like to thank you for the opportunity given 
          even though it started with drama in the process of creating this website, 
          but finally this website is finished. Thank you, for wanting to be a partner 
          who understands and is patient with me. I'm sorry there are still many shortcomings, 
          but I hope we and I can be a better couple in the future as we get older, 
          which means bigger responsibilities. Let's get through 1/4 century.
          which will come with joy, thank you love you darling. So here i recap you beautiful face and moments
          that we spend together.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <div className="grid gap-4">
              <div>
                  <img className="h-auto md:h-full object-cover max-w-full rounded-lg" src={SbyImage} alt="" />
              </div>
              <div className="h-full">
                  <img className="h-auto md:h-full object-cover max-w-full rounded-lg" src={DateImage} alt="" />
              </div>
              <div>
                  <img className="h-auto md:h-full object-cover max-w-full rounded-lg" src={DateMultipleImage} alt="" />
              </div>
          </div>
          <div className="grid gap-4">
              <div>
                  <img className="h-auto md:h-full object-cover max-w-full rounded-lg" src={MarugameImage} alt="" />
              </div>
              <div>
                  <img className="h-auto md:h-full object-cover max-w-full rounded-lg" src={FirstMetImage} alt="" />
              </div>
              <div>
                  <img className="h-auto md:h-full object-cover max-w-full rounded-lg" src={StudioImage} alt="" />
              </div>
          </div>
          <div className="grid gap-4">
              <div>
                  <img className="h-auto md:h-full object-cover max-w-full rounded-lg" src={TamansariImage} alt="" />
              </div>
              <div>
                  <img className="h-auto md:h-full object-cover max-w-full rounded-lg" src={BonbinImage} alt="" />
              </div>
              <div>
                  <img className="h-auto md:h-full object-cover max-w-full rounded-lg" src={TamanImage} alt="" />
              </div>
          </div>
          <div className="grid gap-4">
              <div>
                  <img className="h-auto md:h-full object-cover max-w-full rounded-lg" src={TimezoneImage} alt="" />
              </div>
              <div>
                  <img className="h-auto md:h-full object-cover max-w-full rounded-lg" src={KaliurangImage} alt="" />
              </div>
              <div>
                  <img className="h-auto md:h-full object-cover max-w-full rounded-lg" src={LastsImage} alt="" />
              </div>
          </div>
      </div>
    </section>
  )
}

export {Epilogue}