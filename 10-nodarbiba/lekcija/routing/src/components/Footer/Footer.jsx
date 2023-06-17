import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="title">Footer</h2>
      <div className="content">
        <div>
          <a className="link" href="/">
            Services
          </a>
          <a className="link" href="/">
            Contact Us
          </a>
          <a className="link" href="/">
            Shipping & Returns
          </a>
        </div>
        <div>
          <a className="link" href="/">
            Careers
          </a>
          <a className="link" href="/">
            Blog
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
