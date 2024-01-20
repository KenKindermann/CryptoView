import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer>
      <p>Copyright 2024.</p>
      <div className="social-media-icons">
        <SocialIcon
          url="https://instagram.com"
          target="_blank"
          bgColor="black"
          style={{ width: "35px", height: "35px" }}
        />
        <SocialIcon
          url="https://discord.com"
          target="_blank"
          bgColor="black"
          style={{ width: "35px", height: "35px" }}
        />
      </div>
    </footer>
  );
};

export default Footer;
