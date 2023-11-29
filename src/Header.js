import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import useWindowSize from "./hooks/useWindowSize";

function Header({ title }) {
  const { width } = useWindowSize()

  return (
    <header className="Header">
      <h1>{title}</h1>
      {width < 768 ? (
        <FaMobileAlt
          style={{ maxWidth: "20px", maxHeight:"20px", margin:"0.5rem 0rem 0.5rem 0.5rem" }}
        />
      ) : width < 992 ? (
        <FaTabletAlt
          style={{ maxWidth: "20px", maxHeight:"20px", margin:"0.5rem 0rem 0.5rem 0.5rem" }}
        />
      ) : (
        <FaLaptop
          style={{ maxWidth: "20px", maxHeight:"20px", margin:"0.5rem 0rem 0.5rem 0.5rem" }}
        />
      )}
    </header>
  );
}

export default Header;
