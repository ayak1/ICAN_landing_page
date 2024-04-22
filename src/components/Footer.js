import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { SocialIcons } from "./SocialIcons";
import logo from '../assets/imgs/logo.svg';

export const Footer = () => {
    const { t } = useTranslation();
    return(
        <footer className="footer mt-5" id="footer">
            <Container>
            <Row className="p-5 align-items-center ">
                <Col xl={6} md={6} className="">
                    <img src={logo} alt="logo"/>
                </Col>
                <Col xl={6} md={6}>
                    <SocialIcons/>
                </Col>
            </Row>
            </Container>
            <Row className="copyrigth">
                    <p className=" text-center m-auto p-2 tajawal-bold">
                        © 2024 Your Website. Coded & Designed by Eng.Aya Killiah.
                    </p>
            </Row>
        </footer>
    )
}