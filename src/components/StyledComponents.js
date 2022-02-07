import styled from "styled-components"

export const ContactCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 300px;
    width: 40vw;
    padding: 2vh;
    margin-bottom: 2vh;
    box-shadow: 2px 3px 2px 2px #B1B1B1;
    background-color: #FEFEFE;
`;

export const ContactCardAvatar = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
`;

export const ContactCardButton = styled.button`
    border: 1px solid #A2A2A2;
    background-color: #A2A2A2;
    color: #FFF;
    font-weight: bold;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    align-text: center;
    cursor: pointer;
`;

export const ContactCardInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    & > div {
        margin-left: 2.5vh;
    }
    
    & > div > p {
        margin: 0;
        color: #505358;
        
    }
`;

export const ContactCardList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
    overflow: auto;
    margin: 3vh 0vh 3vh 0vh
`;

export const DetailsCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 235px;
    width: 35vw;
    padding: 5vh;
    background-color: #F7F7F7;
`;

export const DetailsCardAvatar = styled(ContactCardAvatar)`
    width: 120px;
    height: 120px;
`;

export const DetailsCardDescriptionTerm = styled.dt`
    font-weight: bold;
`;

export const DetailsCardName = styled.p`
    text-align: center;
    font-size: 1.25rem;
`;

export const DetailsCardEmail = styled.dd`
    color: blue;
    text-decoration: underline;

    &:hover {
        cursor: pointer;
    }
`;

export const FormPageConainter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-width: 285px;
    width: 30vw;
    height: 25vh;
    margin: 25vh 50vh 50vh 50vh;
    box-shadow: 2px 3px 2px 2px #B1B1B1;
    background-color: #FEFEFE;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 20vh;
`;

export const FormInput = styled.input`
    border: none;
    border-bottom: 1px solid black;

    &:focus {
        outline: 0;
    }
`;

export const FormButton = styled.button`
    background-color: #E4E4E4;
    color: #000;
    width: 4.75rem;
    height: 2.25rem;
    outline: inherit;
    border: none;
    cursor: pointer;
`;

export const FormAvatar = styled(DetailsCardAvatar)`
    width: 100px;
    height: 100px;
`;

export const CreateContactForm = styled(FormPageConainter)`
    height: 55vh;
    margin: 3vh;
`;

export const CreateContactInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 35vh;
`;

export const AvatarDefault = styled.div`
    width: 100px;
`;

export const LogOutButton = styled(FormButton)`
    margin: 2vh 0vh 2vh 90vh
`;