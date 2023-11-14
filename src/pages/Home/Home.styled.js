import styled from "styled-components";
import { HiOutlineUserAdd, HiOutlinePhone, HiOutlineZoomIn } from "react-icons/hi";

export const HomeWrapper = styled.div`

    min-height:calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${p => p.theme.spacing(4)};
`
export const Title = styled.h1`
    font-weight: 500;
    font-size: ${p => p.theme.spacing(8)};
    text-align: center;
    color: ${p => p.theme.colors.darkColor};

    @media only screen and (min-width: 768px) {
        font-size: ${p => p.theme.spacing(12)};
    }
`

export const IconContainer = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(4)};
`

export const AccentText = styled.span`
    color: ${p => p.theme.colors.accentColor};
`
export const PhoneIcon = styled(HiOutlinePhone)`
    stroke: ${p => p.theme.colors.accentColor};
`
export const UserIcon = styled(HiOutlineUserAdd)`
    stroke: ${p => p.theme.colors.accentColor};
`
export const ZoomInIcon = styled(HiOutlineZoomIn)`
    stroke: ${p => p.theme.colors.accentColor};
`