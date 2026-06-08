import { ErrorMessage, Field, Form, Formik } from "formik";
 import * as Yup from 'yup';

 const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
});

const Login=()=>{
    const SubmitHandler=(values)=>{
        console.log(values)
    }
    return(
        <>
        <h1>Login Page </h1>
        <Formik onSubmit={SubmitHandler} validationSchema={validationSchema} initialValues={{email:"",password:""}}>
            <Form>
                <div>
                    <Field type="email" name="email" placeholder="Email"/>
                    <ErrorMessage name="email" component="p" className="error"/>
                </div>
                <div>
                    <Field type="password" name="password" placeholder="Password"/>
                    <ErrorMessage name="password" component="p" className="error"/>
                </div>
                <button type="submit">Login</button>
            </Form>
        </Formik>
        </>
    )
}
export default Login;