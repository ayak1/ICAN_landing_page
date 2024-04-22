import { Col, Container, Row } from "react-bootstrap"
import backgroundEyeLeft from "../assets/imgs/backgroundEyeLeft.svg"
import videoSectionImg from '../assets/imgs/videoSection.jpg'
import checkIcon from '../assets/imgs/checkIcon.svg'
import { useTranslation } from "react-i18next"

export const VideoSection = () => {
    const { t, i18n } = useTranslation();

    const services = t('video_section.services', { returnObjects: true });
    const sectionContent = document.querySelector('.video_motion .section_content');
    const servicesEl = document.body.querySelectorAll('.video_motion .section_content .services .service');
    const servicesWrapper = document.querySelector('.video_motion .section_content .services');
    // Set the dir attribute for each p element
    if(servicesWrapper){
        servicesWrapper.setAttribute('dir', i18n.dir());
    }
    if(sectionContent){
        sectionContent.setAttribute('dir', i18n.dir());
    }
    servicesEl.forEach(el => {
      el.setAttribute('dir', i18n.dir());
      });
    return(
        <section className="video_motion" id="video_motion">
            <Container>

            <h1 className="section_title tajawal-bold">
            {t("section_title.Video_Editing")}
            </h1>
            <div className="backgroundEyeLeft animate__animated animate__zoomIn">
                <img src={backgroundEyeLeft}/>
            </div>
            <div className="section_content">
                <Row>
                    <Col xl={6}>
                        <img className="imgLeft" src={videoSectionImg}/>
                    </Col>
                    <Col xl={6} className=" services d-flex flex-column g-5">
                        {
                            services.map((service, index) => (
                                <div key={index} className="service d-flex justify-content-start align-items-baseline mb-4">
                                    <div className="me-2 mt-2">
                                        <img src={checkIcon}/>
                                    </div>
                                    <p className="tajawal-bold ">{service}</p>
                                </div>
                                
                            ))
                        }
                    </Col>
                </Row>
            </div>
            </Container>
        </section>
    )
}
