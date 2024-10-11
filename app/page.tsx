import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative w-[100%] h-[100vh] mx-auto overflow-hidden bg-[url('/images/city2.jpg')] bg-cover bg-center">
        <div className="w-full h-full bg-black/50">
          <div className="text-center p-10 flex justify-center text-xl text-white">
            <Navbar></Navbar>
          </div>
        </div>
      </div>
      <section className="flex flex-col  bg-gray-200">

        <div className="max-w-6xl mx-auto mt-64 mb-64 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full h-full pb-[100%] md:pb-[75%] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/nextjs-github-pages/images/rocks.jpg"
              alt="Artur"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
            <p className="text-lg text-gray-600">
              Hello! I am Artur, a passionate developer with a love for creating beautiful and functional web experiences.
              With expertise in React, Next.js, and modern web technologies, I am eager to build applications that not only
              look great but also provide exceptional performance.
            </p>
            <p className="text-lg text-gray-600">
              Other things I want to mention are that I am a big fan of chess and UFC. While I love martial arts, I am former professional rock climber.
              Some hobbies that I enjoy are photography, reading, and call of duty games.
            </p>
          </div>
        </div>
      </section>

    </>


  );
}

