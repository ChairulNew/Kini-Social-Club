import VideoHeader from "../../assets/video-header.mp4";
import "./Header.css";

const Header = () => {
  return (
    <section id="header">
      <div className="header-wrap">
        <div className="slogan-text-wrap">
          <h1 className=" title-heading">SUNSET OF MIND</h1>
          <button className="btn_title">Click for more information</button>
        </div>
        <video
          src={VideoHeader}
          autoPlay
          muted
          loop
          playsInline
          className="header-video"
        />
        <div className="header-bottom">
          <p className="header-text-bottom">SINCE 2022</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
