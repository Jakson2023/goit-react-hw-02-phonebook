import { InputForm } from 'components/Phonebook.styled';
import { StyledForm } from 'components/Phonebook.styled';
import { ButtonAdd } from 'components/Phonebook.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required.')
    .matches(
      /[a-zA-Zа-яА-ЯЄєІіЇї]+(([' -][a-zA-Zа-яА-ЯЄєІіЇї ])?[a-zA-Zа-яА-ЯЄєІіЇї]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  number: Yup.string()
    .min(7, 'Too Short!')
    .max(17, 'Too Long!')
    .required('Required.')
    .matches(
      /^(?:\+?\d{1,4}\(\d{2,3}\)\d{3}-\d{2}-\d{2}|\+?\d{1,4}\d{3}-\d{2}-\d{2}|\+?\d{1,4}\(\d{2,3}\)\d{3}\d{2}\d{2}|\d{3}-\d{2}-\d{2})$/,
      'Invalid phone number format'
    ),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <InputForm>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={PhonebookSchema}
        onSubmit={(values, { resetForm }) => {
          onAdd(values);
          resetForm();
        }}
      >
        {({ dirty, isValid }) => (
          <StyledForm>
            <label htmlFor="name">Name </label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" />
            <label htmlFor="number">Number</label>
            <Field name="number" type="tel" />
            <ErrorMessage name="number" />
            <ButtonAdd type="submit" disabled={!dirty || !isValid}>
              Add contact
            </ButtonAdd>
          </StyledForm>
        )}
      </Formik>
    </InputForm>
  );
};
