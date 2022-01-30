import { ContactCardList } from "../StyledComponents";
import ContactCard from "./ContactCard"

const ContactList = ({ contacts=[] }) => {
    return (
        <ContactCardList>
            {contacts.map((contact) => 
                <ContactCard 
                    key={contact.id}
                    firstName={contact.firstName} 
                    lastName={contact.lastName} 
                    phoneNumber={contact.phoneNumber} 
                    profilePic={contact.profilePic}
                />
            )}
        </ContactCardList>
    )
}

export default ContactList;