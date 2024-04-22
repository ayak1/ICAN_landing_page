import { SocialIcon } from "./SocialIcon.js"
import facebook from "../assets/imgs/facebook.svg"
import insta from "../assets/imgs/insta.svg"
import youtube from "../assets/imgs/youtube.svg"
import telegram from "../assets/imgs/telegram.svg"
import linkedIn from "../assets/imgs/linkedIn.svg"
import email from "../assets/imgs/email.svg"
import whatsapp from "../assets/imgs/whatsapp.svg"
export const SocialIcons = () => {
    const icons = [
        {
            name:'facebook',
            img:facebook,
            url:'#'
        },
        {
            name:'insta',
            img:insta,
            url:'#'
        },
        {
            name:'youtube',
            img:youtube,
            url:'#'
        },
        {
            name:'telegram',
            img:telegram,
            url:'#'
        },
        {
            name:'linkedIn',
            img:linkedIn,
            url:'#'
        },
        {
            name:'email',
            img:email,
            url:'#'
        },
        {
            name:'whatsapp',
            img:whatsapp,
            url:'#'
        },
    ]
    return(
        <div className="social_icons g-5">
            {icons.map((icon, index) => (
                <a href={icon.url}>
                    <SocialIcon key={index} imageUrl={icon.img.toString()} imageAlt={icon.name} />
                </a>
            ))
            }
        </div>
    )
}