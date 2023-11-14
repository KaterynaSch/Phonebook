import styled from "styled-components";

export const Header = styled.header `    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: ${p => p.theme.spacing(2)};     
    padding-bottom: ${p => p.theme.spacing(2)};   
    border-bottom: 1px solid ${p => p.theme.colors.darkColor};
    
`   