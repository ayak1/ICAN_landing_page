import { Col } from "react-bootstrap"

export const ServiceCard = ({ title, description, imgUrl, icon }) => {
    return (
      <Col className="service_card">
        <div className="service_title ak_shadow d-flex flex-column justify-content-center gap-2">
            <div className="icon">
                <img src={icon}/>
            </div>
            <h4 className="px-5">{title}</h4>
            <div className="service_description">
                <div className="content">
                    <img src={imgUrl} />
                    <div className="text">
                        <p className="tajawal-bold">{description}</p>
                    </div>
                </div>
            </div>
        </div>
      </Col>
    )
  }