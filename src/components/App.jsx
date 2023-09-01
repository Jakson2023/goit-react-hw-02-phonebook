import { Component } from 'react';


import { nanoid } from 'nanoid';

import { FindForm } from './Phonebook.styled';
import { TitleText } from './Phonebook.styled';
import { Wrapper } from './Phonebook.styled';
import { ContactForm } from './ContactForm/ContactForm';





export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
    }));
  };

  inputSearch = e => {
    this.setState({ filter: e.target.value });
  };
  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {


    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact}/>
        <FindForm>
        <label htmlFor="search">Find contacts by name</label>
        <input
          type="text"
          value={this.state.filter}
          onChange={this.inputSearch}
        />
        </FindForm>
        <TitleText>Contacts</TitleText>
        <ul>
          {this.filteredContacts().map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </Wrapper>
    );
  }
}
