import VideoSection2 from "../../assets/section2.mp4";
import "../../section.css";

const Section2 = () => {
  return (
    <section id="section2" className="reverse">
      <div className="tworow">
        <div className="right">
          <video autoPlay muted loop playsInline src={VideoSection2}></video>
        </div>
        <div className="left">
          <div className="text-wrapper">
            <h2 className="sub-title">Heavy Meals</h2>
            <p className="textsection">
              Chicken Steak <br /> Ayam Bakar kini <br /> Meltique Sirloin{" "}
              <br />
              Sop Buntut <br /> Nasi Goreng Kini <br /> Nasi Campur Bali <br />{" "}
              Nasi Gimbal <br /> Yangzhou Fried Rice <br /> Japanese Omurice{" "}
              <br /> Omelet Garlic Butter Rice <br /> Chicken Katsu Curry <br />{" "}
              Chicken Oriental
            </p>
          </div>
          <div className="btn-section-center">
            <button className="btn">Click for more...</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
