import { Component } from 'react';
import { ContactsForm } from './ContactsForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Box } from './Box/Box.styled';

const CONTACTS_LIST_KEY = 'contacts list';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFormSubmit = data => {
    if (this.state.contacts.find(item => item.name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    this.setState(prev => {
      return { contacts: [...prev.contacts, data] };
    });
  };

  onFilterChange = e => {
    const filteredList = e.target.value.trim();

    this.setState({
      filter: filteredList,
    });
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(item => item.id !== id),
    }));
  };

  componentDidMount = () => {
    const parseContactsFromStorage = JSON.parse(
      localStorage.getItem(CONTACTS_LIST_KEY)
    );
    if (parseContactsFromStorage) {
      this.setState({ contacts: parseContactsFromStorage });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(
        CONTACTS_LIST_KEY,
        JSON.stringify(this.state.contacts)
      );
    }
  };

  render() {
    const filteredName = this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <Box px="30%">
        <Box textAlign="center" colors={p => p.theme.colors.black} as="h1">
          Phonebook
        </Box>
        <ContactsForm onFormSubmit={this.onFormSubmit} />

        <Box textAlign="center" colors={p => p.theme.colors.black} as="h2">
          Contacts
        </Box>
        <Filter value={this.state.filter} onChange={this.onFilterChange} />
        <ContactList
          value={this.state.filter}
          filteredName={filteredName}
          onDeleteContact={this.deleteContact}
        />
      </Box>
    );
  }
}
