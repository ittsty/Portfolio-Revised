import ContactItem from "../components/ContactItem";

export default function ContactPage() {
  return (
    <section className="full-page h-dvh flex flex-col justify-center items-center pace-y-4 pt-auto bg-primary text-text">
      <div className="w-9/10 h-8/10 space-y-6">
        <h1 className="text-6xl">Contact</h1>
        <div className="itemHolder h-8/10 flex gap-10 ">
          <ContactItem name ="Github"/>
          <ContactItem name ="LinkIn"/>
          <ContactItem name ="Discord"/>
        </div>
      </div>
    </section>
  );
}
