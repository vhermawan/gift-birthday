const Hero = () => {
  return (
    <section id="hero" className="mt-[60px] md:mt-[50px] font-jakarta p-4">
      <div className="flex flex-col gap-y-3 md:gap-y-7 md:items-center">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-30"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#ee57ff] opacity-30 sm:left-[calc(50%-30rem)]"></div>
        </div>
        
        <div className="badge badge-[#3fa8e0] badge-outline">10 December 2023</div>
        <h1 className="font-normal text-[#a6abad] text-2xl md:text-5xl">
          This is your special day!! Let's be happier 🎉
        </h1>
        <h1 className="font-bold text-3xl md:text-6xl">
          Happy Birthday Dessy Devina Handayani
        </h1>
        <h3 className="text-sm text-justify md:text-center md:text-base md:w-1/2 mx-auto">
          Happy birthday dear, I hope that on this birthday all your hopes and dreams will be made easier 
          and always given you good health. Thank you for being together all this time, 
          hopefully in the future we will always be together and become more mature to face existing problems. 
          Once again happy birthday, I love you.
        </h3>

        <div
          className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-22rem)]"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tl from-[#ff9452] to-[#ff9452] opacity-20 sm:left-[calc(50%+36rem)]"></div>
        </div>
      </div>
    </section>
  )
}

export { Hero }