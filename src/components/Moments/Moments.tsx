import { LIST_MOMENT } from "@/common/constant"
import { Fragment } from "react"

const Moments = () => {
  return (
    <section id="moments" className="font-jakarta w-full p-4 md:px-32 mt-6">
      <div className="flex flex-col md:flex-row gap-y-2 md:justify-between mb-3 md:items-center">
        <h1 className="font-bold text-2xl md:text-4xl underline">Moments</h1>
        <h1 className="font-thin">All moments that we created in 2023</h1>
      </div>

      {LIST_MOMENT.map((moment) => {
        return (
          <Fragment key={moment.key}>
             <div className="flex w-full h-full gap-x-10 gap-y-2 flex-col md:flex-row md:justify-between border-t-[1px] border-[#d7d7d9] py-2">
              <h1 className="mt-2 font-thin md:w-2/12 hidden md:block">{moment.date}</h1>
              <div className="badge badge-[#3fa8e0] badge-outline mt-2 md:hidden">{moment.date}</div>
              <div className="flex flex-col gap-y-3 md:w-5/12">
                <h1 className="font-bold text-xl tracking-wide">
                  {moment.title}
                </h1>
                <p className="font-thin">{moment.description}</p>
              </div>
              <img loading="lazy" alt="prolouge-us" className="rounded-lg w-full md:w-6/12 md:h-[270px] object-cover" src={moment.image} />
            </div>
          </Fragment>
        )
      })}
    </section>
  )
}

export {Moments}