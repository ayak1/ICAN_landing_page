import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/imgs/logo.svg';
import moon from '../assets/imgs/moon-line.svg';
import sun from '../assets/imgs/sun-line.svg';
import { useEffect, useState } from "react";
import LanguageSelector from "./languageSelector";
import { useTranslation } from "react-i18next";


export const NavBar = ({ toggleTheme,theme }) => {
  const { t } = useTranslation();

  const [activeSection,setActiveSection] = useState('home');
  const [scrolled,setScrolled] = useState(false);
  // to change navBar color on first scroll to make it has back ground
  useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])

  const onUpdateActiveSection = (value) => {
  setActiveSection(value);
  }
  return(
      <Navbar expand="xl" className={scrolled ? "scrolled ak_shadow" : ""}  fixed="top" >
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home" className={activeSection === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveSection('home')}>{t("navbar.Home")}</Nav.Link>
            <Nav.Link href="#about" className={activeSection === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveSection('about')}>{t("navbar.About_us")}</Nav.Link>
            <Nav.Link href="#software_services" className={activeSection === 'software_services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveSection('software_services')}>{t("navbar.Software_services")}</Nav.Link>
            <Nav.Link href="#design_graphics" className={activeSection === 'design_graphics' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveSection('design_graphics')}>{t("navbar.Design_Graphics")}</Nav.Link>
            <Nav.Link href="#video_motion" className={activeSection === 'video_motion' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveSection('video_motion')}>{t("navbar.Video_Editing")}</Nav.Link>
            <Nav.Link href="#marketing" className={activeSection === 'marketing' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveSection('marketing')}>{t("navbar.Marketing")}</Nav.Link>
            <Nav.Link href="#join_us" className={activeSection === 'join_us' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveSection('join_us')}>{t("navbar.join_us")}</Nav.Link>
          </Nav>
          <div className="theme_btn">
            <button onClick={toggleTheme} className="border-0" type="button" >
            {
            theme === 'light' ?
                <div className="moon">
                  <img src={moon} alt="moon, turn theme to dark"/>
                </div>
                : 
                <div className="sun">
                  <img src={sun} alt="sun, turn theme to light"/>
                </div>
              }
             
              
            </button>
          </div>
          <LanguageSelector/>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
  )
}