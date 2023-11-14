import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectError, selectIsLoading } from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/operations";
import { ContactForm } from "components/Form/Form";
import { ContactList } from "components/Contacts/ContactList";
import { ContactFilter } from "components/ContactFilter/ContactFilter";
import { ContactsContainer } from "pages/Contacts/ContactsContainer.styled";


export default function Contacts(){  
  
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsContainer>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
      {isLoading && !error && 
      <b>Request in progress...</b>
      }
      <ContactList />      
    </ContactsContainer>
  );
};