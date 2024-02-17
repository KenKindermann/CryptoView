import { SocialIcon } from "react-social-icons";
import logo from "/assets/images/CryptoViewLogo.png";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "auto";
  }, [showMenu]);

  const location = useLocation();

  useEffect(() => {
    const sectionId = location.hash.substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const navigateToSection = (sectionId) => {
    navigate("/#" + sectionId);
    setShowMenu(false);
  };

  return (
    <nav>
      <img src={logo} alt="cryptoview logo" className="logo" onClick={() => navigate("/")} />
      <div className={`nav-links ${showMenu && `active`}`}>
        <ul>
          <li
            onClick={() => {
              navigateToSection("hero");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              navigateToSection("market");
            }}
          >
            Market
          </li>
          <li
            onClick={() => {
              navigateToSection("join-us");
            }}
          >
            Join us
          </li>
        </ul>
        <img
          src="/assets/icons/keyboard_arrow_up_FILL0_wght400_GRAD0_opsz24.svg"
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
