import React from 'react';
import PersonnalError from './PersonnalError';
import { ErrorMessage, Field } from 'formik';

const Input = ({ name, type, label, icon }) => {
    return (
        <div className="mb-3 position-relative">

            <i className={`${icon} input-icon`} />

            <Field
                type={type}
                name={name}
                id={name}
                className="form-control custom-input"
                placeholder={label}
            />

            <ErrorMessage name={name} component={PersonnalError} />
        </div>
    );
};

export default Input;