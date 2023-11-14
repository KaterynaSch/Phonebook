import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormAuth, InputAuth, LabelAuth } from 'components/RegisterForm/RegisterForm.styled';
import { Button } from 'components/Form/Form.styled';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormAuth  onSubmit={handleSubmit} autoComplete="off">
      <LabelAuth >
        Email
        <InputAuth type="email" name="email" />
      </LabelAuth>
      <LabelAuth >
        Password
        <InputAuth type="password" name="password" />
      </LabelAuth>
      <Button type="submit">Log In</Button>
    </FormAuth>
  );
};
