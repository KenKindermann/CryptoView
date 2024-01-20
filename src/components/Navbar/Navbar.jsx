import { SocialIcon } from "react-social-icons";
import logo from "/src/assets/images/CryptoViewLogo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="cryptoview logo" />
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>Market</li>
          <li>Join us</li>
        </ul>
      </div>
      <div className="social-media-icons">
        <SocialIcon
          url="https://instagram.com"
          target="_blank"
          bgColor="#002c45"
          style={{ width: "35px", height: "35px" }}
        />
        <SocialIcon
          url="https://discord.com"
          target="_blank"
          bgColor="#002c45"
          style={{ width: "35px", height: "35px" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
