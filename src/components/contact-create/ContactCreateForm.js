import React, { useState } from "react";
import { AvatarDefault, CreateContactInputContainer, CreateContactForm, FormAvatar, FormButton, FormInput } from "../StyledComponents";
import { FaUserCircle } from "react-icons/fa"

function ContactCreateForm(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [profilePic, setProfilePic] = useState("")

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log(profilePic)
    }

    return(
        <CreateContactForm onSubmit={handleFormSubmit}>
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
                    <FormButton type="submit">Add Contact</FormButton>
                </div>
            </CreateContactInputContainer>
            </CreateContactForm>
    )
}

export default ContactCreateForm;