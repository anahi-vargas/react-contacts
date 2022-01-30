import styled from "styled-components"

export const ContactCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40vw;
    padding: 2vh;
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
    justify-content: space-evenly;
    align-items: center;
    width: 60vw;
    height: 80vh;
    background-color: #E4E4E4;
`;