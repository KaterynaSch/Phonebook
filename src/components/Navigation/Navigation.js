import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Button } from 'components/Form/Form.styled';
import { NavWrapper } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavWrapper>
      <NavLink to="/">
       <Button>Home</Button> 
      </NavLink>
      {isLoggedIn && (
        <NavLink  to="/contacts">
          <Button>Contacts</Button>
        </NavLink>
      )}
    </NavWrapper>
  );
};
