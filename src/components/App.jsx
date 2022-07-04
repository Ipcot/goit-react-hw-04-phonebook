import { Component } from 'react';
import { Form } from './Form';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [],
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
    this.setState({
      filter: e.target.value,
    });
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(item => item.id !== id),
    }));
  };

  render() {
    const filteredName = this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <Form onFormSubmit={this.onFormSubmit} />

          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.onFilterChange} />
          <ContactList
            filteredName={filteredName}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </>
    );
  }
}
