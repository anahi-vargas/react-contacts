import { ContactCardList } from "../StyledComponents";
import ContactCard from "./ContactCard"
import { ContactsContext } from "../../contexts/ContactContext";
import { useContext } from "react";

const ContactList = () => {
    const { contacts, removeContact } = useContext(ContactsContext)

    return (
        <ContactCardList>
            {contacts.map((contact, index) => 
                <ContactCard 
                    key={contact.id}
                    index={index}
                    firstName={contact.firstName} 
                    lastName={contact.lastName} 
                    phoneNumber={contact.phoneNumber} 
                    profilePic={contact.profilePic}
                    removeContact={removeContact}
                />
            )}
        </ContactCardList>
    )
}

export default ContactList;