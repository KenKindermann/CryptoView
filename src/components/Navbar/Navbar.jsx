import { SocialIcon } from "react-social-icons";
import logo from "/src/assets/images/CrypotViewLogo.png";

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
        <SocialIcon url="https://instagram.com" />
        <SocialIcon url="https://discord.com" />
      </div>
    </nav>
  );
};

export default Navbar;
