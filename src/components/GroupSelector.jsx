import { FaGamepad, FaWandMagicSparkles, FaDisplay } from "react-icons/fa6";

export function GroupSelector({ view, setView }) {
  const Item = ({ value, children, className = "" }) => {
    const active = view === value;

    return (
      <button
        onClick={() => setView(value)}
        className={`
          w-full md:w-1/3 h-full
          flex items-center justify-center
          text-xl p-4
          transition-all duration-200
          ${className}
          ${active ? "bg-text text-primary" : "up"}
        `}
      >
        {children}
      </button>
    );
  };
  
  return (
    <div
      className="
        h-fit md:h-16 w-full md:max-w-6/10
        rounded-2xl
        md:rounded-full
        overflow-hidden
        border-[0.5px]
        border-text
        
        flex
        flex-col
        items-center
        md:flex-row
        bg-primary
        
      "
    >
      <Item value="1" className="border-r">
        <FaDisplay size={28} /> <h2 className=" ml-3">Web Dev</h2>
      </Item>

      <Item value="2" className="border-r">
        <FaGamepad size={36} /> <h2 className=" ml-3">Game Dev</h2>
      </Item>

      <Item value="3">
        <FaWandMagicSparkles size={24} /> <h2 className=" ml-3">Other Works</h2>
      </Item>
    </div>
  );
}
