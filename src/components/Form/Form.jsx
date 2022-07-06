import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import {
  Input,
  FormStyled,
  Label,
  Button,
  ErrorMessageStyled,
} from './Form.styled';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    })
    .required(),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      {
        message:
          'Phone number must be at least 5 digits and can contain spaces, dashes, parentheses and can start with +',
      }
    )
    .required(),
});

const INITIAL_STATE = {
  name: '',
  id: '',
  number: '',
};

export class ContactsForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    values = { ...values, id: nanoid(5) };
    this.props.onFormSubmit(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={INITIAL_STATE}
        onSubmit={this.handleSubmit}
        validationSchema={schema}
      >
        <FormStyled>
          <Label htmlFor={this.nameId}>Name</Label>
          <Input type="text" name="name" />
          <ErrorMessageStyled name="name" component="div" />
          <Label htmlFor={this.numberId}>Phone</Label>
          <Input type="tel" name="number" />
          <ErrorMessageStyled name="number" component="div" />
          <Button type="submit"> Add to contact list</Button>
        </FormStyled>
      </Formik>
    );
  }
}
