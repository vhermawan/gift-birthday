const Hero = () => {
  return (
    <section className="mt-[100px] md:mt-[50px]font-jakarta p-4">
      <div className="flex flex-col gap-y-2 md:gap-y-7 md:text-center md:items-center">
        <div className="badge badge-[#3fa8e0] badge-outline">10 December 2023</div>
        <h1 className="font-normal text-[#a6abad] text-2xl md:text-5xl">
          This is your special day!! Let's be happier 🎉
        </h1>
        <h1 className="font-bold text-3xl md:text-6xl">
          Happy Birthday Dessy Devina Handayani
        </h1>
        <h3 className="text-xs text-justify md:text-center md:text-base md:w-1/2">
          Happy birthday dear, I hope that on this birthday all your hopes and dreams will be made easier 
          and always given you good health. Thank you for being together all this time, 
          hopefully in the future we will always be together and become more mature to face existing problems. 
          Once again happy birthday, I love you.
        </h3>
        <button className="btn btn-outline bg-red-300">Find Your Wish</button>
      </div>
    </section>
  )
}

export { Hero }