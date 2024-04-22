import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { SocialIcons } from "./SocialIcons";
import logo from '../assets/imgs/logo.svg';

export const Footer = () => {
    const { t } = useTranslation();
    return(
        <footer className="footer mt-5" id="footer">
            <Container>
            <Row className="p-5 align-items-center">
                <Col xl={6} className="">
                    <img src={logo} alt="logo"/>
                </Col>
                <Col xl={6}>
                    <SocialIcons/>
                </Col>

            </Row>
            </Container>
        </footer>
    )
}