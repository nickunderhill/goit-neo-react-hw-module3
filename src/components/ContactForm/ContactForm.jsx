import css from './ContactForm.module.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const ContactForm = ({ onAddContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact({ ...values, id: nanoid() });
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <label className={css.contactFormLabel} htmlFor="name">
          Name
        </label>
        <Field
          className={css.contactFormInput}
          type="text"
          name="name"
          id="name"
        />
        <ErrorMessage
          name="name"
          component="span"
          className={css.errorMessage}
        />

        <label className={css.contactFormLabel} htmlFor="number">
          Number
        </label>
        <Field
          className={css.contactFormInput}
          type="text"
          name="number"
          id="number"
        />
        <ErrorMessage
          name="number"
          component="span"
          className={css.errorMessage}
        />

        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
