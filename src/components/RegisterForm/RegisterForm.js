import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormAuth, InputAuth,  LabelAuth } from './RegisterForm.styled';
import { Button } from 'components/Form/Form.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
   
    <FormAuth  onSubmit={handleSubmit} autoComplete="off">
      <LabelAuth >
        Username
        <InputAuth type="text" name="name" required/>
      </LabelAuth>
      <LabelAuth >
        Email
        <InputAuth type="email" name="email" required />
      </LabelAuth>
      <LabelAuth >
        Password
        <InputAuth type="password" name="password" required/>
      </LabelAuth>
      <Button type="submit">Register</Button>
    </FormAuth>
   
  );
};
