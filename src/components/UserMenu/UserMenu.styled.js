import styled from "styled-components";

export const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: ${p => p.theme.spacing(1)};
`

export const Text = styled.p`
    font-size: ${p => p.theme.spacing(4)};
    font-weight: 500;
    text-align: center;
    color: ${p => p.theme.colors.lableColor};

    @media only screen and (min-width: 768px) {
        font-size: ${p => p.theme.spacing(5)};
    }
`