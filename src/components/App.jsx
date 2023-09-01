import { Component } from 'react';
import { nanoid } from 'nanoid';
import { TitleText } from './Phonebook.styled';
import { Wrapper } from './Phonebook.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title } from './Phonebook.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const contactInList = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (contactInList) {
      alert(`${contactInList.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
      }));
    }
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

  deleteContact = contact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== contact),
    }));
    console.log(contact);
  };

  render() {
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm onAdd={this.addContact} />
        <Filter onSearch={() => this.inputSearch} filter={this.state.filter} />
        <TitleText>Contacts</TitleText>
        <ContactList
          onFilter={this.filteredContacts()}
          onDelete={this.deleteContact}
        />
      </Wrapper>
    );
  }
}
