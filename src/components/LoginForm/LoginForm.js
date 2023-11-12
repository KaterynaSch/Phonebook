import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormReg, InputReg, LabelReg } from 'components/RegisterForm/RegisterForm.styled';
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
    <FormReg  onSubmit={handleSubmit} autoComplete="off">
      <LabelReg >
        Email
        <InputReg type="email" name="email" />
      </LabelReg>
      <LabelReg >
        Password
        <InputReg type="password" name="password" />
      </LabelReg>
      <Button type="submit">Log In</Button>
    </FormReg>
  );
};
