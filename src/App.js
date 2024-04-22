// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { AboutUsSection } from './components/AboutUsSection';
import { Container } from 'react-bootstrap';
import { SoftwareServicesSection } from './components/SoftwareServicesSection';
import { DesignGraphicsSection } from './components/DesignGraphicsSection';
import { VideoSection } from './components/VideoSection';
import { MarketingSection } from './components/MarketingSection';
import { useTranslation } from 'react-i18next';
import { JoinUsSection } from './components/JoinUsSection';
import { Footer } from './components/Footer';
import { useState } from 'react';

function App() {
  const { t, i18n } = useTranslation();

  const paragraphs = document.body.querySelectorAll('p');
  const nav = document.body.querySelector('.navbar-nav');
  if(nav){
    nav.setAttribute('dir', i18n.dir())
  }
  // Set the dir attribute for each p element
  paragraphs.forEach(paragraph => {
    paragraph.setAttribute('dir', i18n.dir());
    });
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };

  return (
    <div className={`App ${theme}`}>
      <NavBar toggleTheme={toggleTheme} theme={theme}/>
      <HeroSection/>
      <AboutUsSection/>
      <SoftwareServicesSection/>
      <DesignGraphicsSection/>
      <VideoSection/>
      <MarketingSection/>
      <JoinUsSection/>
      <Footer/>
    </div>
  );
}

export default App;
