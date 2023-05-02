import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Link} from "react-router-dom";

const initialValues = {
  name: '',
  email: '',
  password: ''
};

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  return errors;
};

const onSubmit = values => {
  console.log(values);
};

const MyForm = () => {
  return (
    <div>
      <Link to="/home"><button>Henry Market</button></Link>
      <h1>Formik Form</h1>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" />
              <ErrorMessage name="name" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" />
              <ErrorMessage name="email" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field id="password" name="password" type="password" />
              <ErrorMessage name="password" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
