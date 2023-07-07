import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import "./login.css";
import { Link } from "react-router-dom";
import { Login } from "./store/LoginSlice";

const LoginForm1 = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      Login({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };
  {console.log("AAAA",handleSubmit)}
  const Schema = Yup.object({
    email: Yup.string().email().required("please enter your email"),
    password: Yup.string().min(6).required("please enter your password"),
  });

  return (
    <>
      <header className="header1" style={{ marginTop: "70px" }}>
        <h1 className="h1">FUN STORE LOGIN</h1>
      </header>
      <div className="main1">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Schema}
          onSubmit={handleSubmit}
          className="form_class"
        >
          {({ setFieldValue, errors, values }) => {
            return (
              <FormikForm>
                <h2>Login Here 📝</h2>

                <Field
                  className="field_class"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <span className="text-danger">
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </span>

                <Field
                  className="field_class"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <span className=" text-danger">
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </span>

              
                <button type="submit" className="submit_class">
                  Submit
                </button>
               
                <div className="info_div">
                  <p>
                    <Link className="info_div_Link" to="/RegisterForm1">
                      Register Now
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
          Thank You For Loign <a href="/">FUN STORE™</a>
        </p>
      </footer>
    </>
  );
};
export default LoginForm1;
