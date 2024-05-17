'use client'
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import { useRouter } from "next/navigation";
import React from 'react';



export default function FinalPage() {
   const router = useRouter();

return(


        <p className="flex flex-col justify-center text-left gap-5 items-center mx-auto my-20 py-12">
            <span className="text-black text-5xl text-center pb-10">You're order has been confirmed!</span>
            <span className="text-black ml-2">You may now close the page.</span>
         </p>
        
);
}
