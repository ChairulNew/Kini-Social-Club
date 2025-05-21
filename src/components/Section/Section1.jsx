import VideoSection1 from "../../assets/section1.mp4";
import "../../section.css";

const Section1 = () => {
  return (
    <section id="section1">
      <div className="tworow">
        <div className="left">
          <div className="text-wrapper">
            <h2 className="sub-title">
              Menyatukan Komunitas Lewat Ruang dan Rasa
            </h2>
            <p className="textsection">
              Kini Social Club lahir dari keinginan untuk menciptakan lebih dari
              sekadar tempat makan dan minum. Kami ingin membangun ruang
              berkumpul yang hangat, estetik, dan penuh energi positif bagi
              semua kalangan. Terletak di Jl. Sei Serayu No. 95, Medan, Kini
              hadir sebagai destinasi bagi mereka yang mencari suasana baru
              untuk bersantai, berdiskusi, bekerja, atau merayakan momen
              spesial.
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

export default Section1;
