import { ContactCardContainer, ContactCardAvatar, ContactCardButton, ContactCardInfo, AvatarDefault} from "../StyledComponents"
import { FaUserCircle } from "react-icons/fa";

const ContactCard = ({ index='', firstName='', lastName='', phoneNumber='', profilePic='', removeContact='' }) => {

    const checkImage = (url) => {
        let image = new Image();
        image.src = url
        return image.width > 0
    }

    return (
        <ContactCardContainer>
            <ContactCardInfo>
                <div>
                    {checkImage(profilePic) ? 
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