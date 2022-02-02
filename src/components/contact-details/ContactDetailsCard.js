import { DetailsCard, DetailsCardAvatar, DetailsCardDescriptionTerm, DetailsCardName, DetailsCardEmail } from "../StyledComponents"

const  ContactDetailsCard = ({ contact }) => {
    return (
        <DetailsCard>
            <div>
                <DetailsCardAvatar src={contact?.profilePic} alt={`Profile of ${contact?.firstName}${contact?.lastName}.`}/>
            </div>
            <div>
                <DetailsCardName>{contact?.firstName} {contact?.lastName}</DetailsCardName>
                <dl>
                    <DetailsCardDescriptionTerm>Phone Number</DetailsCardDescriptionTerm>
                    <dd>{contact?.phoneNumber}</dd>

                    <DetailsCardDescriptionTerm>Email</DetailsCardDescriptionTerm>
                    <DetailsCardEmail>{contact?.email}</DetailsCardEmail>

                    <DetailsCardDescriptionTerm>Address</DetailsCardDescriptionTerm>
                    <dd>{contact?.address}</dd>
                </dl>
            </div>
        </DetailsCard>
    )
}

export default ContactDetailsCard;