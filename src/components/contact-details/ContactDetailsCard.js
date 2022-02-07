import { useContext } from "react";
import { ContactsContext } from "../../contexts/ContactContext";
import { DetailsCard, DetailsCardAvatar, DetailsCardDescriptionTerm, DetailsCardName, DetailsCardEmail } from "../StyledComponents"

const  ContactDetailsCard = () => {
    const { firstContact } = useContext(ContactsContext)

    return (
        <DetailsCard>
            <div>
                <DetailsCardAvatar src={firstContact.profilePic} alt={`Profile of ${firstContact.firstName}${firstContact.lastName}.`}/>
            </div>
            <div>
                <DetailsCardName>{firstContact.firstName} {firstContact.lastName}</DetailsCardName>
                <dl>
                    <DetailsCardDescriptionTerm>Phone Number</DetailsCardDescriptionTerm>
                    <dd>{firstContact.phoneNumber}</dd>

                    <DetailsCardDescriptionTerm>Email</DetailsCardDescriptionTerm>
                    <DetailsCardEmail>{firstContact.email}</DetailsCardEmail>

                    <DetailsCardDescriptionTerm>Address</DetailsCardDescriptionTerm>
                    <dd>{firstContact.address}</dd>
                </dl>
            </div>
        </DetailsCard>
    )
}

export default ContactDetailsCard;