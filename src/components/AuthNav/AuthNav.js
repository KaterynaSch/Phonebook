import { Button } from 'components/Form/Form.styled';
// import { AuthNavLink } from './AuthNav.styled';
import { NavLink } from 'react-router-dom';
import { Authwrapper } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Authwrapper>
      <NavLink  to="/register">
        <Button>Register</Button>
      </NavLink>
      <NavLink  to="/login">
        <Button>Log In</Button>
      </NavLink>
    </Authwrapper>
  );
};
