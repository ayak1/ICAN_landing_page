import { Col, Container, Row } from "react-bootstrap"
import { Logo } from "./Logo"
import { SocialIcons } from "./SocialIcons"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

export const HeroSection = () => {
  const { t } = useTranslation();

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(250 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  // const toRotate = [ "Software Services", "Web design","Web Development", "Design & Graphics","Marketing" ];
  const toRotate = t("hero.text.rotate", { returnObjects: true }).map(item => item); // Extracting text from translations

  const period = 2000;
  useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(250);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
    return(
        <section className="hero" id="home">
          <Container>
                <Row className="align-items-center g-md-4">
                    <Col xs={12} md={12} xl={6} className="left_content">
                        <Logo/>
                        <h1 className="hero_h1 tajawal-bold">{t("hero.logo")}</h1>
                        <SocialIcons/>
                    </Col>
                    <Col xs={12} md={12} xl={6} className="right_content d-flex align-items-start justify-content-center">
                        <h1>{t("hero.text.main")} <br/><span className="txt-rotate" dataPeriod="1000" data-rotate={JSON.stringify(toRotate)}><span className="wrap">{text}</span></span></h1>
                    </Col>
                    <div className="line"></div>
                </Row>
          </Container>
        </section>
    )
}