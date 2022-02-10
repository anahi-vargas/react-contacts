import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContactsContext } from "../../contexts/ContactContext";
import { DetailsCard, DetailsCardAvatar, DetailsCardDescriptionTerm, DetailsCardName, DetailsCardEmail } from "../StyledComponents"

const  ContactDetailsCard = () => {
    const { contacts } = useContext(ContactsContext)

    let params = useParams()

    const checkParam = () => {
        const index = parseInt(params.index)
        return Number.isInteger(index) && index >= 0 && index < 4
    }

    return (
    checkParam(params) ?
       <DetailsCard>
            <div>
                <DetailsCardAvatar src={contacts[params.index].profilePic} alt={`Profile of ${contacts[params.index].firstName}${contacts[params.index].lastName}.`}/>
            </div>
            <div>
                <DetailsCardName>{contacts[params.index].firstName} {contacts[params.index].lastName}</DetailsCardName>
                <dl>
                    <DetailsCardDescriptionTerm>Phone Number</DetailsCardDescriptionTerm>
                    <dd>{contacts[params.index].phoneNumber}</dd>

                    <DetailsCardDescriptionTerm>Email</DetailsCardDescriptionTerm>
                    <DetailsCardEmail>{contacts[params.index].email}</DetailsCardEmail>

                    <DetailsCardDescriptionTerm>Address</DetailsCardDescriptionTerm>
                    <dd>{contacts[params.index].address}</dd>
                </dl>
            </div>
        </DetailsCard> :
        <div>Contact does not exist</div>
    )
}

export default ContactDetailsCard;