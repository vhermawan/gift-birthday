import { Header } from "@/components/Header/Header"
import { Footer } from "../Footer/Footer"
import { Ballon } from "@/components/Ballon/Ballon";
import { useEffect } from "react";

const Layout = ({children}: React.PropsWithChildren) => {

  useEffect(()=> {
    Ballon();
  },[])

  return (
    <>
      <Header />
      <section id="content" className="min-h-screen">
        {children}
      </section>
      <Footer />
    </>
  )
}

export { Layout }