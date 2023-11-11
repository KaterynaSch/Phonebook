import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { ContactForm } from "./Form/Form";
// import { ContactList } from "./Contacts/ContactList";
// import { ContactFilter } from "./ContactFilter/ContactFilter";
// import { MainContainer } from "./MainContainer.styled";
import { selectError, selectIsLoading } from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/operations";
import { ContactForm } from "components/Form/Form";
import { ContactList } from "components/Contacts/ContactList";
import { ContactFilter } from "components/ContactFilter/ContactFilter";
import { MainContainer } from "components/MainContainer.styled";


export default function Contacts(){  
  
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
      {isLoading && !error && 
      <b>Request in progress...</b>
      }
      <ContactList />      
    </MainContainer>
  );
};