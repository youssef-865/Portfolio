import Hero from './../2-hero/Hero';
import Main from "../3-main/Main";
import Contact from './../4-contact/Contact';

const Layout = () => {


  return (
    <div className="container">
   
      <Hero id="hero" />
      <div className="divider"></div>
      <Main id="main" />
      <div className="divider"></div>
      <Contact id="contact" />
    </div>
  );
};

export default Layout;
