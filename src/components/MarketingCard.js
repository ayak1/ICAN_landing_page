import { Col } from "react-bootstrap"

export const MarketingCard = ({text,bg_color,text_color}) => {
    const style = {
        background:bg_color,
        color:text_color,
    }
    return(
        <Col className="marketing_card ak_shadow  d-flex justify-content-center align-items-center" style={style}>
            <p className="marketing-text tajawal-bold">{text}</p>
        </Col>
    )
}