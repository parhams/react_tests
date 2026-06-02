import { Form, Formik } from 'formik';
import React from 'react';
import FormikControl from './FormikControl';
import { Link, NavLink } from 'react-router-dom';
import * as Yup from "yup";

const initialValues = {
    userName: "",
    password: ""
}

const validationSchema = Yup.object({
    userName: Yup.string().required(" نام کاربری الزامی است"),
    password: Yup.string().required("رمز عبور الزامی است")


})

const onSubmit = (values, submitProps) => {
    setTimeout(() => {
        submitProps.setSubmitting(false)
        submitProps.resetForm()
    }, 5000)
}

const Login = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnBlur={true}
            validateOnChange={true}
            validateOnMount
            enableReinitialize
        >
            {formik => {
                return (
                    <div className="login-wrapper">
                        <div className="text-center login-box">
                            <h5>ورود به حساب کاربری</h5>
                            <br/>
                            <Form>
                                <div className="input-group">
                                    <FormikControl
                                        name="userName"
                                        control="input"
                                        type="text"
                                        label="نام کاربری"
                                        icon="fa fa-user"
                                    />
                                </div>

                                <div className="input-group">
                                    <FormikControl
                                        name="password"
                                        control="input"
                                        type="password"
                                        label="رمز عبور"
                                        icon="fa fa-lock"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100" disabled={!(formik.dirty && formik.isValid) || formik.isSubmitting}>
                                    {
                                        formik.isSubmitting ? (
                                            <div className="spinner-border" role="status">
                                                <span className="visually-hidden">Loading ...</span>
                                            </div>
                                        ) : "ورود"

                                    }
                                </button>
                            </Form>

                            {/* <div className="links">
                            <NavLink className="hiddenable ms-2" to="/forfetPassword">فراموشی رمز</NavLink> |
                            <NavLink className="hiddenable ms-2" to="/register">ثبت‌ نام</NavLink>
                        </div> */}
                        </div>
                    </div>
                )
            }}
        </Formik>
    );
}

export default Login;
