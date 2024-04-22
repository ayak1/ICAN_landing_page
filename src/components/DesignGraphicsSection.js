import checkIcon from '../assets/imgs/checkIcon.svg'
import { Col, Container, Row } from "react-bootstrap"
import SimpleSlider from "./SimpleSlider"
import { useTranslation } from 'react-i18next';
export const DesignGraphicsSection = () => {
    const { t, i18n } = useTranslation();

    const services = t('design_graphics_section.services', { returnObjects: true });
    const servicesEl = document.body.querySelectorAll('.design_graphics .section_content .services .service');
    const servicesWrapper = document.querySelector('.design_graphics .section_content .services');
    // Set the dir attribute for each p element
    if(servicesWrapper){
        servicesWrapper.setAttribute('dir', i18n.dir());
    }
    servicesEl.forEach(el => {
      el.setAttribute('dir', i18n.dir());
      });
    return(
        <section className="design_graphics" id="design_graphics">
            <Container>
            <h1 className="section_title tajawal-bold">
               {t("section_title.Design_Graphics")}
            </h1>
            <div className="section_content">
                <div className="services">
                    <Row>

                    {services.map((service, index) => (
                        // <a href="#">
                        <Col xl={6} xs={12}>
                        <div className="service d-flex justify-content-start align-items-baseline">
                            <div className="mt-2">
                                <img src={checkIcon}/>
                            </div>
                            <p className="tajawal-bold">{service}</p>
                        </div>
                        </Col>
                        // </a>
                    ))
                }
                </Row>
                </div>
                    <SimpleSlider/>
            </div>
                </Container>
        </section>
    )
}