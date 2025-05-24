// ambil icon
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="wrap-footer">
        <h2 className="sub-title-footer">KINI SOCIAL CLUB</h2>
        <p className="footer-text-center">
          SINCE XXXX. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
        </p>
        <div className="row-icon-footer">
          <FaInstagram style={{ width: 35, height: 35 }} />
          <FaWhatsapp style={{ width: 35, height: 35 }} />
          <FaTiktok style={{ width: 35, height: 35 }} />
        </div>
        <p className="footer-text-center">
          Copyright © 2025 Kini Social Club. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};
export default Footer;
