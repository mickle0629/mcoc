'use client'

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from 'yup'

export default function SearchShoes() {
    return (
        <div className="flex flex-col border-2 border-gray-200 rounded-lg justify-left items-center mx-auto my-40 min-w-96">
            <span className="text-black text-lg">Browse Shoes</span>

            <Formik
                initialValues={{
                    searchSize: '',
                    style: ''
                }}
                validationSchema={Yup.object({
                    searchSize: Yup.number()
                        .typeError('Must be a number!')
                        .required('Required!')
                        .integer('Invalid shoe size!')
                        .positive('Invalid shoe size!')
                        .max(16, 'Invalid shoe size!')
                        .min(1,'Invalid shoe size!')
                
                })}
                onSubmit={ (values, { setSubmitting } ) => {
                    setTimeout(() => {
                        //TODO: Integrate with database
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400)
                }}
            >
                <Form>
                    <div className="flex flex-col gap-1 w-full">
                        
                        {/* Text inputs for searching shoe sizes */}
                        <div className="flex gap-4 items-center text-rose-600">
                            <Field name="searchSize" type="text" className="border-2 border-gray-500 rounded-lg text-black indent-4 min-h-12 w-full" placeholder="US Shoe Size" />
                            <ErrorMessage name="searchSize" />
                        </div>

                        {/* Picking shoe styles */}
                        <div className="flex flex-row place-content-around">
                            <span className="text-black pr-5">Style</span>

                            <div className="grid grid-cols-2 gap-6">
                                <label htmlFor="style">
                                    <Field type="radio" name="style" value="toddlerBoy" />
                                    <span className="text-black ml-2">Toddler Boy</span>
                                </label>
                                <label htmlFor="style">
                                    <Field type="radio" name="style" value="toddlerGirl" />
                                    <span className="text-black ml-2">Toddler Girl</span>
                                </label>
                                <label htmlFor="style">
                                    <Field type="radio" name="style" value="boy" />
                                    <span className="text-black ml-2">Boy</span>
                                </label>
                                <label htmlFor="style">
                                    <Field type="radio" name="style" value="girl" />
                                    <span className="text-black ml-2">Girl</span>
                                </label>
                                <label htmlFor="style">
                                    <Field type="radio" name="style" value="men" />
                                    <span className="text-black ml-2">Men</span>
                                </label>
                                <label htmlFor="style">
                                    <Field type="radio" name="style" value="women" />
                                    <span className="text-black ml-2">Women</span>
                                </label>
                            </div>
                        </div>

                        {/* Submission and size conversion links */}
                        <div className="flex flex-row gap-6 place-content-evenly">
                            <button type="submit" className="max-w-32 px-2 py-1 mb-2 bg-green-500 text-white rounded-full text-nowrap grow-0">Search</button>
                            {/* TODO: link to size conversion methods/charts. Currently does same thing as submit button */}
                            <button type="submit" className="px-2 py-1 mb-2 bg-blue-900 text-white rounded-full text-nowrap grow">Shoe Size Conversion</button>
                        </div>
                        
                    </div>
                </Form>
            </Formik>
        </div>
    )
}