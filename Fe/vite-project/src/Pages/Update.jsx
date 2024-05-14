import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {  useNavigate, useParams  } from 'react-router-dom';
import * as Yup from 'yup';
function Update() {
   let{id}=useParams()
    const navigate=useNavigate()
    const [Category, setCategory] = useState(null)
    useEffect(() => {
    GetProductByIdf()
    }, [])
    async function GetProductByIdf() {
        const response = await fetch('http://localhost:3000/employee/'+id)
        const data = await response.json()
        setCategory(data)
    }
  return (
    <>
    {
        Category &&
        <Formik
                initialValues={{ title: Category.title, author: Category.author, price: Category.price}}
                validationSchema={Yup.object({
                    title: Yup.string(),
                    author: Yup.string(),
                    price: Yup.number(),
                })}
                onSubmit={(values) => {
                    fetch('http://localhost:3000/employee/'+id, {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        method: "PUT",
                        body: JSON.stringify(values)
                    })
                    navigate("../adminpanel")
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
    }
    </>
  )
}

export default Update