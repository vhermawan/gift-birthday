import ProlougeImage from "@/assets/images/prolouge_us.jpeg"

const Prolouge = () => {
  return (
    <section id="prolouge" className="font-jakarta w-full p-4 md:px-32">
      <div className="flex flex-col md:flex-row gap-x-10 gap-y-3 my-4">
        <img loading="lazy" alt="prolouge-us" className="rounded-lg w-full md:w-6/12 md:h-full" src={ProlougeImage} />
        <div className="flex flex-col md:w-6/12 gap-y-5">
          <h1 className="font-bold underline text-2xl md:text-4xl">Prolouge</h1>
          <p className="text-justify md:text-xl font-extralight">
            Hi, I can't believe it from the first chat last year and being together on your birthday as friends 
            at that time to today being a couple. There are many things to be grateful for on the journey achieved to 
            date and seeing you progress to become better every day, I am happy to be part of your life's journey, dear.
          </p>
          <div className="flex gap-x-2">
            <div className="badge badge-[#3fa8e0] badge-outline">Beginning</div>
            <div className="badge badge-[#3fa8e0] badge-outline">Intro</div>
            <div className="badge badge-[#3fa8e0] badge-outline">Meet</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export {Prolouge}