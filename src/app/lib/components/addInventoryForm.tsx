'use client'
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from 'yup';
import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link'

export default function AddInventory() {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const router = useRouter();
    const gradeLims = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    return (
        <Formik
            //Initial values for when the input fields first populate 
            initialValues={{
                shoeSize: '',
                shoeType:'',
            }}
            //input verification using Yup
            validationSchema={Yup.object({
                shoeSize: Yup.number()
                    .integer('Must be a number!')
                    .required('Required!'),
                shoeType: Yup.string()
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
                <p className="text-black text-2xl text-center">Add Shoes to the Inventory</p>
                
                {/* Individual fields here. Each field has a wrapping div for styling purposes */}
                <div className="flex flex-row gap-4 items-center text-rose-600 grow text-nowrap">
                    <Field name="shoeSize" type="text" className="border-2 border-gray-500 rounded-lg text-black indent-4 min-h-12" placeholder="Age" />
                    <ErrorMessage name="Shoe Size" />
                </div>

                <div className="flex flex-row gap-4 items-center text-rose-600 grow text-nowrap">
                    <div className="form-field indent-4 min-h-12 w-[13.5rem] border-2 border-gray-500 rounded-lg">
                        <Field name="ShoeType" as="select" className="pt-3 block w-full py-2 px-3 border-0 rounded-lg text-gray-400">
                            <option value="">Shoe Type</option>
                            <optgroup label="Toddler Sizes" className="text-black">
                                <option value="toddlerGirls">Toddler Girls</option>
                                <option value="toddlerBoys">Toddler Boys</option>
                            </optgroup>
                            <optgroup label="Child Size" className="text-black">
                                <option value="girl">Girls</option>
                                <option value="boy">Boys</option>
                            </optgroup>
                            <optgroup label="Adult Sizes" className="text-black">
                                <option value="womens">Womens</option>
                                <option value="mens">Mens</option>
                            </optgroup>
                        </Field>
                    </div>
                    <ErrorMessage name="addInventory" />
                </div>

                <button type="submit" className="px-10 py-2 mb-2 bg-green-500 text-white rounded-full"><Link href="/fullinventory">Confirm Information</Link></button>
            </Form>
        </Formik>
        
    );
}

