import { Component } from 'react';
import { nanoid } from 'nanoid';

export class Form extends Component {
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

    this.props.onFormSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', id: nanoid(5), number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>Name</label>
        <input
          id={this.nameId}
          value={this.state.name}
          type="text"
          name="name"
          onChange={this.handleInputValueChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={this.numberId}>Phone</label>
        <input
          id={this.numberId}
          value={this.state.number}
          onChange={this.handleInputValueChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit"> Add to contact list</button>
      </form>
    );
  }
}
