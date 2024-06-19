
import kalogo from '../images/LOGO.png';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={kalogo} alt="Kasa Logo" className="footer-logo" />
        <p>©2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;