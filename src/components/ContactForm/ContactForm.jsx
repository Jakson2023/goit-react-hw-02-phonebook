import { InputForm } from 'components/Phonebook.styled';
import { StyledForm } from 'components/Phonebook.styled';
import { ButtonAdd } from 'components/Phonebook.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
  


export const ContactForm = ({onAdd

}) => {

    

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




)


}