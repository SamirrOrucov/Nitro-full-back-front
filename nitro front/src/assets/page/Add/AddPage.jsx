import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./AddPage.scss";
function AddPage() {
  const [dbData, setDbData] = useState([]);
  async function getFetch() {
    const result = await fetch("http://localhost:3003/");
    const data = await result.json();
    setDbData(data);
  }
  async function deleteCard(id) {
    await fetch("http://localhost:3003/" + id, { method: "DELETE" }).then(() =>
      setDbData((prevData) => prevData.filter((x) => x._id !== id))
    );
  }
  useEffect(() => {
    getFetch();
  }, []);

 async function postService(value) {
   await fetch("http://localhost:3003/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    });
   await getFetch()
  }

  return (
    <>
      <Formik
        initialValues={{ icon: "", title: "", description: "" }}
        validationSchema={Yup.object({
          icon: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
          title: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
          description: Yup.string()
            .max(250, "Must be 50 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            postService(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="addForm">
          <label htmlFor="icon">Icon</label>
          <Field name="icon" type="text" />
          <ErrorMessage name="icon" />

          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="description">Description</label>
          <Field name="description" type="description" />
          <ErrorMessage name="description" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <table>
        <thead>
          <tr>
            <td>Icon</td>
            <td>Title</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          {dbData.map(x=>
             <tr>
            <td><i className={x.icon}></i></td>
            <td>{x.title}</td>
            <td>{x.description}</td>
            <td><i onClick={()=>deleteCard(x._id)} class="fa-solid fa-trash-can"></i></td>
          </tr>
            
            )}
         
        </tbody>
      </table>
    </>
  );
}
export default AddPage;
