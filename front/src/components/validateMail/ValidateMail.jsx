import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import styles from './ValidateMail.module.css'; // Archivo CSS separado

const initialValues = {
  name: '',
  password: '',
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  return errors;
};

const onSubmit = (values) => {
  console.log(values);
};

const MyForm = () => {
  return (
    <div className={styles.formContainer}>
      <Link to="/home">
        <button className={styles.homeButton}>Henry Market</button>
      </Link>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Username
              </label>
              <Field
                id="name"
                name="name"
                className={styles.input}
                placeholder="Enter your username"
              />
              <ErrorMessage name="name" className={styles.error} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                className={styles.input}
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" className={styles.error} />
            </div>

            <button type="submit" className={styles.submitButton}>
              Log in
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
