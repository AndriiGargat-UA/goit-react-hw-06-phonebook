import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <h2>Phonebook</h2>
      <ContactForm />
      <Filter />
      <div>
        <h2>Contacts</h2>
        <ContactList />
      </div>
    </Layout>
  );
};
