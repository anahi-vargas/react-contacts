import { ContactCardContainer, ContactCardAvatar, ContactCardButton, ContactCardInfo, AvatarDefault} from "../StyledComponents"
import { FaUserCircle } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ContactCard = ({ index='', firstName='', lastName='', phoneNumber='', profilePic='', removeContact='' }) => {

    let navigate = useNavigate()

    const handleClick = () => {
        navigate(`/contacts/${index}`)
    }
   
    useEffect(() => {
        const checkImage = (url) => {
            let image = new Image();
            image.src = url
            return image.width > 0
        }
        checkImage()    
    }, [])

    return (
        <ContactCardContainer>
            <ContactCardInfo onClick={handleClick}>
                <div>
                    {profilePic? 
                        <ContactCardAvatar src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} /> : 
                        <AvatarDefault><FaUserCircle className="default-avatar" /></AvatarDefault>}
                </div>
                <div>
                    <p>{firstName} {lastName}</p>
                    <p>{phoneNumber}</p>
                </div>
                </ContactCardInfo>
            <div>
                <ContactCardButton onClick={() => removeContact(index)}>X</ContactCardButton>
            </div>
        </ContactCardContainer>
    )
}

export default ContactCard;