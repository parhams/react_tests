import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, FieldArray, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import PersonnalError from "./PersonnalError";
import FavouritsField from "./FavouritsField";
import FormikControl from "./FormikControl";

const initialValues = {
    email: "",
    password: "",
    repassword: "",
    address: {
        city: '',
        postalCode: ''
    },
    phone: ['', ''],
    favourits: [''],
    bio: '',
    remember: false,
    education: '',
    gender: '0'
}

const genders = [
    {id: 0, value: 'مرد'},
    {id: 1, value: 'زن'}
]

const educations = [
    { id: 0, value: "ابتدائی" },
    { id: 1, value: "دیپلم" },
    { id: 2, value: "فوق دیپلم" },
    { id: 3, value: "لیسانس" },
    { id: 4, value: "فوق لیسانس" },
    { id: 5, value: "دکتری" }

]
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
    address: Yup.object({
        city: Yup.string().required('این قسمت را تکمیل کنید'),
        postalCode: Yup.string().required('این قسمت را تکمیل کنید')

    }),
    phone: Yup.array().of(Yup.string().required('این قسمت را تکمیل کنید')),
    favourits: Yup.array().of(Yup.string().required('این قسمت را تکمیل کنید')),
    bio: Yup.string()
        .min(10, "حداقل 10 کاراکتر وارد کنید")
        .required("بیوگرافی الزامی است"),
    education: Yup.string().required('این قسمت را تکمیل کنید'),
    remember: Yup.boolean()
})

const onSubmit = (values, submitProps) => {
    setTimeout(() => {
        submitProps.setSubmitting(false)
        submitProps.resetForm()
    }, 5000)
}

const validateBio = value => {
    let error;
    if (!value)
        error = "فیلد بیوگرافی الزامی است"
}

const LoginForm = (props) => {

    const [savedData, setSavedData] = useState(null)
    const [myValues, setMyValues] = useState(null)

    const handelSavedData = (formik) => {
        localStorage.setItem('savedData', JSON.stringify(formik.values))
        formik.resetForm()
    }

    const handelGetSavedData = (formik) => {
        // setMyValues(savedData)
        formik.setValues(savedData)

    }

    useEffect(() => {
        let localSavedData = JSON.parse(localStorage.getItem('savedData'))
        setSavedData(localSavedData)
    }, [])

    return (
        <Formik
            initialValues={myValues || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnBlur={true}
            validateOnChange={true}
            validateOnMount
            enableReinitialize
        >
            {formik => {
                console.log(formik)
                return (<div className="container mt-5" dir="rtl">
                    <div className="row justify-content-center">
                        <div className="col-11 col-md-6 col-lg-4">

                            <div className="card p-4 shadow rounded-4">
                                <h3 className="text-center mb-4">فرم ثبت نام</h3>

                                <Form className="row justify-content-center">

                                    {/* Email */}
                                    <FormikControl
                                        control="input"
                                        name="email"
                                        label="ایمیل"
                                    />
                                    {/* Password */}
                                    <div className="mb-3">
                                        <label className="form-label">رمز عبور</label>
                                        <Field type="password" name="password" id="password" className="form-control" />
                                        <ErrorMessage name="password" component={PersonnalError} />
                                    </div>

                                    {/* Repassword */}
                                    <div className="mb-3">
                                        <label className="form-label">تکرار رمز عبور</label>
                                        <Field name="repassword">
                                            {({ field, form, meta }) => {
                                                console.log(field, form, meta)
                                                return (
                                                    <>
                                                        <input type="password" id="repassword" className="form-control" {...field} />
                                                        {meta.touched && meta.error ?
                                                            <small className="text-center d-block text-danger">{meta.error}</small> :
                                                            null

                                                        }
                                                    </>
                                                )
                                            }}
                                        </Field>
                                    </div>
                                    {/* Education */}
                                    <FormikControl
                                        control="select"
                                        name="education"
                                        label="تحصیلات"
                                        options={educations}
                                    />
                                    {/* Education */}
                                    <FormikControl
                                        control="radio"
                                        name="gender"
                                        label="جنسیت"
                                        options={genders}
                                    />
                                    {/* City */}
                                    <div className="mb-3 col-6">
                                        <label htmlFor="city" className="form-label">شهر</label>
                                        <Field type="text" name="address.city" id="city" className="form-control" />
                                        <ErrorMessage name="address.city" component={PersonnalError} />
                                    </div>
                                    {/* PostalCode */}
                                    <div className="mb-3 col-6">
                                        <label htmlFor="postalCode" className="form-label">کد پستی</label>
                                        <Field type="text" name="address.postalCode" id="postalCode" className="form-control" />
                                        <ErrorMessage name="address.postalCode" component={PersonnalError} />
                                    </div>
                                    {/* telePhone */}
                                    <div className="mb-3 col-6">
                                        <label htmlFor="telePhone" className="form-label">شماره تلفن</label>
                                        <Field type="text" name="phone[0]" id="telePhone" className="form-control" />
                                        <ErrorMessage name="phone[0]" component={PersonnalError} />
                                    </div>
                                    {/* mobile */}
                                    <div className="mb-3 col-6">
                                        <label htmlFor="mobile" className="form-label">موبایل</label>
                                        <Field type="text" name="phone[1]" id="mobile" className="form-control" />
                                        <ErrorMessage name="phone[1]" component={PersonnalError} />
                                    </div>
                                    {/* favourits */}
                                    <div className="mb-3">
                                        <FieldArray type="text" id="favourits" name="favourits" className="form-control">
                                            {props => <FavouritsField {...props} />}
                                        </FieldArray>
                                    </div>

                                    {/* Bio */}
                                    <FormikControl
                                        control="textarea"
                                        name="bio"
                                        label="بیو گرافی"
                                    />
                                    {/* Remember */}
                                    <div className="form-check form-check-reverse mb-3">
                                        <Field type="checkbox" name="remember" id="remember" />
                                        <label className="form-check-label">
                                            مرا به خاطر بسپار
                                        </label>
                                    </div>
                                    <div className="row mb-3 col-8">
                                        <button type="submit" className="btn btn-primary w-100" disabled={!(formik.dirty && formik.isValid) || formik.isSubmitting}>
                                            {
                                                formik.isSubmitting ? (
                                                    <div className="spinner-border" role="status">
                                                        <span className="visually-hidden">Loading ...</span>
                                                    </div>
                                                ) : "ثبت نام"

                                            }
                                        </button>
                                        {/* <button type="button" className="btn btn-info" onClick={()=>{formik.setFieldTouched('bio');formik.validateField('bio')}}>اعتبارسنجی بیوگرافی</button>
                                        <button type="button" className="btn btn-info" onClick={()=>{formik.setTouched({email: true, password:true});formik.validateForm()}}>اعتبارسنجی فرم</button> */}
                                        {
                                            formik.dirty ?
                                                <button type="reset" className="btn btn-danger">پاک کردن</button>
                                                : null

                                        }
                                        {
                                            savedData ? (<button type="button" className="btn btn-warning" onClick={() => handelGetSavedData(formik)}>
                                                بازنشانی داده های فرم
                                            </button>) : null
                                        }
                                        {
                                            (formik.dirty && formik.isValid) ? (<button type="button" className="btn btn-success" onClick={() => handelSavedData(formik)}>
                                                ذخیره داده های فرم
                                            </button>) : null
                                        }
                                    </div>

                                </Form>
                            </div>

                        </div>
                    </div>
                </div>
                )
            }

            }
        </Formik>
    );
};

export default LoginForm;
