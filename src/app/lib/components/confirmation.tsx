'use client'

import React from 'react';
import { Formik, Form, Field } from 'formik';

const initialValues = {
  agree1: false,
  agree2: false,
  agree3: false
};

const ConfirmationForm = () => {
  const handleSubmit = (values) => {
    // Handle form submission here
    console.log('Form submitted with values:', values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <div>
          <span className="text-black text-lg">Confirmation and Disclaimer</span>
          <br />
            <label>
              <Field type="checkbox" name="agree1" />
              <span className="text-black ml-2">I understand that I will need to pick up my kids' shoes on [DATE OF EVENT] from [TIME OF EVENT] at [LOCATION].</span>
            </label>
          </div>
          <div>
            <label>
              <Field type="checkbox" name="agree2" />
              <span className="text-black ml-2">I understand that I need to bring my confirmation email (on phone or printed) along with my ID to pick up the shoes.</span>
            </label>
          </div>
          <div>
            <label>
              <Field type="checkbox" name="agree3" />
              <span className="text-black ml-2">I understand that inventory is limited and I may not get the size shoes I have registered for.</span>
            </label>
          </div>
          <button type="submit" className="max-w-32 px-2 py-1 mb-2 bg-green-500 text-white rounded-full text-nowrap grow-0">Place Order</button>
        </Form>
      )}
    </Formik>
  );
};

export default ConfirmationForm;