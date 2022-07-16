import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  ContactsFormInput,
  FormStyled,
  ContactsFormLabel,
  Button,
} from './ContactsForm.styled';

export const ContactsForm = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid(5);
  const numberId = nanoid(5);

  const handleInputValueChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onFormSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <FormStyled autoComplete="off" onSubmit={handleSubmit}>
        <ContactsFormLabel htmlFor={nameId}>Name</ContactsFormLabel>
        <ContactsFormInput
          id={nameId}
          value={name}
          onChange={handleInputValueChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ContactsFormLabel htmlFor={numberId}>Number</ContactsFormLabel>
        <ContactsFormInput
          id={numberId}
          value={number}
          onChange={handleInputValueChange}
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
};

ContactsForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
