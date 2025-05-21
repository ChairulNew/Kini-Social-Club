import VideoSection1 from "../../assets/section1.mp4";
import "../../section.css";

const Section5 = () => {
  return (
    <section id="section1">
      <div className="tworow">
        <div className="left">
          <div className="text-wrapper">
            <h2 className="sub-title">Light Drinks</h2>
            <p className="textsection">
              Espresso <br /> Americano <br /> Piccolo <br /> Coffee Mocktails{" "}
              <br /> Lychee Honey Tea <br />
              Strawberry Honey Tea <br /> Lemon Honey Tea <br /> Peach Honey Tea{" "}
              <br />
              Butterfly Fave Tea <br /> Orange Juice <br /> Watermelon Juice{" "}
              <br /> Green Apple Juice
            </p>
          </div>
          <div className="btn-section-center">
            <button className="btn">Click to Maps</button>
          </div>
        </div>
        <div className="right">
          <video autoPlay muted loop playsInline src={VideoSection1}></video>
        </div>
      </div>
    </section>
  );
};

export default Section5;
