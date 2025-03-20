// src/components/Footer.jsx
import '../../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>EscapeTales © {new Date().getFullYear()}</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="footer-social">
        Follow us on
        <a href="#"> Instagram</a> | 
        <a href="#"> Twitter</a>
      </div>
    </footer>
  );
}
