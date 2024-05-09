/**
 * This component relies heavily on Formik and Yup. Read this tutorial here if you need it:
 * https://formik.org/docs/tutorial
 */
'use client'
import { useState } from "react";
import clsx from 'clsx';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from 'yup';

import { InventorySizes } from "../definitions";
import { insertParent } from "../actions";

export default function EntryForm() {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    //this should be pulled from DB somewhere...
    const placeholderInventory: InventorySizes[] = [
        { id: '1', type: 'Toddler Boy ', size: '5T' },
        { id: '1', type: 'Toddler Boy ', size: '6T' },
        { id: '1', type: 'Toddler Boy ', size: '7T' },
        { id: '1', type: 'Toddler Boy ', size: '8T' },
        { id: '1', type: 'Toddler Boy ', size: '9T' },
        { id: '1', type: 'Toddler Boy ', size: '10T' },
        { id: '1', type: 'Toddler Boy ', size: '11T' },
        { id: '1', type: 'Toddler Boy ', size: '12T' },
        { id: '1', type: 'Toddler Boy ', size: '13T'},
  
        { id: '2', type: 'Toddler Girl ', size: '5T' },
        { id: '2', type: 'Toddler Girl ', size: '6T' },
        { id: '2', type: 'Toddler Girl ', size: '7T' },
        { id: '2', type: 'Toddler Girl ', size: '8T' },
        { id: '2', type: 'Toddler Girl ', size: '9T' },
        { id: '2', type: 'Toddler Girl ', size: '10T' },
        { id: '2', type: 'Toddler Girl ', size: '11T' },
        { id: '2', type: 'Toddler Girl ', size: '2T' },
        { id: '2', type: 'Toddler Girl ', size: '13T'},
  
        { id: '3', type: 'Boy ', size: '1'},
        { id: '3', type: 'Boy ', size: '2'},
        { id: '3', type: 'Boy ', size: '3'},
        { id: '3', type: 'Boy ', size: '4'},
        { id: '3', type: 'Boy ', size: '5'},
        { id: '3', type: 'Boy ', size: '6'},
        { id: '3', type: 'Boy ', size: '7'},
  
        { id: '4', type: 'Girl ', size: '1'},
        { id: '4', type: 'Girl ', size: '2'},
        { id: '4', type: 'Girl ', size: '3'},
        { id: '4', type: 'Girl ', size: '4'},
        { id: '4', type: 'Girl ', size: '5'},
        { id: '4', type: 'Girl ', size: '6'},
        { id: '4', type: 'Girl ', size: '7'},
  
        { id: '5', type: 'Men ', size: '6'},
        { id: '5', type: 'Men ', size: '7'},
        { id: '5', type: 'Men ', size: '8'},
        { id: '5', type: 'Men ', size: '9'},
        { id: '5', type: 'Men ', size: '10'},
        { id: '5', type: 'Men ', size: '11'},
        { id: '5', type: 'Men ', size: '12'},
        { id: '5', type: 'Men ', size: '13'},
        { id: '5', type: 'Men ', size: '14'},
        { id: '5', type: 'Men ', size: '15'},
        { id: '5', type: 'Men ', size: '16'},
  
        { id: '6', type: 'Women ', size: '5' },
        { id: '6', type: 'Women ', size: '6' },
        { id: '6', type: 'Women ', size: '7' },
        { id: '6', type: 'Women ', size: '8' },
        { id: '6', type: 'Women ', size: '9' },
        { id: '6', type: 'Women ', size: '10' },
        { id: '6', type: 'Women ', size: '11' },
        { id: '6', type: 'Women ', size: '12' },
        { id: '6', type: 'Women ', size: '13' },
        { id: '6', type: 'Women ', size: '14' }
    ];

    const [stage, setStage] = useState('parentInfo');
    //const checkEmail = '';
    function handleParentInfoToBrowse() {
        setStage("browsing");
    }
    function handleAddShoe(id: number) {

    }
    return (
        <Formik
            //Initial values for when the input fields first populate 
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                confirmEmail: '',
                phoneNumber: '',
                zip: '',
                
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
                    .required('Required!'),
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
            onSubmit={ (values, { setSubmitting } ) => {
                //TODO: Get rid of setTimeout
                //TODO: Code for updating database entries here
                //insertParent(values);
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    alert(typeof values.zip);
                    setSubmitting(false);
                }, 400)
            }}
        >
            <Form>
                {/* Conditional styling: make this div disappear if form is on a different stage. */}
                <div className={clsx(
                    "flex flex-col justify-center text-left gap-5 w-72 items-center mx-auto my-40",
                    {
                        "hidden": stage !== "parentInfo"
                    }
                )}>
                    {/* Form Title */}
                    <p className="text-black text-2xl text-center">Information Entry</p>
                    {/* Individual fields here. Each field has a wrapping div for styling purposes */}
                    <div className="flex flex-row gap-4 items-center text-rose-600 grow text-nowrap">
                        <Field name="firstName" type="text" className="border-2 border-gray-500 rounded-lg text-black indent-4 min-h-12" placeholder="First Name" />
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
                        <Field name="confirmEmail" type="text" className="border-2 border-gray-500 rounded-lg text-black indent-4 min-h-12" placeholder="Confirm Email" />
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
                    <button onClick={handleParentInfoToBrowse} className="x-10 py-2 mb-2 bg-green-500 text-white rounded-full">Next</button>
                </div>

                <div className={clsx(
                    "flex flex-col justify-center text-left gap-5 w-72 items-center mx-auto my-40",
                    {
                        "hidden": stage !== "browsing"
                    }
                )}>
                    {placeholderInventory.map((item) => (
                        <div key={item.id} className="bg-slate-200 rounded-lg p-5 mb-2.5 py-3">
                            <p className="text-black">{`${item.type} - Size ${item.size}`}</p>
                            <button onClick={handleAddShoe} className="px-8 py-2 mb-2 bg-green-500 btn-sm float-right text-white text-md rounded-full">Add To Cart</button>
                        </div>
                ))}
                </div>
                <button type="submit" className="px-10 py-2 mb-2 bg-green-500 text-white rounded-full">Confirm Information</button>
            </Form>
        </Formik>
    );
}