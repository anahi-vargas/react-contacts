import React, { useContext, useState } from "react";
import { CreateContactInputContainer, CreateContactForm, FormAvatar, FormButton, FormInput } from "../StyledComponents";
import { FaUserCircle } from "react-icons/fa"
import { ContactsContext } from "../../contexts/ContactContext";

function ContactCreateForm(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [profilePic, setProfilePic] = useState("")

    const { contacts, addContact } = useContext(ContactsContext)

    const handleFormSubmit = (event) => {
        event.preventDefault()
        addContact({ 
            id: contacts.length + 1,
            firstName: firstName,
            lastName: lastName,
            profilePic: profilePic,
            phoneNumber: phoneNumber,
            email: email,
            address: address
        })
    }

    return(
        <CreateContactForm>
            <div>
               {profilePic ? <FormAvatar src={profilePic} alt="Profile preview." /> : <FaUserCircle className="default-avatar" />}
            </div>
            <CreateContactInputContainer>
                <div>
                    <FormInput
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <FormInput
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <FormInput
                        type="tel"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div>
                    <FormInput
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <FormInput
                        type="text"
                        placeholder="Address"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div>
                    <FormInput
                        type="text"
                        placeholder="Profile Picture Url"
                        name="profilePic"
                        value={profilePic}
                        onChange={(e) => setProfilePic(e.target.value)}
                    />
                </div>
                <div>
                    <FormButton onClick={handleFormSubmit}>Add Contact</FormButton>
                </div>
            </CreateContactInputContainer>
            </CreateContactForm>
    )
}

export default ContactCreateForm;