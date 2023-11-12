import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormReg, InputReg, LabelReg } from './RegisterForm.styled';
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
   
    <FormReg  onSubmit={handleSubmit} autoComplete="off">
      <LabelReg >
        Username
        <InputReg type="text" name="name" required/>
      </LabelReg>
      <LabelReg >
        Email
        <InputReg type="email" name="email" required />
      </LabelReg>
      <LabelReg >
        Password
        <InputReg type="password" name="password" required/>
      </LabelReg>
      <Button type="submit">Register</Button>
    </FormReg>
   
  );
};
