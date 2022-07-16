import { useState } from 'react';
import { useLocalStorage } from '../Hooks/UseLocalStorage';
import { ContactsForm } from './ContactsForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Box } from './Box/Box.styled';
import { nanoid } from 'nanoid';

const CONTACTS_LIST_KEY = 'contacts list';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(CONTACTS_LIST_KEY, []);
  const [filter, setFilter] = useState('');

  const onFormSubmit = (name, number) => {
    if (contacts.find(item => item.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts(prev => {
      return [...prev, { id: nanoid(5), name, number }];
    });
  };

  const onFilterChange = e => {
    const filteredList = e.target.value.trim();

    setFilter(filteredList);
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(item => item.id !== id));
  };

  const filteredName = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box px="30%">
      <Box textAlign="center" colors={p => p.theme.colors.black} as="h1">
        Phonebook
      </Box>
      <ContactsForm onFormSubmit={onFormSubmit} />

      <Box textAlign="center" colors={p => p.theme.colors.black} as="h2">
        Contacts
      </Box>
      <Filter value={filter} onChange={onFilterChange} />
      <ContactList
        value={filter}
        filteredName={filteredName}
        onDeleteContact={deleteContact}
      />
    </Box>
  );
};
