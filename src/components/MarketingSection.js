import { Col, Container, Row } from "react-bootstrap";
import { MarketingCard } from "./MarketingCard";
import { useTranslation } from "react-i18next";

export const MarketingSection = () => {
    const { t } = useTranslation();
    const marketing_services =  t('marketing_section.services', { returnObjects: true });

    return (
        <section className="marketing" id="marketing">
            <Container>

            <h1 className="section_title tajawal-bold">
                {t("section_title.Marketing")}
            </h1>
            <div className="section_content d-flex flex-column justify-content-center align-items-center" >
                    <Row className="d-flex justify-content-center">
                        {marketing_services.slice(0, 4).map((service, index) => (
                                <MarketingCard {...service} key={index} />
                        ))}
                    </Row>
                    <Row>
                        <p className="center_text tajawal-bold">{t("marketing_section.center")}</p>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        {marketing_services.slice(4, 8).map((service, index) => (
                                <MarketingCard {...service} key={index} />
                        ))}
                    </Row>
            </div>
            </Container>
        </section>  
    );
};
