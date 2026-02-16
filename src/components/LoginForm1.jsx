import React from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import PersonnalError from "./PersonnalError";

const initialValues = {
    email: "",
    password: "",
    repassword: "",
    remember: false
}

const validationSchema = Yup.object({
    email: Yup.string()
        .email("ایمیل معتبر وارد کنید")
        .required("ایمیل الزامی است"),

    password: Yup.string()
        .min(8, "حداقل 8 کاراکتر")
        .matches(/[A-Z]/, "حداقل یک حرف بزرگ لازم است")
        .matches(/[0-9]/, "حداقل یک عدد لازم است")
        .matches(/[!@#$%^&*]/, "حداقل یک کاراکتر خاص لازم است")
        .required("رمز عبور الزامی است")
    ,
    repassword: Yup.string()
        .oneOf([Yup.ref('password')], 'تکرار رمز عبور صحیح نیست')
        .required("تکرار رمز عبور الزامی است")
    ,

    remember: Yup.boolean()
})

const onSubmit = values => {
    console.log("Form Data:", values);
}

const LoginForm = () => {

    // const formik = useFormik({
    //     initialValues,
    //     validationSchema,
    //     onSubmit
    // });

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit} 
        
        >
        <div className="container mt-5" dir="rtl">
            <div className="row justify-content-center">
                <div className="col-11 col-md-6 col-lg-4">

                    <div className="card p-4 shadow rounded-4">
                        <h3 className="text-center mb-4">فرم ورود</h3>

                        <Form>

                            {/* Email */}
                            <div className="mb-3">
                                <label className="form-label">ایمیل</label>
                                <Field type="email" name="email" id="email" className="form-control"/>
                                <ErrorMessage name="email">
                                    {error=> <small className="text-center d-block text-danger">{error}</small>}
                                </ErrorMessage>
                            </div>

                            {/* Password */}
                            <div className="mb-3">
                                <label className="form-label">رمز عبور</label>
                                <Field type="password" name="password" id="password" className="form-control"/>
                                <ErrorMessage name="password" component={PersonnalError}/>
                            </div>

                            {/* Repassword */}
                            <div className="mb-3">
                                <label className="form-label">تکرار رمز عبور</label>
                                <Field name="repassword">
                                    {({field, form, meta})=> {
                                        console.log(field, form, meta)
                                        return(
                                            <>
                                                <input type="password" id="repassword" className="form-control" {...field}/>
                                                {meta.touched && meta.error ?
                                                <small className="text-center d-block text-danger">{meta.error}</small> :
                                                null

                                                }
                                            </>
                                        )
                                    }}
                                </Field>
                            </div>

                            {/* Bio */}
                            <div className="mb-3">
                                <label className="form-label">بیو گرافی</label>
                                <Field type="text" name="bio" id="repassword" className="form-control" as="textarea"/>
                            </div>



                            {/* Remember */}
                            <div className="form-check form-check-reverse mb-3">
                                <Field type="checkbox" name="remember" id="remember"/>
                                <label className="form-check-label">
                                    مرا به خاطر بسپار
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary w-100">ورود</button>

                        </Form>
                    </div>

                </div>
            </div>
        </div>
        </Formik>
    );
};

export default LoginForm;
