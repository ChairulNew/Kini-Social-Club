import VideoSection3 from "../../assets/section3.mp4";
import "../../section.css";

const Section3 = () => {
  return (
    <section id="section1">
      <div className="tworow">
        <div className="left">
          <div className="text-wrapper">
            <h2 className="sub-title">Light Meals</h2>
            <p className="textsection">
              Lava Cake <br /> Tape Roll Srikaya <br /> Klepon Cake <br /> Mocca
              Ceres <br /> Fruit Sando <br />
              Bakso Goreng <br /> Ayam Goreng Bawang Putih <br /> Kini Beef
              Satay <br /> Tahu Gejrot <br />
              Bakwan Gunting <br /> Kini Snack Combo <br /> Spicy Wings
            </p>
          </div>
          <div className="btn-section-center">
            <button className="btn">Click for more...</button>
          </div>
        </div>
        <div className="right">
          <video autoPlay muted loop playsInline src={VideoSection3}></video>
        </div>
      </div>
    </section>
  );
};

export default Section3;
