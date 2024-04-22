export const SocialIcon = ({ imageUrl , imageAlt }) => {

    return(
        <div className="social_icon">
            <img src={imageUrl} alt={imageAlt}/>
        </div>
    )
}