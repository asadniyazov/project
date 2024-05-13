import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function Add() {
    return (
        <>
            <Formik
                initialValues={{ title: '', author: '', price: '' }}
                validationSchema={Yup.object({
                    title: Yup.string(),
                    author: Yup.string(),
                    price: Yup.number(),
                })}
                onSubmit={(values) => {
                    fetch('http://localhost:3000/employee', {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        method: "POST",
                        body: JSON.stringify(values)
                    })
                }}
            >
                <Form>
                    <label htmlFor="title">title</label>
                    <Field name="title" type="text" />
                    <ErrorMessage name="title" />
                    <br></br>
                    <label htmlFor="author">author</label>
                    <Field name="author" type="text" />
                    <ErrorMessage name="author" />
                    <br></br>
                    <label htmlFor="price">price</label>
                    <Field name="price" type="number" />
                    <ErrorMessage name="price" />
                    <br></br>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    )
}

export default Add