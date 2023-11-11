import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { StyledForm, StyledLabel, StyledField, AddContact, StyledErrMessage  } from './Form.styled';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const formSchema = Yup.object().shape({
    name: Yup.string() 
    .matches(/^[a-zA-Zа-яА-Я]+(([ ' -][a-zA-Zа-яА-Я ])?[a-zA-ЯА-Я]*)*$/, 'The name format is incorrect!')    
    .required('Required'),
    phone: Yup.string()
    .matches(/\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,'The phone number format is incorrect!') 
    .required('Required'),
})

export const ContactForm = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);  
    
  const saveContact = ({name, phone}) => {
  
    const isExist = contacts.some(contact => contact.name === name);
     
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = {     
        name, phone };
    dispatch(addContact(newContact));    
  }; 

    return ( 
        <Formik
        initialValues={{
          name: '',
          phone: '',          
        }}
        validationSchema={formSchema}        
        onSubmit={(values, actions) => { 
          saveContact(values);       
         actions.resetForm();
        }}       
      >
        <StyledForm>
          <StyledLabel>
            Name
            <StyledField  name="name" type="text"/>
            <StyledErrMessage name="name" component="span"/>
          </StyledLabel>
          <StyledLabel>
            Number
          <StyledField  name="phone" type='tel' />
          <StyledErrMessage name="phone" component="span"/>
            </StyledLabel>          
          <AddContact type="submit">Add contact</AddContact>
        </StyledForm>
      </Formik>       
    )
};
