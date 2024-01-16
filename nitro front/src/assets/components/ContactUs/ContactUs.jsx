import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import "./ContactUs.scss"

function ContactUs() {
  return (
    <Formik
    initialValues={{ firstName: '', lastName: '', email: '',subject:'',message:'' }}
    validationSchema={Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      subject: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
        message: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
  <div className="form">
  <Form className='form_container'>
  <div className="row1">   
   <label htmlFor="firstName">First Name</label>
      <Field name="firstName" type="text" />
      <ErrorMessage name="firstName" />

      <label htmlFor="lastName">Last Name</label>
      <Field name="lastName" type="text" />
      <ErrorMessage name="lastName" />
      </div>

      <label htmlFor="email">Email Address</label>
      <Field name="email" type="email" />
      <ErrorMessage name="email" />
      <label htmlFor="subject">Subject</label>
      <Field name="subject" type="subject" />
      <ErrorMessage name="subject" />
      <label htmlFor="message">Message</label>
      <Field name="message" type="message" />
      <ErrorMessage name="message" />
      <button type="submit">Send Message</button>
    </Form>
  </div>
  </Formik>
  )
}

export default ContactUs
