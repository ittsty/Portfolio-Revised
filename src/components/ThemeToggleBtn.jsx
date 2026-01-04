import { FaSun,FaMoon } from "react-icons/fa6";
import { useTheme } from "../hooks/UseTheme";
export default function ThemeToggleBtn() {
  const { isDark, setDark } = useTheme();
  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      className="p-4 up fill-text hover:bg-gray-50 hover:fill-primary w-18"
    >
      {isDark ? <FaMoon size={32} className="block" /> : <FaSun size={32} className="block" />}
    </button>
  );
}
