import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

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

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    return (
        <div className="container mt-5" dir="rtl">
            <div className="row justify-content-center">
                <div className="col-11 col-md-6 col-lg-4">

                    <div className="card p-4 shadow rounded-4">
                        <h3 className="text-center mb-4">فرم ورود</h3>

                        <form onSubmit={formik.handleSubmit}>

                            {/* Email */}
                            <div className="mb-3">
                                <label className="form-label">ایمیل</label>
                                <input
                                    type="email"
                                    name="email"
                                    className={`form-control ${formik.touched.email && formik.errors.email ? "is-invalid" : ""
                                        }`}
                                    {...formik.getFieldProps('email')}    
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div className="invalid-feedback">
                                        {formik.errors.email}
                                    </div>
                                )}
                            </div>

                            {/* Password */}
                            <div className="mb-3">
                                <label className="form-label">رمز عبور</label>
                                <input
                                    type="password"
                                    name="password"
                                    className={`form-control ${formik.touched.password && formik.errors.password ? "is-invalid" : ""
                                        }`}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password && formik.errors.password && (
                                    <div className="invalid-feedback">
                                        {formik.errors.password}
                                    </div>
                                )}
                            </div>

                            {/* Repassword */}
                            <div className="mb-3">
                                <label className="form-label">تکرار رمز عبور</label>
                                <input
                                    type="password"
                                    name="repassword"
                                    className={`form-control ${formik.touched.repassword && formik.errors.repassword ? "is-invalid" : ""
                                        }`}
                                    value={formik.values.repassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.repassword && formik.errors.repassword && (
                                    <div className="invalid-feedback">
                                        {formik.errors.repassword}
                                    </div>
                                )}
                            </div>

                            {/* Remember */}
                            <div className="form-check form-check-reverse mb-3">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    className="form-check-input"
                                    checked={formik.values.remember}
                                    onChange={formik.handleChange}
                                />
                                <label className="form-check-label">
                                    مرا به خاطر بسپار
                                </label>
                            </div>

                            <button
                                type="submit" disabled={formik.errors && Object.keys(formik.errors).length > 0} 
                                className="btn btn-primary w-100"
                            >
                                ورود
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LoginForm;
