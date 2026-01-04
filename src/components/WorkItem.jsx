import { FaGithub,FaGlobe } from "react-icons/fa6";

export default function WorkItem({ className = "" }) {
  return (
    <div
      className={`max-w-full text-text p-5 border-text border-2 shadow-md/30 shadow-text rounded-3xl space-y-3 flex flex-col justify-center  ${className}`}
    >
      <div className="w-full aspect-video overflow-hidden rounded-2xl">
        <iframe
          src="https://www.youtube.com/embed/BHi708tgSwY"
          title="YouTube video player"
          className="h-full w-full"
        ></iframe>
      </div>
      <h2 className="text-3xl font-semibold">GGJ2022 || Duìmiàn de</h2>
      <p className="text-lg ">
        Global Game Jam 2020 at DPU Jamsite using Unity my main role is
        Programer and take some path in game designer
      </p>
      <div className="flex justify-center gap-4">
        <FaGithub
          size={32}
          className=" inline hover:fill-purple-400 transition-all duration-300"
        />
        <FaGlobe size={31}
          className=" inline hover:fill-purple-400 transition-all duration-300" />
      </div>
    </div>
  );
}
