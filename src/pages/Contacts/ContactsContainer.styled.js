import styled from "styled-components";

export const ContactsContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    font-size: 18px;
    gap: ${p => p.theme.spacing(4)};   
    margin: 0 auto;
    padding: ${p => p.theme.spacing(2)};
    align-items: center;

`