import { ContactCardContainer, ContactCardAvatar, ContactCardButton, ContactCardInfo} from "../StyledComponents"
const ContactCard = ({ firstName='', lastName='', phoneNumber='', profilePic='' }) => {
    return (
        <ContactCardContainer>
            <ContactCardInfo>
                <div>
                    <ContactCardAvatar src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} />
                </div>
                <div>
                    <p>{firstName} {lastName}</p>
                    <p>{phoneNumber}</p>
                </div>
                </ContactCardInfo>
            <div>
                <ContactCardButton>X</ContactCardButton>
            </div>
        </ContactCardContainer>
    )
}

export default ContactCard;