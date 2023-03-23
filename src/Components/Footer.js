import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

export const FooterEnd = () => {
  return (
    <footer className="footer my-lg-6 my-5 ">
      <h1 className="nmc_keep">KEEP UP WITH US</h1>
      <div>
        <FaFacebookSquare id="icons" />
        <FaInstagramSquare id="icons" />
      </div>
      <h1 className="nmc_says">Nativity of Mary Chorale</h1>
    </footer>
  );
};
