/**
 * This component relies heavily on Formik and Yup. Read this tutorial here if you need it:
 * https://formik.org/docs/tutorial
 */

'use client'
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from 'yup';
import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link'

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

export default function EntryFormKid() {
    const router = useRouter();
    const gradeLims = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    return (
        <Formik
            //Initial values for when the input fields first populate 
            initialValues={{
                firstName: '',
                lastName: '',
                age: '',
                gradeOfSchool: '',
                schoolAttend: '',
                shoeSize: '',
                shoeStyle:'',
            }}
            //input verification using Yup
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less!')
                    .required('Required!'),
                lastName: Yup.string()
                    .required('Required!'),
                age: Yup.number()
                    .integer('Please use numbers to enter age')
                    .required('Required!'),
                gradeOfSchool: Yup.string()    
                    .matches(gradeLims, 'Must be Between Grades K-8')
                    .length(1,'Use \'K\' or 1-8')
                    .required('Required!'),
                schoolAttend: Yup.string()
                    .required('Required!'),
            })}
            //handles submit events with a function that parses the submitted values into JSON formatted string and displays it in alert() after 400ms.
            onSubmit={ (values, { setSubmitting } ) => {
                //TODO: Get rid of setTimeout
                //TODO: Code for updating database entries here
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400)
                //Changes current path to the shoe-browsing section
                router.push('/browse')
            }}
        >
            <Form className="flex flex-col justify-center text-left gap-5 w-72 items-center mx-auto my-40">
                {/* Form Title */}
                <p className="text-black text-2xl text-center">Child Information</p>
                
                {/* Individual fields here. Each field has a wrapping div for styling purposes */}
                <div className="flex flex-row gap-4 items-center text-rose-600 grow text-nowrap">
                    <Field name="firstName" type="text" className="border-2 border-gray-500 rounded-lg text-black indent-4 min-h-12 hover:bg-sky-700" placeholder="First Name" />
                    <ErrorMessage name="firstName" className="" />
                </div>
                
                <div className="flex flex-row gap-4 items-center text-rose-600 grow text-nowrap">
                    <Field name="lastName" type="text" className="border-2 border-gray-500 rounded-lg text-black indent-4 min-h-12" placeholder="Last Name" />
                    <ErrorMessage name="lastName" />
                </div>

                <div className="flex flex-row gap-4 items-center text-rose-600 grow text-nowrap">
                    <Field name="age" type="text" className="border-2 border-gray-500 rounded-lg text-black indent-4 min-h-12" placeholder="Age" />
                    <ErrorMessage name="age" />
                </div>

                <div className="flex flex-row gap-4 items-center text-rose-600 grow text-nowrap">
                    <div className="form-field indent-4 min-h-12 w-[13.5rem] border-2 border-gray-500 rounded-lg">
                        <Field name="gradeOfSchool" as="select" className="pt-3 block w-full py-2 px-3 border-0 rounded-lg text-gray-400">
                            <option value="">Grade in School</option>
                            <optgroup label="PreK & Kinder" className="text-black">
                                <option value="preschool">Preschool</option>
                                <option value="kindergarten">Kindergarten</option>
                            </optgroup>
                            <optgroup label="Elementary School" className="text-black">
                                <option value="first_grade">1st Grade</option>
                                <option value="second_grade">2nd Grade</option>
                                <option value="third_grade">3rd Grade</option>
                                <option value="fourth_grade">4th Grade</option>
                                <option value="fifth_grade">5th Grade</option>
                            </optgroup>
                            <optgroup label="Middle School" className="text-black">
                                <option value="sixth_grade">6th Grade</option>
                                <option value="seventh_grade">7th Grade</option>
                                <option value="eighth_grade">8th Grade</option>
                            </optgroup>
                        </Field>
                    </div>
                    <ErrorMessage name="gradeOfSchool" />
                </div>

                <div className="flex flex-row gap-4 items-center text-rose-600 grow text-nowrap">
                    <Field name="schoolAttend" type="text" className="border-2 border-gray-500 rounded-lg text-black indent-4 min-h-12" placeholder="School Attending" />
                    <ErrorMessage name="schoolAttend"/>
                </div>

                <Link href="/browse"><button type="submit" className="px-10 py-2 mb-2 bg-green-500 text-white rounded-full hover:bg-sky-700">Confirm Information</button></Link>
            </Form>
        </Formik>
        
    );
}

