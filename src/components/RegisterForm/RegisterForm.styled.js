import styled from "styled-components";


export const FormAuth = styled.form `
    text-align: center;
    width: 280px;
    margin: ${p => p.theme.spacing(10)}  auto;
    padding: ${p => p.theme.spacing(4)};
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.spacing(6)};
    border-radius: ${p => p.theme.radius.l};
`
export const LabelAuth = styled.label`
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.spacing(2)};  
    color: ${p => p.theme.colors.labelColor};
`

export const InputAuth = styled.input`
    padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(4)};
    outline: transparent;
    border: 1px solid ${p => p.theme.colors.borderColor};
    border-radius: ${p => p.theme.radius.m};    
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
`