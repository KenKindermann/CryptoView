import { SocialIcon } from "react-social-icons";
import logo from "/src/assets/images/CryptoViewLogo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "auto";
  }, [showMenu]);

  return (
    <nav>
      <img src={logo} alt="cryptoview logo" className="logo" />
      <div className={`nav-links ${showMenu && `active`}`}>
        <ul>
          <li>Home</li>
          <li>
            <a href="#market">Market</a>
          </li>
          <li>Join us</li>
        </ul>
        <img
          src="/src/assets/icons/keyboard_arrow_up_FILL0_wght400_GRAD0_opsz24.svg"
          alt="arrow up icon"
          onClick={() => setShowMenu(false)}
        />
      </div>
      <div className="social-media-icons">
        <SocialIcon
          url="https://instagram.com"
          target="_blank"
          bgColor="#002c45"
          style={{ width: "35px", height: "35px", zIndex: 0 }}
        />
        <SocialIcon
          url="https://discord.com"
          target="_blank"
          bgColor="#002c45"
          style={{ width: "35px", height: "35px", zIndex: 0 }}
        />
      </div>
      <div className="toggle-bar" onClick={() => setShowMenu(true)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
