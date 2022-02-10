import React, { createContext, useState } from "react";
import { mockContacts } from "../components/App";

const ContactsContext = createContext({ contacts: []})

const ContactsProvider = (props) => {
  const [contacts, setContacts] = useState(mockContacts)
  
  const addContact = (contact) => {
    setContacts([...contacts, contact])
  }

  const removeContact = (index) => {
    const newContactList = [...contacts]
    newContactList.splice(index, 1)
    setContacts(newContactList)
  }

  return (
    <ContactsContext.Provider value={{contacts, setContacts, addContact, removeContact}}>
      {props.children}
    </ContactsContext.Provider>
  );
};

export { ContactsContext, ContactsProvider };
