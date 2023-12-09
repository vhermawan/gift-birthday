import { Header } from "@/components/Header/Header"
import { Footer } from "../Footer/Footer"
import { Ballon } from "@/components/Ballon/Ballon";
import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from 'react-icons/fa';
import SertaMulia from "@/assets/songs/Sal-Priadi-Serta-Mulia-Official.mp3"

const Layout = ({children}: React.PropsWithChildren) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

   const togglePlayPause = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (isPlaying) {
          audio.pause();
      } else {
          audio.play();
      }
      setIsPlaying(!isPlaying);
  };

  useEffect(()=> {
    audioRef.current?.play();
    Ballon();
  },[])

  return (
    <>
      <audio ref={audioRef} src={SertaMulia} autoPlay />
      <Header />
      <section id="content" className="min-h-screen">
        {children}
      </section>
      <button onClick={togglePlayPause} title="Contact Sale" className="fixed z-90 bottom-10 right-8 bg-blue-500 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl">{isPlaying ? <FaPause /> : <FaPlay />}</button>
      <Footer />
    </>
  )
}

export { Layout }