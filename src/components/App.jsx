import { Component } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { InputForm } from './Phonebook.styled';
import { StyledForm } from './Phonebook.styled'; 
import { ButtonAdd } from './Phonebook.styled';
import { FindForm } from './Phonebook.styled';
import { TitleText } from './Phonebook.styled';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name may contain only letters, apostrophe, dash and spaces.')
    .matches(
      /[a-zA-Zа-яА-ЯЄєІіЇї]+(([' -][a-zA-Zа-яА-ЯЄєІіЇї ])?[a-zA-Zа-яА-ЯЄєІіЇї]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  number: Yup.string().matches(
    /^\d+$/,
    'Phone number must contain only digits.'
  ),
});

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
      <div>
        <InputForm>
          <h1>Phonebook</h1>
          <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={PhonebookSchema}
            onSubmit={(values, { resetForm }) => {
              this.addContact(values);
              resetForm();
            }}
          >
            <StyledForm>
              <label htmlFor="name">Name </label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" />
              <label htmlFor="number">Number</label>
              <Field name="number" type="tel" />
              <ButtonAdd type="submit">Add contact</ButtonAdd>
            </StyledForm>
          </Formik>
        </InputForm>
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
      </div>
    );
  }
}
