import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function ContactItem({ name, icon }) {
  return (
    <div className="contactItem p-6 md:h-100 text-center md:aspect-square rounded-2xl flex flex-col items-center justify-center gap-4 border fill-text ">
      <h2 className="text-3xl"> {name}</h2>
    {icon}
    </div>
  );
}
