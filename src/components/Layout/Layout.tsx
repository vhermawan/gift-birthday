import { Header } from "@/components/Header/Header"
import { Footer } from "../Footer/Footer"

const Layout = ({children}: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      <section id="content" className="h-screen">
        {children}
      </section>
      <Footer />
    </>
  )
}

export { Layout }