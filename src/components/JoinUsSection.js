import { useTranslation } from "react-i18next";
import { FormJoinUs } from "./FormJoinUs";
import { Col, Row } from "react-bootstrap";
import joinIMg from '../assets/imgs/undraw_Data_points_re_vkpq.png'
export const JoinUsSection = () => {
    const { t } = useTranslation();
    return(
        <section className="join_us" id="join_us">
            <h1 className="section_title tajawal-bold">
                {t("section_title.join_us")}
            </h1>
            <div className="section_content">
                <Row>
                    <Col xl={6} md={6} xs={12}>
                        <FormJoinUs/>
                    </Col>
                    <Col xl={6} md={6} >
                        <img src={joinIMg}/>
                    </Col>
                </Row>
            </div>
        </section>
    )
}