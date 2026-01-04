import ContactItem from "../components/ContactItem";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <section className="full-page h-dvh flex flex-col justify-center items-center text-left md:items-center md:px-24 pt-auto bg-primary text-text">
      <h1 className="text-6xl text-center md:text-left">Contact</h1>
      <div className="w-8/10 h-auto flex flex-col justify-center items-center">
        <div className="itemHolder flex flex-col md:flex-row pt-8 gap-10">
          <ContactItem
            name="Github : Itsty"
            icon={
              <FaGithub
                size={46}
                className=" inline hover:fill-purple-400 transition-all duration-300"
              />
            }
          />
          <ContactItem
            name="LinkIn : Patchara Poonsawat"
            icon={
              <FaLinkedin
                size={46}
                className=" inline hover:fill-blue-400 transition-all duration-300"
              />
            }
          />
          <ContactItem
            name="Discord : Itsty"
            icon={
              <FaDiscord
                size={46}
                className=" inline hover:fill-blue-600 transition-all duration-300"
              />
            }
          />
        </div>
      </div>
    </section>
  );
}
