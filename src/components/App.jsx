import { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name may contain only letters, apostrophe, dash and spaces.')
    .matches(/[a-zA-Zа-яА-ЯЄєІіЇї]+(([' -][a-zA-Zа-яА-ЯЄєІіЇї ])?[a-zA-Zа-яА-ЯЄєІіЇї]*)*$/, 'Name may contain only letters, apostrophe, dash and spaces.'),
    number: Yup.string()
    .matches(/^\d+$/, 'Phone number must contain only digits.')
    
});

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts,  { id: nanoid(), ...newContact }],
    }));
  };

inputSearch = e => {
  this.setState({ filter: e.target.value });
  
}
filteredContacts = () => {
  const { contacts, filter } = this.state;
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};


  render() {

    


    return (
      <div>
        <h1>Phonebook</h1>
        <Formik
          initialValues={{ name: '',number: '' }}
          validationSchema={PhonebookSchema}
          onSubmit={(values, { resetForm }) => {
            this.addContact(values);
            resetForm();
          }}
        >
          <Form>
            <label htmlFor="name">Name </label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" />
            <label htmlFor="number">Number</label>
            <Field name="number" type="tel"  />
            <button type="submit">Add contact</button>
          </Form>
        </Formik>
        <label htmlFor="search">Find contacts by name</label>
      <input type="text" value={this.state.filter} onChange={this.inputSearch} />
      <h2>Contacts</h2>
      <ul>
        {this.filteredContacts().map(contact => (
          <li key={contact.id}>{contact.name}: {contact.number}</li>
        ))}
      </ul>
    </div>
    );
  }
}
