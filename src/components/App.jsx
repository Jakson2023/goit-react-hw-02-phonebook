import { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name may contain only letters, apostrophe, dash and spaces.')
    .matches(/^[a-zA-Z\s'-]+$/, 'Name may contain only letters, apostrophe, dash and spaces.')
    
});

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts,  { id: nanoid(), ...newContact }],
    }));
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
            <label htmlFor="name">Number</label>
            <Field name="number" type="tel" />
            <button type="submit">Add contact</button>
          </Form>
        </Formik>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>{contact.name}{ `: `}{contact.number}</li>
          ))}
        </ul>
      </div>
    );
  }
}
