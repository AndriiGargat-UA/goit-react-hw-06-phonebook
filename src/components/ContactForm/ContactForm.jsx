import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import {
  FormContainer,
  InputContainer,
  AddContactButton,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const myContacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;

    const checkContact = myContacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (checkContact) {
      alert(`${name} is already in contacts!`);
      event.currentTarget.reset();
      return;
    }

    const newContact = { id: nanoid(), name, number };
    dispatch(addContact(newContact));
    event.currentTarget.reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputContainer>

      <InputContainer htmlFor="number">
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputContainer>

      <AddContactButton type="submit">Add contact</AddContactButton>
    </FormContainer>
  );
};
