import { useContext } from "react";
import { ContactsContext } from "../../contexts/ContactContext";
import { DetailsCard, DetailsCardAvatar, DetailsCardDescriptionTerm, DetailsCardName, DetailsCardEmail } from "../StyledComponents"

const  ContactDetailsCard = () => {
    const { contacts } = useContext(ContactsContext)

    return (
        <DetailsCard>
            <div>
                <DetailsCardAvatar src={contacts[0].profilePic} alt={`Profile of ${contacts[0].firstName}${contacts[0].lastName}.`}/>
            </div>
            <div>
                <DetailsCardName>{contacts[0].firstName} {contacts[0].lastName}</DetailsCardName>
                <dl>
                    <DetailsCardDescriptionTerm>Phone Number</DetailsCardDescriptionTerm>
                    <dd>{contacts[0].phoneNumber}</dd>

                    <DetailsCardDescriptionTerm>Email</DetailsCardDescriptionTerm>
                    <DetailsCardEmail>{contacts[0].email}</DetailsCardEmail>

                    <DetailsCardDescriptionTerm>Address</DetailsCardDescriptionTerm>
                    <dd>{contacts[0].address}</dd>
                </dl>
            </div>
        </DetailsCard>
    )
}

export default ContactDetailsCard;