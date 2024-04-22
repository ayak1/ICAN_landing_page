import { useTranslation } from "react-i18next";
import { ServicesCards } from "./ServicesCards"
import { Container } from "react-bootstrap";

export const SoftwareServicesSection = () => {
    const { t } = useTranslation();
    return(
        <section className="software_services" id="software_services">
            <Container>
            <h1 className="section_title tajawal-bold">
                {t("section_title.Software_services")}
            </h1>
            <div className="section_content">
                <ServicesCards/>
            </div>
            </Container>
        </section>
    )
}