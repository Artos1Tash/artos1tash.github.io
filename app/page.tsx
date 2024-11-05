import Navbar from "@/components/Navbar";
import Image from "next/image";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="relative w-[100%] h-[100vh] mx-auto overflow-hidden bg-[url('/images/city2.jpg')] bg-cover bg-center bg-fixed">
        <div className="w-full h-full bg-black/50">
          <div className="text-center p-10 flex justify-center text-xl text-white">
            <Navbar></Navbar>
          </div>
          <div className="flex justify-center typewriter ">
            <h1 className="flex text-white text-4xl text-align-center text-justify font-serif">Artur Tashbolotov</h1>
          </div>
        </div>
      </div>
      <section className="flex flex-col  bg-gray-200  ease-in duration-200  ">

        <div className="max-w-6xl mx-auto mt-64 mb-64 grid md:grid-cols-2 gap-8 items-center  fade-up-right">
          <div className="relative w-full h-full pb-[100%] md:pb-[75%] rounded-2xl overflow-hidden shadow-lg  fade-up-right">
            <Image
              src="/images/rocks.jpg"
              alt="Artur"
              fill
              className="object-cover fade-up-right"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800 fade-up-right">About Me</h2>
            <p className="text-lg text-gray-600 fade-up-right">
              Hello! I am Artur, a passionate developer interested in low level development with rust and c.
              With some experience with linux, networking, and backend, I am eager to learn and build.
            </p>
            <p className="text-lg text-gray-600 fade-up-right">
              Other things I want to mention are that I am a big fan of chess and UFC. While I love martial arts, I am former professional rock climber.
              Some hobbies that I enjoy are photography, reading, and call of duty games.
            </p>
          </div>
        </div>
      </section>
      <section>

      </section>
      {/* <section className="grid object-center bg-gray-200 justify-self-center">
        <Footer></Footer>
      </section> */}
    </>

  );
}

