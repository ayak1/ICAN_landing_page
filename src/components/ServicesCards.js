import { Row } from "react-bootstrap";
import { ServiceCard } from "./ServiceCard";
import website from '../assets/imgs/undraw_Web_developer_re_h7ie.png'
import website_icon from '../assets/imgs/web_service.svg'
import windows_apps from '../assets/imgs/undraw_Developer_activity_re_39tg.png'
import windows_apps_icon from '../assets/imgs/windows_apps_service.svg'
import mobile_apps from '../assets/imgs/undraw_Completed_m9ci.png'
import mobile_apps_icon from '../assets/imgs/mobile_apps_service.svg'
import { useTranslation } from "react-i18next";
export const ServicesCards = () => {
  const { t } = useTranslation();

    const services = [
        {
          title: t("software_services.service1.title", { returnObjects: true }),
          description: t("software_services.service1.description", { returnObjects: true }),
          imgUrl: website,
          icon:website_icon
        },
        {
          title: t("software_services.service2.title", { returnObjects: true }),
          description: t("software_services.service2.description", { returnObjects: true }),
          imgUrl: windows_apps,
          icon: windows_apps_icon
        },
        {
          title: t("software_services.service3.title", { returnObjects: true }),
          description: t("software_services.service3.description", { returnObjects: true }),
          imgUrl: mobile_apps,
          icon: mobile_apps_icon        
        },
      ];
      return(
        <Row className="d-flex g-3 align-items-center justify-content-center"  >
            {
            services.map((service, index) => {
                return (
                <ServiceCard
                    key={index}
                    {...service}
                    />
                )
            })
            }
      </Row>
      )
}