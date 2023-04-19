import { useSelector } from 'react-redux';
import { ContactListItem } from './ContactListItem';

export const ContactList = () => {
  const myContacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const visibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return myContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <ul>
      {visibleContacts().map(({ id, name, number }) => {
        return <ContactListItem key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
};
