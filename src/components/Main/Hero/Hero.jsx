import arrowDown from "/assets/icons/arrow_downward_FILL0_wght400_GRAD0_opsz24.svg";

const Hero = () => {
  return (
    <section id="hero">
      <h2 className="subtitle">Track and Trade</h2>
      <h1 className="big-header">Crypto Currencies</h1>
      <img src={arrowDown} alt="arrow downward" />
    </section>
  );
};

export default Hero;
