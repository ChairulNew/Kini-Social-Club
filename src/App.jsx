import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Section1 from "./components/Section/Section1";
import Section2 from "./components/Section/Section2";
import Section3 from "./components/Section/Section3";
import Section4 from "./components/Section/section4";
import Section5 from "./components/Section/Section5";
import Gallery from "./Gallery/Gallery";
import Feedback from "./feedback/Feedback";
import Footer from "./assets/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Gallery />
      <Feedback />
      <Footer />
    </>
  );
}

export default App;
