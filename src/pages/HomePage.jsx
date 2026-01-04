import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function HomePage() {
  return (
    <section className="full-page h-screen flex px-6 md:px-24 ">
      <div className="md:max-w-6/10 h-full flex flex-col justify-center items-center md:items-end text-center md:text-end space-y-4 md:ml-auto">
        <p className="text-5xl md:text-6xl leading-tight">Let's Create something <span className="text-highlight font-black">IMPACT</span> and meaningful</p>
        <h1 className="text-3xl">
          Hi I'm
          <span className="text-highlight">Patchara Poonsawat</span>
        </h1>
        <div className="h-16 w-fit space-x-4">
          <FaGithub
            size={46}
            className=" inline hover:fill-purple-400 transition-all duration-300"
          />
          <FaLinkedin
            size={48}
            className=" inline  hover:fill-blue-400 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}
