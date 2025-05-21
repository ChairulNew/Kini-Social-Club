import VideoSection2 from "../../assets/section2.mp4";
import "../../section.css";

const Section4 = () => {
  return (
    <section id="section2" className="reverse">
      <div className="tworow">
        <div className="right">
          <video autoPlay muted loop playsInline src={VideoSection2}></video>
        </div>
        <div className="left">
          <div className="text-wrapper">
            <h2 className="sub-title">Heavy Drinks</h2>
            <p className="textsection">
              Iced Flavored Latte <br /> Cappuccino <br /> Sanger <br />{" "}
              Tiramisu Cream Cheese <br />
              Pistachio Nuts <br /> Kini Kopi Susu <br /> Blueberry Cream Cheese{" "}
              <br /> Marshmallow Fluff <br /> Chocolatte Chic <br /> Strawberry
              Mooly Cooler <br /> Berrycha Breeze <br />
              Peanut Butter (Milk Shake)
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

export default Section4;
