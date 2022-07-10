import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  ContactsFormInput,
  FormStyled,
  ContactsFormLabel,
  Button,
} from './ContactsForm.styled';

export class ContactsForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  nameId = nanoid(5);
  numberId = nanoid(5);

  handleInputValueChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <FormStyled autoComplete="off" onSubmit={this.handleSubmit}>
          <ContactsFormLabel htmlFor={this.nameId}>Name</ContactsFormLabel>
          <ContactsFormInput
            id={this.nameId}
            value={this.state.name}
            onChange={this.handleInputValueChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ContactsFormLabel htmlFor={this.numberId}>Number</ContactsFormLabel>
          <ContactsFormInput
            id={this.numberId}
            value={this.state.number}
            onChange={this.handleInputValueChange}
            type="<text>"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Button type="submit">Add contact</Button>
        </FormStyled>
      </>
    );
  }
}
