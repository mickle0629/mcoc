/**
 * This component relies heavily on Formik and Yup. Read this tutorial here if you need it:
 * https://formik.org/docs/tutorial
 */

'use client'
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from 'yup';


import { insertParent, GetParentName, FindParent } from "../actions";
import { useState } from "react";
import { unstable_cache } from "next/cache";

function reload()
{
    location.reload()
}

function equalTo(ref, msg) {
	return this.test({
		name: 'equalTo',
		exclusive: false,
    message: msg || '${path} must be the same as ${reference}',
		params: {
			reference: ref.path
		},
		test: function(value) {
      return value === this.resolve(ref) 
		}
	})
};
Yup.addMethod(Yup.string, 'equalTo', equalTo);

export default async function EntryForm() {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const router = useRouter();

    return (
        <Formik
            //Initial values for when the input fields first populate 
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                confirmEmail: '',
                phoneNumber: '',
                zip: ''
            }}
            //input verification using Yup
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less!')
                    .required('Required!'),
                lastName: Yup.string()
                    .required('Required!'),
                email: Yup.string()
                    .email('Invalid email address!')
                    .required('Required!'),
                confirmEmail: Yup.string()
                    .email('Invalid email address!')
                    .equalTo(Yup.ref("email"), "Emails must match."),
                //confirmEmail: Yup.string()
                   // .email('Invalid email address')
                    //.matches(,'Must match the first email')
                    //.required('Required'),
                phoneNumber: Yup.string()
                    .matches(phoneRegExp, 'Not a valid phone number.')
                    .required('Required!'),
                //TODO: when entering letters, error message is "zip must be a `number` type, but the final value was: `NaN` (cast from the value `"w"`)." Get better errors msg here.
                //      ESPECIALLY BIG ISSUE on small screen
                zip: Yup.number()
                    .positive('Invalid ZIP code')
                    .integer('Invalid ZIP code')
                    .required('Required')
            })}
            //handles submit events with a function that parses the submitted values into JSON formatted string and displays it in alert() after 400ms.
            onSubmit={ async (values, { setSubmitting } ) => {
                //TODO: Get rid of setTimeout
                //TODO: Code for updating database entries here
                insertParent(values);
                setTimeout(() => {
                    //alert(JSON.stringify(values, null, 2));
                    //alert(typeof values.zip);
                    setSubmitting(false);
                }, 400)
                let id = -1;
                try
                {
                    id = await FindParent(values);
                }
                catch(err)
                {
                    console.log(err);
                    throw(err);
                }
                
                let url:string = "/?id=";
                url = url + id.toString();
                //router.push(url)
                setTimeout(reload,500);
                router.replace(url).then(() => router.reload());
                //Changes current path to the shoe-browsing section
                
                router.push('/');
            }}
        >                
            <Form className="flex flex-col bg-white border-2 border-black rounded-md justify-center text-left gap-5 w-72 items-center mx-auto my-20">
                {/* Form Title */}
                <p className="text-black text-2xl text-center mt-6">Parent Information Entry</p>
                
                {/* Individual fields here. Each field has a wrapping div for styling purposes */}
                <div className="flex flex-row gap-4 items-center text-rose-600 grow text-nowrap">
                    <Field name="firstName" type="text" className="border-2 border-gray-500 rounded-lg text-black indent-4 min-h-12" placeholder="First Name"/>
                    <ErrorMessage name="firstName" className="" />
                </div>
                
                <div className="flex flex-row gap-4 items-center text-rose-600 grow text-nowrap">
                    <Field name="lastName" type="text" className="border-2 border-gray-500 rounded-lg text-black indent-4 min-h-12" placeholder="Last Name" />
                    <ErrorMessage name="lastName" />
                </div>

                <div className="flex flex-row gap-4 items-center text-rose-600 grow text-nowrap">
                    <Field name="email" type="text" className="border-2 border-gray-500 rounded-lg text-black indent-4 min-h-12" placeholder="Email" />
                    <ErrorMessage name="email" />
                </div>

                <div className="flex flex-row gap-4 items-center text-rose-600 grow text-nowrap">
                    <Field name="confirmEmail" type="text" className="border-2 border-gray-500 rounded-lg text-black indent-4 min-h-12" placeholder="Confirm Email"/>
                    <ErrorMessage name="confirmEmail" />
                </div>
                
                <div className="flex flex-row gap-4 items-center text-rose-600 grow text-nowrap">
                    <Field name="phoneNumber" type="text" className="border-2 border-gray-500 rounded-lg text-black indent-4 min-h-12" placeholder="Phone Number" />
                    <ErrorMessage name="phoneNumber" />
                </div>

                <div className="flex flex-row gap-4 items-center text-rose-600 grow text-nowrap">
                    <Field name="zip" type="text" className="border-2 border-gray-500 rounded-lg text-black indent-4 min-h-12" placeholder="ZIP Code" />
                    <ErrorMessage name="zip"/>
                </div>

                <button type="submit"  className="px-10 py-2 mb-8 bg-green-500 text-white rounded-full hover:bg-sky-700" >Confirm Information </button>
            </Form>
        </Formik>
        
    );
}