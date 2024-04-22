import { useTranslation } from "react-i18next";
import backgroundEyeRight from "../assets/imgs/backgroundEyeRight.svg"
import { Container } from "react-bootstrap";


export const AboutUsSection = () => {
    const { t } = useTranslation();

    return(
        <section className="about_us" id="about">
            <Container>
            <h1 className="section_title tajawal-bold">
                {t("section_title.about")}
            </h1>
                    <div className="backgroundEyeRight animate__animated animate__zoomIn">
                        <img src={backgroundEyeRight}/>
                    </div>
            <div className="section_content align-items-start">
                <div className="content d-flex justify-content-center">
                    <div className="back_box ak_shadow"></div>
                    <div className="text align-items-center justify-content-between">
                        <p className="tajawal-bold text-center">{t("about_section.about")}</p>
                        <p className="tajawal-bold text-center">{t("about_section.manager")}</p>
                    </div>
                </div>
            </div>
            </Container>
        </section>
    )
}