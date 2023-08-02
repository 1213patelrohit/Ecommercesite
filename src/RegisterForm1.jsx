import { ErrorMessage, Field, Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import "./Register.css";
import { Link } from "react-router-dom";

const Registration1 = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const handleSubmit = (values, {resetForm}) => {
    // console.log("Form data", values);
    resetForm()
  };
  const Schema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter Your name"),
    email: Yup.string().email().required("please enter your email"),
    password: Yup.string().min(6).required("please enter your password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must be metch")
      .required("required"),
  });
  return (
    <>
      <header className="header1" style={{ marginTop: "70px" }}>
        <h1 className="h1">FUN STORE LOGIN</h1>
      </header>
      <div className="main">
        <Formik
          initialValues={initialValues}
          validationSchema={Schema}
          onSubmit={handleSubmit}
          className="form_class"
        >
          {({ setFieldValue, errors, values }) => {
            return (
              <FormikForm>
                <h2>Sign Up Here 📝</h2>
                <Field
                  className="field_class"
                  type="name"
                  name="name"
                  placeholder="name"
                />
                <ErrorMessage name="name" component="div" className="error" />
                <Field
                  className="field_class"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage name="email" component="div" className="error" />
                <Field
                  className="field_class"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  // component="div"
                  className="error"
                />
                <Field
                  className="field_class"
                  type="Password"
                  name="confirmPassword"
                  placeholder="confirmPassword"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="error"
                />
                <button type="submit" className="submit_class btn-black   p">
                  Submit
                </button>
                <div className="info_div">
                  <p>
                    <Link className="info_div_Link" to="/LoginForm1">
                      Login
                    </Link>
                  </p>
                </div>
              </FormikForm>
            );
          }}
        </Formik>
      </div>
      <footer className="footer1">
        <p>
          You Join FUN STORE Family Thank You For Join{" "}
          <a href="/">FUN STORE™</a>
        </p>
      </footer>
    </>
  );
};
export default Registration1;
