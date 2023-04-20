import { useSelector } from 'react-redux';
import { ContactListItem } from './ContactListItem';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';

export const ContactList = () => {
  const myContacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

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
