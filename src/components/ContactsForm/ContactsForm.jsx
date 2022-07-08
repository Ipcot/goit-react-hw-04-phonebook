import { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  ContactsFormInput,
  FormStyled,
  ContactsFormLabel,
  Button,
} from './ContactsForm.styled';

export class ContactsForm extends Component {
  state = {
    name: '',
    id: nanoid(5),
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
    // this.setState({ id: nanoid(5) });
    this.props.onFormSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', id: nanoid(5), number: '' });
  };

  render() {
    return (
      <>
        <FormStyled onSubmit={this.handleSubmit}>
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

// import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { Formik, Form, ErrorMessage } from 'formik';
// import { Input } from './Form.styled';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   number: yup.number(),
// });

// const INITIAL_STATE = {
//   name: '',
//   id: '',
//   number: '',
// };

// export class ContactsForm extends Component {
//   state = {
//     name: '',
//     id: nanoid(5),
//     number: '',
//   };

//   nameId = nanoid(5);
//   numberId = nanoid(5);

//   handleInputValueChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleSubmit = () => {
//     this.props.onFormSubmit(this.state);
//     // resetForm();
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', id: nanoid(5), number: '' });
//   };

//   render() {
//     return (
//       <Formik
//         onSubmit={this.handleSubmit}
//         initialValues={INITIAL_STATE}
//         validationSchema={schema}
//       >
//         <Form>
//           <label htmlFor={this.nameId}>Name</label>
//           <Input
//             id={this.nameId}
//             value={this.state.name}
//             type="text"
//             name="name"
//             onChange={this.handleInputValueChange}
//             // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             // required
//           />
//           <ErrorMessage name="name" />
//           <label htmlFor={this.numberId}>Phone</label>
//           <Input
//             id={this.numberId}
//             value={this.state.number}
//             onChange={this.handleInputValueChange}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//           <ErrorMessage name="number" />
//           <button type="submit"> Add to contact list</button>
//         </Form>
//       </Formik>
//     );
//   }
// }
