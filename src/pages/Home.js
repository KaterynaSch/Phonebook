import { Text } from "components/UserMenu/UserMenu.styled";

import { AccentText, HomeWrapper, IconContainer, PhoneIcon, Title, UserIcon, ZoomInIcon } from "../components/Home.styled";

  
  export default function Home() {
    return (
      <HomeWrapper>
        <Title >
        Welcome to the <AccentText >PHONEBOOK</AccentText> application          
        </Title>
        <Text>Here you can create your own contact book for safe storage and easy access</Text>
        <IconContainer>
          <PhoneIcon size={76}/>
          <UserIcon size={76}/>
          <ZoomInIcon size={76}/>
        </IconContainer>
      </HomeWrapper>
    );
  }
  