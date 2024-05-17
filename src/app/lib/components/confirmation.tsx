'use client'

import React from 'react';
import { Formik, Form, Field } from 'formik';
import Link from 'next/link'

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
          <div className='flex flex-col justify-center text-left gap-5 items-center mx-auto my-20 py-12'>
            <span className="text-black text-5xl text-center pb-10">Confirmation and Disclaimer</span>
            <div className='flex flex-col gap-3 text-lg'>
              <label>
                <Field type="checkbox" name="agree1" />
                <span className="text-black ml-2">I understand that I will need to pick up my kids' shoes on [DATE OF EVENT] from [TIME OF EVENT] at [LOCATION].</span>
              </label>
              <label>
                <Field type="checkbox" name="agree2" />
                <span className="text-black ml-2">I understand that I need to bring my confirmation email (on phone or printed) along with my ID to pick up the shoes.</span>
              </label>
              <label>
                <Field type="checkbox" name="agree3" />
                <span className="text-black ml-2">I understand that inventory is limited and I may not get the size shoes I have registered for.</span>
              </label>
            </div>

            <Link href="/submitted"><button type="submit" className="px-10 py-6 mt-16 bg-green-500 text-white text-2xl rounded-full text-nowrap grow-0 ">Place Order</button></Link>

          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ConfirmationForm;