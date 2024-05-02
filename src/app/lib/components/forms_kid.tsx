/**
 * This component relies heavily on Formik and Yup. Read this tutorial here if you need it:
 * https://formik.org/docs/tutorial
 */

'use client'
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from 'yup';

export default function EntryFormKid() {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const router = useRouter();
    const gradeLims = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    return (
        <Formik
            //Initial values for when the input fields first populate 
            initialValues={{
                firstName: '',
                lastName: '',
                age: '',
                dateOfBirth: '',
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
                dateOfBirth: Yup.string()
                    .defined('not defined')
                    .datetime('buh')
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
                <p className="text-black text-2xl text-center">Information Entry</p>
                
                {/* Individual fields here. Each field has a wrapping div for styling purposes */}
                <div className="flex flex-row gap-4 items-center text-rose-600 grow text-nowrap">
                    <Field name="kidFirstName" type="text" className="border-2 border-gray-500 rounded-lg text-black indent-4 min-h-12" placeholder="First Name" />
                    <ErrorMessage name="KidFirstName" className="" />
                </div>
                
                <div className="flex flex-row gap-4 items-center text-rose-600 grow text-nowrap">
                    <Field name="kidLastName" type="text" className="border-2 border-gray-500 rounded-lg text-black indent-4 min-h-12" placeholder="Last Name" />
                    <ErrorMessage name="KidLastName" />
                </div>

                <div className="flex flex-row gap-4 items-center text-rose-600 grow text-nowrap">
                    <Field name="kidAge" type="text" className="border-2 border-gray-500 rounded-lg text-black indent-4 min-h-12" placeholder="Age" />
                    <ErrorMessage name="Kid's Age" />
                </div>
                
                <div className="flex flex-row gap-4 items-center text-rose-600 grow text-nowrap">
                    <Field name="kidDOB" type="text" className="border-2 border-gray-500 rounded-lg text-black indent-4 min-h-12" placeholder="Date of Birth" />
                    <ErrorMessage name="Date Of Birth" />
                </div>

                <div className="flex flex-row gap-4 items-center text-rose-600 grow text-nowrap">
                    <Field name="kidGrade" as="select" className="my-select border-2 border-gray-500 rounded-lg text-black indent-4 min-h-12" placeholder="Grade in School" />
                        <option value="Pre">PreK</option>
                        <option value="Kindergarten">Kindergarten</option>
                    <ErrorMessage name= "grade"/>
                </div>

                <div className="flex flex-row gap-4 items-center text-rose-600 grow text-nowrap">
                    <Field name="kidSchool" type="text" className="border-2 border-gray-500 rounded-lg text-black indent-4 min-h-12" placeholder="School Attending" />
                    <ErrorMessage name="school"/>
                </div>

                <button type="submit" className="px-10 py-2 mb-2 bg-green-500 text-white rounded-full">Confirm Information</button>
            </Form>
        </Formik>
        
    );
}

